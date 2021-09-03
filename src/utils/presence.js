const config = require('../../config.js')

const presence = (client) => {
  setInterval(() => {
    const botStatus = config.statusBOT
    const status = Math.floor(Math.random() * botStatus.length)
    const statusName = botStatus[status]

    client.user.setPresence({
      status: 'online',
      activity: {
        name: `${statusName}`,
        type: 'WATCHING'
      }
    })
  }, 5000)
}

module.exports = presence
