const { MessageEmbed } = require('discord.js')
const config = require('../../config')

const welcomeEmbed = (member) => {
  const displayName = member.displayName;
  const avatarUrl = member.user.displayAvatarURL();

  const embed = new MessageEmbed()
    .setAuthor(displayName, avatarUrl)
    .setTitle(`Bienvenid@ ${displayName}`)
    .setThumbnail(avatarUrl)
    .setDescription('Recuerda aprender y compartir tus conocimientos con toda SendTech Community')
    .setColor(config.embedColor)
    .setFooter(`Con ${config.prefix}inv puedes invitar a tus amigos`)
    .setImage('https://media.giphy.com/media/TJvPIld5GH7y6dTQX9/giphy.gif')
  return embed
}

module.exports = welcomeEmbed