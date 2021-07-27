const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../../../config.js')

/**
 * @function avatar
 * @param {Message} msg The message object
 * @returns {void}
 */
const avatar = (msg) => {
  const member = msg.mentions.users.first()
  if (!member) {
    const embed = new MessageEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle(`Que guap@ ${msg.author.username}`)
      .setImage(msg.author.displayAvatarURL({dynamic: true, size : 1024 }))
      .setColor(config.embedColor)

      const download = new MessageButton()
      .setStyle('url')
      .setLabel('Descargar')
      .setEmoji('📩')
      .setURL(msg.author.displayAvatarURL({
        format: 'png',
        dynamic: true
    }))
    msg.channel.send(embed, download)
  }
  else {
    const embed = new MessageEmbed()
    .setAuthor(member.username, member.displayAvatarURL())
      .setTitle(`Que guap@ ${member.username}`)
      .setImage(member.displayAvatarURL({dynamic: true, size : 1024 }))
      .setColor(config.embedColor)

      const download = new MessageButton()
      .setStyle('url')
      .setLabel('Descargar')
      .setEmoji('📩')
      .setURL(member.displayAvatarURL({
        format: 'png',
        dynamic: true
    }))
    msg.channel.send(embed, download)
  }
}

module.exports = avatar
