const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')
const fetch = require('node-fetch')

const npm = async (msg, args) => {
    const finalArg = args.join('-')
    const response = await fetch(`https://api.npms.io/v2/package/${finalArg}`)
    const data = await response.json()
    if (
      data !== null &&
      data !== undefined &&
      data.collected !== undefined &&
      data.collected.metadata !== undefined
    ) {
      const embed = new MessageEmbed()
        .setAuthor('npm', 'https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg'
        )
        .setTitle(`📦 Package: ${data.collected.metadata.name}`)
        .setURL(data.collected.github?.homepage !== undefined
          ? data.collected.github?.homepage
          : data.collected.metadata.links?.homepage)
        .addFields(
          {
            name: 'Description:',
            value: `${data.collected.metadata.description}`,
          },
          {
            name: 'Version:',
            value: `${data.collected.metadata.version}`,
          },
          {
            name: '📜 License:',
            value: `${data.collected.metadata.license}`,
          }
        )
        .setFooter(
          `Link: ${
            data.collected.github?.homepage !== undefined
              ? data.collected.github?.homepage
              : data.collected.metadata.links?.homepage
          }`
        )
        .setColor(config.embedColor)
        .setThumbnail(
          'https://media.giphy.com/media/gHnBLyeYE6hboT3t3o/giphy.gif'
        )
        msg.channel.send(embed)
    } else if (data.code === 'NOT_FOUND' || data.code === 'INVALID_PARAMETER') {
      const solution = 'Revisa que hayas escrito bien el nombre del paquete, porque escribiste';
      const embed = new MessageEmbed()
      .setColor(config.embedColor)
      .setTitle('Modulo no encontrado')
      .setAuthor(
        'npm',
        'https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg'
      )
      .addField('📦 Package buscado:',finalArg)
      .setImage('https://images-ext-1.discordapp.net/external/RBrBPOqtBk1IeYXMDmiKjkj-QYQvWj0IVmB0-9Q8Y5A/https/media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif')
      .setDescription(solution)
      msg.channel.send(embed);
    }
    }

module.exports = npm