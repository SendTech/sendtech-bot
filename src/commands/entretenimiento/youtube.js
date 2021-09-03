const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const youtube = async (msg) => {
  const channelVoz = msg.guild.channels.cache.get(msg.member.voice.channelId)
  if(!channelVoz) {
    const embed = new MessageEmbed()
    .setTitle('<:warning:869596475938713620> Debes estar en un canal de voz')
    .setColor(config.embedColor)
    msg.channel.send({embeds: [embed]});
  }
  else {
  channelVoz.createInvite({ targetType: 2, targetApplication: '755600276941176913' })
  	.then(inv => {
      msg.channel.send({content:` <:paperplane:872861917708951582> ${inv.url}`});
    })
  }
}

module.exports = youtube