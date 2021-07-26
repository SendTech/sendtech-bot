const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

/**
 * @function suggest
 * @param {Message} msg The message object
 * @returns {void} void
 */
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
      .setTitle('Nueva Sugerencia!')
      .setDescription(args.join(' '))
      .setColor(config.embedColor)
      .setFooter(`${config.prefix}sug [sugerencia]`)
    channelSuggest.send(embedSuggest).then((msg) => {
      msg.react('👍').then(() => {
        msg.react('👎')
      })
    })
  }
}

module.exports = suggest
