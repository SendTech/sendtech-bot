const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

/**
 * @function help
 * @param {Message} msg The message object
 * @param {Client} client The bot client
 * @returns {void}
 */
const help = (msg, client) => {
  if (msg.content === `${config.prefix}help`) {
    const username = client.user.username;
    const avatarUrl = client.user.displayAvatarURL();

    const entretenimiento = `
    **${config.prefix}8ball [pregunta]**: Preguntame algo
    **${config.prefix}gif [nombre]**: Te busco un gif
    **${config.prefix}hola**: Te saludo
    **${config.prefix}avatar**: Muestranos a todos tu hermosa foto
    **${config.prefix}flip**: Tira una moneda al aire
    **${config.prefix}say [var]**: Haz que yo hable
    `;
    const utilidades = `
    **${config.prefix}npm**: Busca algun paquete de npm
    **${config.prefix}wiki [var]**: Busca algo en la wikipedia
    **${config.prefix}ping**: Quieres saber que tan rapido soy?
    `
    const server = `
    **${config.prefix}server**: Informacion sobre el server
    **${config.prefix}inv**: Invita gente
    **${config.prefix}sug [sugerencia]**: Sugerencia para el server
    **${config.prefix}ticket**: Abre un canal con los admins
    `
    const embed = new MessageEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle('El comando de ayuda, solo para ti 😃')
      .addFields(
        {
          name: '🎮 Entretenimiento',
          value: entretenimiento,
        },
        {
          name: '✨ Utilidades',
          value: utilidades,
        },
        {
          name: '⚙ Server',
          value: server,
        },
      )
      .setFooter(username, avatarUrl)
      .setColor(config.embedColor)

    msg.channel.send(embed)
  }
}

module.exports = help
