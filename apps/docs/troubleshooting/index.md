<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
   {
     avatar: 'https://avatars.githubusercontent.com/u/89056213',
     name: 'Espresso',
     links: [
      { icon: 'x', link: 'https://x.com/JamieNNeedham' },
      { icon: 'discord', link: 'https://discord.com/users/167581994518052864' }
     ]
   },
   {
     avatar: 'https://gravatar.com/avatar/65eab64237c97de3b9daec297193780c',
     name: 'veryCrunchy',
     links: [
      { icon: 'github', link: 'https://github.com/veryCrunchy' },
      { icon: 'discord', link: 'https://discord.com/users/576097150359044106' }
     ]
   },
]
</script>

# General Troubleshooting

### Prerequisites

- PreMiD should be installed. If not, [Get PreMiD](https://premid.app/downloads).
- Confirm you are logged in with the right Discord account inside the PreMiD extension.
- Inside your Discord settings, make sure the following setting is enabled:
  > Activity Setting > Activity Privacy > Share your detected activities with others
- Your web browser should be up to date.
  > Most browsers will have an icon in the top left: "O" for Opera, "E" for Edge, Burger for Brave, Fox for FireFox, etc...
  - Select this logo and navigate to "Help" > "About."
    - *On Chromium you may navigate to: [opera://about/](opera://about/), [chrome://about/](chrome://about/), [edge://settings/help](edge://settings/help) etc. 
    - *On FireFox Navigation is: [about:config](about:config)
  - Check your Chromium/FireFox version. If there is an available update, take it. Restart the browser and clear your cache after.
- You should have development mode under your Extension menu activated. This is generally found at the top of your extension settings page.
- The PreMiD extension should be up to date.

> [!TIP]
> If you have not yet attempted to update or restart your web browser before starting this guide, you should begin by doing so. Most of the steps contained in this guide will begin with this.

### Conflicting Extensions

*The following extensions have been knnown to interfere with PreMiD functioning properly. Please disable them if you notice any issues.*

 - **Plasma**: *Will show activity in Extension, will not show activity in Discord.*

---

Authored by
<VPTeamMembers size="small" :members="members" />
