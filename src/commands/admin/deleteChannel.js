const { MessageEmbed } = require('discord.js')
const config = require('../../../config')

const deleteChannel = (msg) => {
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_CHANNELS')){
        const embed = new MessageEmbed()
        .setTitle('Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        return msg.channel.send(embed)
    }

    if(!msg.member.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('Perdon, pero no tienes permisos')
        return msg.channel.send(embed)
    }
    else {
        msg.channel.delete()
    }
}

module.exports = deleteChannel