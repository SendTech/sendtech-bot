const { config } = require('dotenv');

require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN;
const giphyKey = process.env.GIPHY_API_KEY;
const prefix = '!';
module.exports = {
  prefix: prefix,
  BOT_TOKEN: token,
  ID_MEMBER_ROLE: '790977106698960918',
  ID_ADMIN_ROLE: '866851454857379880',
  ID_SUGGEST_CHANNEL: '864155481516802088',
  GIPHY_API_KEY: giphyKey,
  serverUrl: 'https://sendtech-discord.netlify.app/',
  statusBOT: [`mi prefix ${prefix}`, 'Talleres', 'a SendTech', 'Tiktoks'],
  embedColor: 0xf75762
}
