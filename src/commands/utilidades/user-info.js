const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const userInfo = (msg) => {
    const member = msg.mentions.users.first()
  if (!member) {
    const user = msg.author;
    const embed = new MessageEmbed()
    .setColor(config.embedColor)
    .setThumbnail(user.displayAvatarURL())
    .addFields(
        {
            name: 'Nombre del usuario',
            value:'```' + user.username+'```',
            inline: true
        },
        {
            name: 'Etiqueta',
            value: '```#'+user.discriminator+'```',
            inline: true
        },
        {
            name: 'Tu ID',
            value: '```' + user.id+'```',
            inline: true
        },
        {   
            name: '<:bot:869367929538510888> Eres un Bot?',
            value: '```'  + user.bot+'```'
        }
    )
    msg.channel.send(embed);
}
    else {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setThumbnail(member.displayAvatarURL())
        .addFields(
            {
                name: 'Nombre del usuario',
                value:'```' + member.username+'```',
                inline: true
            },
            {
                name: 'Etiqueta',
                value: '```#'+member.discriminator+'```',
                inline: true
            },
            {
                name: 'ID del usuario',
                value: '```' + member.id+'```',
                inline: true
            },
            {   
                name: `<:bot:869367929538510888> ${member.username} es un Bot?`,
                value: '```'  + member.bot+'```'
            }
        )
        msg.channel.send(embed);
    }
}

module.exports = userInfo