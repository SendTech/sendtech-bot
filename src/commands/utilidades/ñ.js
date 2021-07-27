const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const clipboardy = require('clipboardy')
const config = require('../../../config')

const invitation = (msg, client) => {
  const copyUrlBtnId = 'copyUrlBtnId'

  const copyUrlBtn = new MessageButton()
    .setStyle('red')
    .setLabel('Dame click para copiar')
    .setID(copyUrlBtnId)
    .setEmoji('📋')

  const embed = new MessageEmbed()
  .setTitle('Al fin vas a escribir bien con la ñ  <a:puf:853436511654903818>')
  .setColor(config.embedColor)
  msg.channel.send(embed, copyUrlBtn)

  client.on('clickButton', async (button) => {
    if (button.id === copyUrlBtnId) {
      clipboardy.writeSync('ñ')
    }
    await button.reply.defer()
  })
}

module.exports = invitation
