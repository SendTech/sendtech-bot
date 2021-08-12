const youtube = async (msg) => {
  const channelVoz = msg.guild.channels.cache.get(msg.member.voice.channelId)
  channelVoz.createInvite({ targetType: 2, targetApplication: '755600276941176913' })
  	.then(inv => {
      msg.channel.send({content: inv.url});
    })
}

module.exports = youtube