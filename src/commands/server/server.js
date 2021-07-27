const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const server = (msg) => {
    const server = msg.guild;
const embed = new MessageEmbed()
    .setAuthor(server.name, server.iconURL())
    .addFields(
        {
            name: 'ID del Servidor',
            value: '```' + server.id + '```', 
            inline: true
        },
        {
            name:'Dueño del Servidor', 
            value: '```' + server.owner.user.tag + '```', 
            inline: true
        },
        {
            name:'Creado el', 
            value: '```' + server.joinedAt.toDateString() + '```', 
            inline: true
        },
        {
            name:'Miembros', 
            value: '```' + server.memberCount + '```', 
            inline: true
        },
        {
            name:'Boost',
            value: '```' + server.premiumSubscriptionCount + '```', 
            inline: true
        },
        {
            name:'Roles',
            value: '```' + server.roles.cache.size + '```', 
            inline: true
        }
    )
    .setColor(config.embedColor)
msg.channel.send(embed);
}

module.exports = server