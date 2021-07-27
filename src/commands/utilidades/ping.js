const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const pingPong = (msg, client) => {
    const ping = Math.round(client.ws.ping)

    const embed = new MessageEmbed()
    .setTitle(`Pong | ${ping}ms`)
    .setColor(config.embedColor)
    msg.channel.send(embed).then(msg => msg.react('🏓'))
}

module.exports = pingPong
