const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const config = require('../../../config.js')
const sendEmbedError = require('../../utils/sendEmbedError.js')

const wiki = async (message, args) => {
  if (args === undefined || !args) return message.reply('Escribe el item a buscar') // If Nothing Is Searched
  const wikiQuery = args[0]

  if (wikiQuery !== undefined) {
    const baseUrl = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      wikiQuery
    )}` // From Here BOT Will Search For It

    let response
    try {
      response = await fetch(baseUrl).then((res) => res.json())
    } catch (error) {
      console.log(error)
      return sendEmbedError({
        msg: message,
        title: 'Error al obtener la data',
        description: 'Espera a que se repare la llamada a la API e intenta de nuevo'
      })
    }

    try {
      if (response.type === 'disambiguation') {
        return sendEmbedError({
          msg: message,
          title: `Bucando ${wikiQuery}?`,
          description: `
            Por alguna razon Wikipedia no encontro algun resultado pero puede ser problema de la API, asi que puedes buscar en la pagina oficial:

            English:
            https://en.wikipedia.org/wiki/${wikiQuery}

            Español:
            https://es.wikipedia.org/wiki/${wikiQuery}
            `
        })
      } else {
        // Only One Result
        const embed = new MessageEmbed()
          .setColor(config.embedColor)
          .setTitle(response.title)
          .setImage(response.thumbnail.source)
          .setURL(response.content_urls.desktop.page)
          .setDescription(response.extract)
        message.channel.send({ embeds: [embed] })
      }
    } catch {
      return sendEmbedError({
        msg: message,
        title: `Bucando ${wikiQuery}?`,
        description: `
            Por alguna razon Wikipedia no encontro algun resultado pero puede ser problema de la API, asi que puedes buscar en la pagina oficial:

            English:
            https://en.wikipedia.org/wiki/${wikiQuery}

            Español:
            https://es.wikipedia.org/wiki/${wikiQuery}
            `
      })
    }
  } else {
    return sendEmbedError({
      msg: message,
      title: 'Error con la query!',
      description: 'Escribe algo correcto para buscarlo en la wikipedia! ;D'
    })
  }
}

module.exports = wiki
