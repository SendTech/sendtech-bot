const randomSearch = require('./randomSearch.js')
const giphySearch = require('./giphySearch.js')

/**
 * @param {Message} msg -> Message object
 * @param {string} args -> Text for search in the API
 */
const gif = async (msg, args) => {
  let ratingForSearch = 'gp'
  let ratingForRandomSearch = 'g'

  if (args[1] === '--nsfw' || args[1] === 'nsfw') {
    ratingForSearch = 'r'
    ratingForRandomSearch = 'r'
  }

  if (args[0] === '--random' || args[0] === 'random') {
    randomSearch(msg, ratingForRandomSearch)
  } else {
    giphySearch(msg, args, ratingForSearch)
  }
}

module.exports = gif
