const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const userInfo = (msg) => {
    const member = msg.mentions.users.first()
  if (!member) {
    const user = msg.author;
    const bot = user.bot ? 'Si' : 'No' ;
    const embed = new MessageEmbed()
    .setColor(config.embedColor)
    .setThumbnail(user.displayAvatarURL())
    .addFields(
        {
            name: '<:people:869573743477927988> Nombre del usuario',
            value:'```' + user.username+'```',
            inline: true
        },
        {
            name: '<:tag:869590351994835014> Etiqueta',
            value: '```#'+user.discriminator+'```',
            inline: true
        },
        {
            name: '<:IDs:869576071132110959> ID',
            value: '```' + user.id+'```',
            inline: true
        },
        {   
            name: '<:role:869573702730272808> Eres un Bot?',
            value: '```'  + bot +'```'
        },
        {
            name: '<:date:869574756129710080> Creaste tu cuenta',
            value: '```'  + msg.author.createdAt.toDateString() +'```',
            inline: true
        },
        {
            name: '<:date:869574756129710080> Te uniste',
            value: '```' + msg.member.joinedAt.toDateString() +'```',
            inline: true
        }
    )
    msg.channel.send(embed);
}
    else {
        const bot = member.bot ? 'Si' : 'No' ;
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setThumbnail(member.displayAvatarURL())
        .addFields(
            {
                name: '<:people:869573743477927988> Nombre del usuario',
                value:'```' + member.username+'```',
                inline: true
            },
            {
                name: '<:tag:869590351994835014> Etiqueta',
                value: '```#'+member.discriminator+'```',
                inline: true
            },
            {
                name: '<:IDs:869576071132110959> ID del usuario',
                value: '```' + member.id+'```',
                inline: true
            },
            {   
                name: `<:admin_button:869567092003864696> ${member.username} es un Bot?`,
                value: '```'  + bot+'```'
            },
            {
                name: '<:date:869574756129710080> Creaste tu cuenta',
                value: '```'  + member.createdAt.toDateString() +'```',
                inline: true
            },
            {
                name: '<:date:869574756129710080> Te uniste',
                value: '```'  + msg.member.joinedAt.toDateString() +'```',
                inline: true
            }
        )
        msg.channel.send(embed);
    }
}

module.exports = userInfo