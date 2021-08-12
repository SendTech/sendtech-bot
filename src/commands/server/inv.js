const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const clipboardy = require('clipboardy')
const config = require('../../../config')

const invitation = (msg, client) => {
  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setLabel('Copiar enlace!')
      .setStyle('SECONDARY')
      .setCustomId('copyUrlBtnId')
      .setEmoji('<:link:869590950895321159>')
  )
  .addComponents(
    new MessageButton()
    .setLabel('Vayamos al servidor!')
      .setStyle('LINK')
      .setEmoji('<:utilities_button:869569323725893633>')
      .setURL(config.serverUrl)
  )

  const embed = new MessageEmbed()
  .setTitle('Invita a tus amigos al servidor')
  .setDescription(config.serverUrl)
  .setColor(config.embedColor)
  
  msg.channel.send({embeds: [embed], components: [row]})

  client.on('interactionCreate', async (button) => {
    if (button.customId === 'copyUrlBtnId') {
      clipboardy.writeSync(config.serverUrl)
    }
  })
}

module.exports = invitation
