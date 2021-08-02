const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const serverAvatar = (msg) => {
    const server = msg.guild;
    const embed = new MessageEmbed()
        .setTitle('<:Fire:869583736352702494> El logo mas hermoso de todo el mundo')
        .setImage(server.iconURL({dynamic: true, size : 1024 }))
        .setColor(config.embedColor)
        .setFooter(msg.author.username, msg.author.displayAvatarURL())
    msg.channel.send(embed)
}

module.exports = serverAvatar

