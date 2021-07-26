const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const clipboardy = require('clipboardy')
const config = require('../../../config')

/**
 * @function invitation
 * @param {Message} msg -> Message Object
 * @param {Client} client -> Discord Client Object
 */
const invitation = (msg, client) => {
  const copyUrlBtnId = 'copyUrlBtnId'

  const sendToServerBtn = new MessageButton()
    .setURL(config.serverUrl)
    .setStyle('url')
    .setLabel('Vayamos al servidor!')
    .setEmoji('🌟')

  const copyUrlBtn = new MessageButton()
    .setStyle('red')
    .setLabel('Copiar enlace!')
    .setID(copyUrlBtnId)
    .setEmoji('⚡')

  const row = new MessageActionRow().addComponents(copyUrlBtn, sendToServerBtn)
  const embed = new MessageEmbed()
  .setTitle('Invita a tus amigos al servidor')
  .setFooter(`📌 ${config.serverUrl}`)
  .setColor(config.embedColor)
  msg.channel.send(embed, row)

  client.on('clickButton', async (button) => {
    if (button.id === copyUrlBtnId) {
      clipboardy.writeSync(config.serverUrl)
    }

    await button.reply.defer()
  })
}

module.exports = invitation
