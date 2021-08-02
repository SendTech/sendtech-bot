const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const lockChannel = (msg) => {
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setTitle('<:warning:869596475938713620> Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        msg.channel.send(embed)
    }

    else if(!msg.member.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Perdon, pero no tienes permisos')
        msg.channel.send(embed)
    }
    else {
        const everyone = msg.guild.roles.cache.find(rol => rol.name === '@everyone');
        const admins = msg.guild.roles.cache.get(config.ID_ADMIN_ROLE);
        msg.channel.edit({
            permissionOverwrites: [
                {
                    id: everyone.id,
                    deny: ['SEND_MESSAGES']
                },
                {
                    id: admins,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                }
            ]
    })
        const embed = new MessageEmbed()
            .setColor(config.embedColor)
            .setTitle('<:cancel:869573017452314674> Canal Bloqueado')
        msg.channel.send(embed)
    }
}

module.exports = lockChannel