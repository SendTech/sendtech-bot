const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const config = require('../../../config.js')

const help = (msg, client) => {
    const username = msg.author.username;
    const avatarUrl = msg.author.displayAvatarURL();
    // Creo los botones
    const deployEntertainment = new MessageButton()
    .setStyle('red')
    .setLabel('Entretenimiento')
    .setEmoji('🎮')
    .setID('button-entertainment')

    const deployUtilities = new MessageButton()
    .setStyle('red')
    .setLabel('Utilidades')
    .setEmoji('✨')
    .setID('button-utilities')
    
    const deployServer = new MessageButton()
    .setStyle('red')
    .setLabel('Server')
    .setEmoji('🗂')
    .setID('button-server')

    const deployAdmin = new MessageButton()
    .setStyle('gray')
    .setLabel('Admin')
    .setEmoji('🕵️‍♂️')
    .setID('button-admin')

    // Pongo cada btn en una constante row
    const row = new MessageActionRow().addComponents(deployEntertainment, deployUtilities, deployServer, deployAdmin)
    const embed = new MessageEmbed()
    .setAuthor(username, avatarUrl)
    .setTitle('El comando de ayuda, solo para ti')
    .setDescription('📌 Aquí encontrarás todos mis comandos.')
      .addField(
        'Categorías',
        'Los comandos están divididos en categorías. Solo dale click a un botón y te mostrará los comandos.'
      )
      .setColor(config.embedColor)
    // Envio el embed y los botones en fila
    msg.channel.send(embed, row)

client.on('clickButton', (button) => {
  if(button.id === 'button-entertainment') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('🎮 Entretenimiento')
      .setColor(config.embedColor)
      .setDescription(`
        **${config.prefix}8ball [pregunta]**: Preguntame algo
        **${config.prefix}gif [nombre]**: Te busco un gif
        **${config.prefix}hola**: Te saludo
        **${config.prefix}avatar**: Muestranos a todos tu hermosa foto
        **${config.prefix}avatar [mention]**: Muestanos el avatar de otra persona
        **${config.prefix}flip**: Tira una moneda al aire
        **${config.prefix}say [mensaje]**: Haz que yo hable
      `)
      button.reply.send(embed)
  }
  if(button.id === 'button-utilities') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('✨ Utilidades')
      .setColor(config.embedColor)
      .setDescription(`
        **${config.prefix}npm**: Busca algun paquete de npm
        **${config.prefix}wiki [duda]**: Busca algo en la wikipedia
        **${config.prefix}ping**: Quieres saber que tan rapido soy?
        **${config.prefix}user-info**: Ve informacion sobre ti
        **${config.prefix}user-info [mention]**: Ve informacion sobre otro usuario
      `)
      button.reply.send(embed)
  }
  if(button.id === 'button-server') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('🗂 Server')
      .setColor(config.embedColor)
      .setDescription(`
        **${config.prefix}server-info**: Informacion sobre el server
        **${config.prefix}inv**: Invita gente a sendero tecnologico
        **${config.prefix}sug [sugerencia]**: Sugerencia para el server
        **${config.prefix}ticket**: Abre un canal con los admins
      `)
      button.reply.send(embed)
  }
  if(button.id === 'button-admin') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('🕵️‍♂️ Admin')
      .setColor(config.embedColor)
      .setDescription(`
        **${config.prefix}delete**: Elimina el canal
        **${config.prefix}lock**: mutea el canal
        **${config.prefix}unlock**: Desmutea el canal
        **${config.prefix}rename**: Renombra un canal
        **${config.prefix}autorole**: Haces un hermoso reaction role
      `)
      button.reply.send(embed)
  }
})
}

module.exports = help
