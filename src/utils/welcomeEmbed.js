const { MessageEmbed } = require('discord.js')
const config = require('../../config')

const welcomeEmbed = (member) => {
  const displayName = member.displayName;
  const avatarUrl = member.user.displayAvatarURL();

  const embed = new MessageEmbed()
    .setAuthor(displayName, avatarUrl)
    .setThumbnail(avatarUrl)
    .setTitle(`Bienvenid@ ${displayName}`)
    .setDescription('Recuerda aprender y compartir tus conocimientos con toda la comunidad')
    .setImage('https://media.giphy.com/media/TJvPIld5GH7y6dTQX9/giphy.gif')
    .setColor(config.embedColor)
  return embed
}

module.exports = welcomeEmbed
