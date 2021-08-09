'use strict'

const { MessageEmbed } = require('discord.js')
const config = require('../../../../config.js')
const palabras = require('./palabras.js')
const getRandomNumber = require('../../../utils/getRandomNumber')

/**
 * @function hola
 * @param {Message} msg The message object
 * @returns {void} void
 */
const hola = (msg) => {
  if (msg.content === `${config.prefix}hola` || msg.content === 'Hola') {
    const palabraFinal = palabras[getRandomNumber(palabras.length)]

    const embed = new MessageEmbed()
      .setTitle(palabraFinal)
      .setDescription('Nota: Estoy Vivo <:fun_cat:869591958937538640> | Por suerte.')
      .setColor(config.embedColor)

      msg.channel.send({embeds:[embed]}).then((msg) => msg.react('<:coffeecup:869573017041268736>'))
  }
}

module.exports = hola
