const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')
const getRandomNumber = require('../../utils/getRandomNumber')

const flipCoin = (msg) => {
const coin = 
[
    'https://cdn.discordapp.com/attachments/315914386944557056/369580701269360656/cara.png',
    'https://cdn.discordapp.com/attachments/315914386944557056/369580737919451137/sello.png'
];
const random = coin[getRandomNumber(coin.length)]
    const embed = new MessageEmbed()
        .setImage(random)
        .setColor(config.embedColor)
    msg.channel.send(embed)
}

module.exports = flipCoin