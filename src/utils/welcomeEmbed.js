const { MessageEmbed } = require('discord.js')
const config = require('../../config')

/**
 * @function welcomeEmbed
 * @param {GuildMember} member
 * @returns MessageEmbed
 */
const welcomeEmbed = (member) => {
  const displayName = member ? member.displayName : 'SendTech'
  const avatarUrl = member ? member.user.displayAvatarURL() : ''

  const embed = new MessageEmbed()
    .setTitle(`Bienvenid@ ${member ? member.displayName : 'a Sendero Tecnologico'} `)
    .setDescription('Recuerda aprender y compartir tus conocimientos con toda SendTech Community')
    .setColor(config.embedColor)
    .setImage('https://media.giphy.com/media/TJvPIld5GH7y6dTQX9/giphy.gif')
    .setAuthor(displayName, avatarUrl)

  return embed
}

module.exports = welcomeEmbed



// const canvas = require('discord-canvas')
// // const config = require('../../config')
// // const { MessageEmbed } = require('discord.js')

// const welcomeEmbed = (member) => {
//   // const displayName = member.displayName;
//   // const avatarUrl = member.user.displayAvatarURL();

//   const welcomeCanvas = new canvas.Welcome()
//   .setUsername('xixi52')
//   .setDiscriminator('0001')
//   .setMemberCount('140')
//   .setGuildName('Server DEV')
//   .setAvatar('https://www.site.com/avatar.jpg')
//   .setColor('border', '#8015EA')
//   .setColor('username-box', '#8015EA')
//   .setColor('discriminator-box', '#8015EA')
//   .setColor('message-box', '#8015EA')
//   .setColor('title', '#8015EA')
//   .setColor('avatar', '#8015EA')
//   .setBackground('https://media.giphy.com/media/TJvPIld5GH7y6dTQX9/giphy.gif')

//   return welcomeCanvas
// }

// module.exports = welcomeEmbed
