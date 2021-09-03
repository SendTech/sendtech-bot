const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const apodo = async (msg, args) => {
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_NICKNAMES')){
        const embed = new MessageEmbed()
        .setTitle('<:warning:869596475938713620> Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        return msg.channel.send({embeds:[embed]})
    }
    if(msg.member.roles.cache.has(config.ID_ADMIN_ROLE) || msg.member.permissionsIn(msg.channel).has('ADMINISTRATOR')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Perdon, pero no te puedo cambiar el apodo')
        return msg.channel.send({embeds:[embed]})
    }
    if (args.length === 0 || args === undefined || !args){
        const embed = new MessageEmbed()
        .setTitle(`El comando es ${config.prefix}apodo [nombre] no ${config.prefix}apodo`)
        .setFooter('Los [] no van')
        .setImage('https://media.giphy.com/media/eKrgVyZ7zLvJrgZNZn/giphy.gif')
        .setColor(config.embedColor)
        return msg.channel.send({embeds: [embed]});
    }
    await msg.member.setNickname(args.join(' '))
    const embed = new MessageEmbed()
    .setTitle('Apodo cambiado <:check:869577155758145536>')
    .setColor(config.embedColor)
    await msg.channel.send({ embeds: [embed] });
}

module.exports = apodo