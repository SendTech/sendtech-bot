const { MessageEmbed } = require('discord.js');
const config = require('../../../config.js')

const ball = (msg, args) => {
    if (args.length > 0) {
    const rpts = ['Sí', 'No', 'Tal vez', 'No sé', '¡Claro!', 'Para nada', 'Nunca', 'Por supuesto', 'Me encantaria', 'Probablemente', 'Probablemente no']
    const rptFinal = rpts[Math.floor(Math.random() * rpts.length)]

    const embed = new MessageEmbed()
        .setAuthor(msg.author.username, msg.author.displayAvatarURL())
        .setTitle('<:question:869584600626790430> Respondiendo a tu pregunta!')
        .setDescription(`Mi respuesta es: **${rptFinal}**`)
        .setColor(config.embedColor)
        msg.channel.send(embed);
    }
    if (args.length === 0 || args === undefined || !args){
        const embed = new MessageEmbed()
        .setTitle(`El comando es ${config.prefix}8ball [pregunta] no ${config.prefix}8ball`)
        .setImage('https://media.giphy.com/media/eKrgVyZ7zLvJrgZNZn/giphy.gif')
        .setColor(config.embedColor)
        msg.channel.send(embed)
    }
}

module.exports = ball