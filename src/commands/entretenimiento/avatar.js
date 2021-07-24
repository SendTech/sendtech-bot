const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

/**
 * @function avatar
 * @param {Message} msg The message object
 * @returns {void}
 */
const avatar = (msg) => {
  if (msg.content === `${config.prefix}avatar`) {
    const embed = new MessageEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle(`Que guap@ ${msg.author.username}`)
      .setImage(msg.author.displayAvatarURL())
      .setColor(config.embedColor)

    msg.channel.send(embed).then((msg) => msg.react('😉'))
  }
}

module.exports = avatar
