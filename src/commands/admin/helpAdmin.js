const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const helpAdmin = (msg) => {
    if (msg.member.roles.cache.has(config.ID_ADMIN_ROLE)) {
    const admin = `
        **${config.prefix}delete**: Elimina el canal
        **${config.prefix}lock**: mutea el canal
        **${config.prefix}unlock**: Desmutea el canal
        **${config.prefix}rename**: Renombra un canal
    `
    const embed = new MessageEmbed()
        .setAuthor(msg.author.username, msg.author.displayAvatarURL())
        .setTitle('El comando solo para admins')
        .setColor(config.embedColor)
        .setDescription(admin)
    msg.channel.send(embed)
}
    else {
    const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('Perdon, pero no tienes permisos')
    msg.channel.send(embed)
}
}

module.exports = helpAdmin