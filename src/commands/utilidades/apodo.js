const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const apodo = async (msg, args) => {
    await msg.member.setNickname(args.join(' '))
    const embed = new MessageEmbed()
    .setTitle('Apodo cambiado <:check:869577155758145536>')
    .setColor(config.embedColor)
    await msg.channel.send(embed)
}

module.exports = apodo