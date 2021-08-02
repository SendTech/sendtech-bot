const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const suggest = (msg, args, command) => {
  const channelSuggest = msg.guild.channels.cache.get(config.ID_SUGGEST_CHANNEL)
  if (command === 'suggest' || command === 'sug') {
    if (!args[0]) return msg.channel.send(`El comando es ${config.prefix}sug [msg]`)

    const embed = new MessageEmbed()
      .setTitle('Sugerencia Enviada!')
      .setImage('https://media.giphy.com/media/sNWGEbc5Jzp4c/giphy.gif')
      .setColor(config.embedColor)
    msg.channel.send(embed);

    const embedSuggest = new MessageEmbed()
      .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle('<:coffeecup:869573017041268736> Nueva Sugerencia!')
      .setDescription(args.join(' '))
      .setColor(config.embedColor)
      .setFooter(`${config.prefix}sug [sugerencia]`)
      .setTimestamp()
    channelSuggest.send(embedSuggest).then((msg) => {
      msg.react('<:check:869577155758145536>')
      msg.react('<:cancel:869573017452314674>')
      })
  }
}

module.exports = suggest
