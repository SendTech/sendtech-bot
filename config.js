require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN;
const giphyKey = process.env.GIPHY_API_KEY;

module.exports = {
  prefix: '!',
  BOT_TOKEN: token,
  GIPHY_API_KEY: giphyKey,
  serverUrl: 'https://sendtech-discord.netlify.app/',
  statusBOT: ['mi prefix !', 'Talleres', 'a SendTech', 'Tiktoks'],
  embedColor: 0xf75762
}
