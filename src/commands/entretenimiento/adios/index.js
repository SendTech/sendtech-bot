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
const adios = (msg) => {
    const palabraFinal = palabras[getRandomNumber(palabras.length)]

    const embed = new MessageEmbed()
      .setTitle(palabraFinal)
      .setDescription('<:cancel:869573017452314674> Nota: No quiero que te vayas')
      .setColor(config.embedColor)

    msg.channel.send({embeds:[embed]}).then((msg) => msg.react('<:coffeecup:869573017041268736>'))
}

module.exports = adios
