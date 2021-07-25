const canvas = require('discord-canvas')
const Discord = require('discord.js');
// const config = require('../../config')

const welcomeMsg = (member) => {
  // const displayName = member.displayName;
  // const avatarUrl = member.user.displayAvatarURL();

  const welcomeCanvas = new canvas.Welcome()
  .setUsername('xixi52')
  .setDiscriminator('0001')
  .setMemberCount('140')
  .setGuildName('Server DEV')
  // .setAvatar(avatarUrl)
  .setColor('border', '#8015EA')
  .setColor('username-box', '#8015EA')
  // .setColor('avatar', '#8015EA')
  .setBackground('https://media.giphy.com/media/TJvPIld5GH7y6dTQX9/giphy.gif')
  .toAttachment();

  const attachment = new Discord.MessageAttachment(welcomeCanvas, 'welcome.png')
  return attachment
}

module.exports = welcomeMsg