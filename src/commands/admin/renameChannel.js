const { MessageEmbed } = require('discord.js')
const config = require('../../../config')

const renameChannel = (msg, args) => {
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_CHANNELS')){
        const embed = new MessageEmbed()
        .setTitle('<:warning:869596475938713620> Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        return msg.channel.send({embeds: [embed]})
    }

    if(!msg.member.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Perdon, pero no tienes permisos')
        return msg.channel.send({embeds: [embed]})
    }

    else {
        msg.channel.setName(args.join('-'))
    
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:utilities_button:869569323725893633> Canal Renombrado')
        msg.channel.send({embeds: [embed]})
    }
}

module.exports = renameChannel