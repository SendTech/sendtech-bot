const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const pingPong = (msg, client) => {
    const ping = Math.round(client.ws.ping)

    const embed = new MessageEmbed()
    .setTitle(`<:entertainment_button:869568714436120576> Pong | ${ping}ms`)
    .setColor(config.embedColor)
    msg.channel.send(embed)
}

module.exports = pingPong
