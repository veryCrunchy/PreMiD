FROM gplane/pnpm:node20 AS base
RUN corepack enable
ARG SERVICE

FROM base AS build
WORKDIR /app

COPY . /app

RUN pnpm i --frozen-lockfile

RUN if ["$SERVICE" == "api" ]; then pnpm run -r codegen; fi
RUN pnpm --filter @premid/${SERVICE} run build
RUN if [ "$SERVICE" != "website" ]; then pnpm --filter @premid/${SERVICE} deploy --prod /prod/${SERVICE}; fi

FROM node:20-alpine AS prod
ARG SERVICE

WORKDIR /app

COPY --from=build /prod/${SERVICE} ./
ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]

FROM node:20-alpine AS website
WORKDIR /app
ENV PORT=80

COPY --from=build /app/apps/website/.output /app

EXPOSE 80

CMD ["node", "server/index.mjs"]