const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const server = (msg) => {
    const server = msg.guild;
const embed = new MessageEmbed()
    .setAuthor(server.name, server.iconURL())
    .addField('ID del Servidor', server.id, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag, true)
    .addField('Miembros', server.memberCount, true)
    .setColor(config.embedColor)
msg.channel.send(embed);
}

module.exports = server