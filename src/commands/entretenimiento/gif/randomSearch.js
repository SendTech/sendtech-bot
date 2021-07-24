const { MessageEmbed } = require('discord.js')
const config = require('../../../../config')
const fetch = require('node-fetch')
const getRandomNumber = require('../../../utils/getRandomNumber')

/**
 * @param {Message} msg
 * @param {string} rating
 */
const randomSearch = async (msg, rating) => {
  try {
  const randomTags = ['code', 'development', 'programming', 'gaming', 'hacker']
  const randomIdNumber = getRandomNumber(randomTags.length)

  const giphyRandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${config.GIPHY_API_KEY}&rating=${rating}&tag=${randomTags[randomIdNumber]}`

  const response = await fetch(giphyRandomUrl)
  const giphyRandomData = await response.json()

  const gifUrl = giphyRandomData.data.images.original.url

  const embed = new MessageEmbed()
    .setImage(gifUrl)
    .setColor(config.embedColor)
  msg.channel.send(embed);
}
  catch (err) {
  const embed = new MessageEmbed()
    .setTitle('Error inesperado')
    .setColor(config.embedColor)
  return msg.channel.send(embed)
}
} 
module.exports = randomSearch
