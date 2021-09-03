const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const createEmbed = (msg, args) => {
    const sendEmbed = msg.mentions.channels.first();
    const varEmbed = args.join(' ').split(' / ')

    if(!msg.guild.me.permissionsIn(msg.channel).has('SEND_MESSAGES')) {
        const embed = new MessageEmbed()
        .setTitle('<:warning:869596475938713620> Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        msg.channel.send({ embeds: [embed] })
    }
    else if(!msg.member.permissionsIn(sendEmbed).has('SEND_MESSAGES')) {
        const embed = new MessageEmbed()
            .setColor(config.embedColor)
            .setTitle('<:warning:869596475938713620> Perdon, pero no tienes permisos')
        msg.channel.send({ embeds: [embed] })
    }
    else if (!varEmbed[0] || !args) {
        msg.channel.send('El comando es !embed title / desciption / canal / color / footer');
    }
    else {
        const title = `<:doublearrow_left:869736320661090304>  ${varEmbed[0]}  <:doublearrow_right:869736320661073970>`
        if (!varEmbed[1]) {
            const embed = new MessageEmbed()
                .setTitle(title)
                .setColor(config.embedColor)
                // .setImage(msg.attachments.array()[0].url)
            msg.channel.send({ embeds: [embed] });
        }
        else if (!varEmbed[2]) {
            const embed = new MessageEmbed()
                .setTitle(title)
                .setDescription(varEmbed[1])
                .setColor(config.embedColor)
                // .setImage(msg.attachments.array()[0].url)
            msg.channel.send({ embeds: [embed] });
        }
        else if (!varEmbed[3]) {
                const embed = new MessageEmbed()
                    .setTitle(title)
                    .setDescription(varEmbed[1])
                    .setColor(config.embedColor)
                    // .setImage(msg.attachments.array()[0].url)
                sendEmbed.send({ embeds: [embed] });
        }
        else if (!varEmbed[4]){
                const embed = new MessageEmbed()
                    .setTitle(title)
                    .setDescription(varEmbed[1])
                    .setColor(varEmbed[3])
                    // .setImage(msg.attachments.array()[0].url)
                sendEmbed.send({ embeds: [embed] });
        }
        else if (!varEmbed[5]) {
                const embed = new MessageEmbed()
                    .setTitle(title)
                    .setDescription(varEmbed[1])
                    .setColor(varEmbed[3])
                    // .setImage(msg.attachments.array()[0].url)
                    .setFooter(varEmbed[4])
                sendEmbed.send({ embeds: [embed] });
        }
        else {
            msg.channel.send('El comando es !embed title / desciption / canal / color / footer');
        }
    }
}
module.exports = createEmbed