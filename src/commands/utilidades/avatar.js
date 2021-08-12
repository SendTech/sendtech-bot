const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const config = require('../../../config.js')

const avatar = (msg) => {
  const member = msg.mentions.users.first()
  if (!member) {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Descargar')
        .setStyle('LINK')
        .setEmoji('<:tag:869590351994835014>')
        .setURL(msg.author.displayAvatarURL({
        format: 'png',
        dynamic: true,
        size : 1024
    }))
    )

    const embed = new MessageEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle(`<:Fire:869583736352702494> Que guap@ ${msg.author.username}`)
      .setImage(msg.author.displayAvatarURL({dynamic: true, size : 1024 }))
      .setColor(config.embedColor)

    msg.channel.send({embeds: [embed], components: [row]})
  }
  else {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Descargar')
        .setStyle('LINK')
        .setEmoji('<:tag:869590351994835014>')
        .setURL(member.displayAvatarURL({
        format: 'png',
        dynamic: true,
        size : 1024
    }))
    )
    const embed = new MessageEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle(`<:Fire:869583736352702494> Que guap@ ${member.username}`)
      .setImage(member.displayAvatarURL({dynamic: true, size : 1024 }))
      .setColor(config.embedColor)

    msg.channel.send({embeds: [embed], components: [row]})
  }
}

module.exports = avatar
