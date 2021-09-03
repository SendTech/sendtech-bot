const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const config = require('../../../config.js')

const help = (msg, client) => {
    const username = msg.author.username;
    const avatarUrl = msg.author.displayAvatarURL();
    // Creo los botones
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setStyle('SECONDARY')
      .setLabel('Entretenimiento')
      .setEmoji('🎮')
      .setCustomId('button-entertainment')
    )
    .addComponents(
      new MessageButton()
      .setStyle('SECONDARY')
      .setLabel('Utilidades')
      .setEmoji('🧭')
      .setCustomId('button-utilities')
    )
    .addComponents(
      new MessageButton()
      .setStyle('SECONDARY')
      .setLabel('Server')
      .setEmoji('🗂')
      .setCustomId('button-server')
    )
    .addComponents(
      new MessageButton()
      .setStyle('SECONDARY')
      .setLabel('Admin')
      .setEmoji('🕵️‍♂️')
      .setCustomId('button-admin')
    )

    const embed = new MessageEmbed()
    .setAuthor(username, avatarUrl)
    .setTitle('<:question:869584600626790430> El comando de ayuda, solo para ti')
    .setDescription(' Aquí encontrarás todos mis comandos.')
    .addField(
        '<:chat:869597476313784422> Categorías',
        'Los comandos están divididos en categorías. Solo dale click a un botón y te mostrará los comandos.'
    )
    .setColor(config.embedColor)
    
    msg.channel.send({embeds: [embed], components: [row]}).then(msg => {

client.on('interactionCreate', async (button) => {
  const commonHelp = `<:punto:875366454000754708> **${config.prefix}`;

  if(button.customId === 'button-entertainment') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('<:entertainment_button:869568714436120576> Entretenimiento')
      .setColor(config.embedColor)
      .setDescription(`
      ${commonHelp}8ball [pregunta]**: Preguntame algo
      ${commonHelp}gif [nombre]**: Te busco un gif
      ${commonHelp}hola**: Te saludo
      ${commonHelp}adios**: Te despido por hoy
      ${commonHelp}flip**: Tira una moneda al aire
      ${commonHelp}say [mensaje]**: Haz que yo hable
      ${commonHelp}youtube**: Mira youtube con tus amigos
      `)
      button.reply({embeds: [embed], ephemeral: true })
  }
  else if(button.customId === 'button-utilities') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('<:utilities_button:869569323725893633> Utilidades')
      .setColor(config.embedColor)
      .setDescription(`
        ${commonHelp}embed**: Escribe un embed
        ${commonHelp}npm**: Busca algun paquete de npm
        ${commonHelp}wiki [duda]**: Busca algo en la wikipedia
        ${commonHelp}ping**: Quieres saber que tan rapido soy?
        ${commonHelp}apodo [name]**: Te cambia tu apodo en el server
        ${commonHelp}avatar**: Muestranos a todos tu hermosa foto o de otro user
        ${commonHelp}server-avatar**: Te muestra el avatar del server
        ${commonHelp}user-info**: Ve informacion sobre ti u otro usuario
      `)
      button.reply({embeds: [embed], ephemeral: true })
  }
  else if(button.customId === 'button-server') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('<:server_button:869571340838010960> Server')
      .setColor(config.embedColor)
      .setDescription(`
        ${commonHelp}server-info**: Informacion sobre el server
        ${commonHelp}inv**: Invita gente a sendero tecnologico
        ${commonHelp}sug [sugerencia]**: Sugerencia para el server
        ${commonHelp}ticket**: Abre un canal con los admins
      `)
      button.reply({embeds: [embed], ephemeral: true })
  }
  else if(button.customId === 'button-admin') {
    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('<:admin_button:869567092003864696> Admin')
      .setColor(config.embedColor)
      .setDescription(`
        ${commonHelp}delete**: Elimina el canal
        ${commonHelp}lock**: mutea el canal
        ${commonHelp}unlock**: Desmutea el canal
        ${commonHelp}rename**: Renombra un canal
        ${commonHelp}autorole**: Haces un hermoso reaction role
      `)
      button.reply({embeds: [embed], ephemeral: true })
  }
})
})
}

module.exports = help
