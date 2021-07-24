const { MessageEmbed } = require('discord.js')
const config = require('../../../config')

const unlockChannel = (msg) => {
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
        const everyone = msg.guild.roles.cache.find(rol => rol.name === '@everyone');
    const admins = msg.guild.roles.cache.find(rol => rol.name === '《 ✊ 》Admin');
        msg.channel.edit({
            permissionOverwrites: [
                {
                    id: everyone.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                },
                {
                    id: admins.id,  
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                }
            ]
    })
    const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('Canal Desbloqueado')
    msg.channel.send(embed)
    }
}

module.exports = unlockChannel