const { MessageEmbed } = require('discord.js')

/**
 *  @function sendEmbedError
 *  @param {Message} msg -> Message object from discord.js
 *  @param {string} title -> title to show in the error
 *  @param {string} description -> description to show in the error
 */
const sendEmbedError = ({ msg, title, description }) => {
  const embed = new MessageEmbed()
    .setTitle(`<:cancel:869573017452314674> ${title}`)
    .setDescription([`${description}`])
    .setImage('https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif')
    .setColor('#CE1212')

  msg.channel.send(embed)
}

module.exports = sendEmbedError
