import { Presence } from "@premid/db";
import type { PresenceMetadataCategory } from "@premid/db/Presence.js";
import { logger } from "./logger.js";

let presenceList: { service: string; category: PresenceMetadataCategory }[] = [];

export async function updatePresenceList() {
	presenceList = (await Presence.find({}, { metadata: { category: true, service: true } })).map(presence => ({
		service: presence.metadata.service,
		category: presence.metadata.category,
	}));
	logger.debug(`Updated presence list with ${presenceList.length} presences`);
}

export function getPresenceList() {
	return presenceList;
}
