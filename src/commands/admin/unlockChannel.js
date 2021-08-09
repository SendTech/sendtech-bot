const { MessageEmbed } = require('discord.js')
const config = require('../../../config')

const unlockChannel = (msg) => {
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setTitle('<:warning:869596475938713620> Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        msg.channel.send({embeds: [embed]})
    }

    if(!msg.member.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Perdon, pero no tienes permisos')
        msg.channel.send({embeds: [embed]})
    }
    else {
        const everyone = msg.guild.roles.everyone;
        const admins = msg.guild.roles.cache.get(config.ID_ADMIN_ROLE);
        msg.channel.edit({
            permissionOverwrites: [
                {
                    id: everyone.id,
                    allow: ['SEND_MESSAGES']
                },
                {
                    id: admins,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                }
            ]
    })
    const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Canal Desbloqueado')
    msg.channel.send({embeds: [embed]})
    }
}

module.exports = unlockChannel