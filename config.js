require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN;
const giphyKey = process.env.GIPHY_API_KEY;

module.exports = {
  prefix: '!',
  BOT_TOKEN: token,
  ID_MEMBER_ROLE: '866851454857379880',
  GIPHY_API_KEY: giphyKey,
  serverUrl: 'https://sendtech-discord.netlify.app/',
  statusBOT: ['mi prefix !', 'Talleres', 'a SendTech', 'Tiktoks'],
  embedColor: 0xf75762
}
