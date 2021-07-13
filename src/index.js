const { Client, MessageEmbed } = require('discord.js')
const config = require('../config.js')
// Commands
const avatar = require('./commands/avatar.js')
const hola = require('./commands/hola')
const pingPong = require('./commands/ping.js')
const suggest = require('./commands/suggest.js')
const help = require('./commands/help.js')

// El intents le da permiso para dar roles y dar la bienvenida
const client = new Client({ ws: { intents: 32767 } })

// Hace algo cuando el bot esta online
client.on('ready', () => {
  console.log(client.user.tag, 'Esta conectado')
  console.log('Estado del bot:', client.user.presence.status)

  // Establece el estado del bot (cambia cada 5s)
  function presence() {
    setInterval(function () {
      const statuses = config.statusBOT
      const status = Math.floor(Math.random() * statuses.length)
      const dstatus = statuses[status]
      client.user.setPresence({
        status: 'online',
        activity: {
          name: `${dstatus}`,
          type: 'WATCHING',
        },
      })
    }, 5000)
  }
  presence()
})

// Ve cuando entra un nuevo usuario al server
client.on('guildMemberAdd', (member) => {
  const channelWelcome = member.guild.channels.cache.get('790999067060600852')
  // add Rol Member
  member.roles.add('790977106698960918')
  // Msg Welcome user
  const embed = new MessageEmbed()
    .setTitle(`Bienvenid@ ${member.displayName} `)
    .setDescription('Recuerda aprender y compartir tus conocimientos con toda SendTech Community')
    .setColor(0xf75762)
    .setImage(
      'https://lh3.googleusercontent.com/l-9Cie5TSnzti1fdAkmBevlM_QYoUGz7E0_MRA_nnPTEkIIEVQPN3oHD4o0xvBFrsirchQ=s170'
    )
    .setAuthor(member.displayName, member.user.displayAvatarURL())
  channelWelcome.send(embed).then((member) => member.react('👋'))
})

client.on('message', (msg) => {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  switch (command) {
    case 'ping':
      pingPong(msg)
      break
    case 'avatar':
      avatar(msg)
      break
    case 'suggest':
      suggest(msg, args, command)
      break
    case 'hola':
      hola(msg)
      break
    case 'help':
      help(msg, client)
      break
  }
})

// Aqui va el token del bot
client.login(config.BOT_TOKEN)
