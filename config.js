require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN;
const giphyKey = process.env.GIPHY_API_KEY;

module.exports = {
  prefix: '!',
  BOT_TOKEN: token,
  ID_MEMBER_ROLE: '790977106698960918',
  ID_ADMIN_ROLE: '790972987779973150',
  ID_SUGGEST_CHANNEL: '864155481516802088',
  GIPHY_API_KEY: giphyKey,
  serverUrl: 'https://sendtech-discord.netlify.app/',
  statusBOT: ['mi prefix !', 'Talleres', 'a SendTech', 'Tiktoks'],
  embedColor: 0xf75762
}
