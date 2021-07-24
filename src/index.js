const { Client } = require('discord.js');
const config = require('../config')
const presence = require('./utils/presence.js')
// Commands
// Entretenimiento
const gif = require('./commands/entretenimiento/gif');
const hola = require('./commands/entretenimiento/hola');
const ball = require('./commands/entretenimiento/8ball.js')
const avatar = require('./commands/entretenimiento/avatar.js');
const flipCoin = require('./commands/entretenimiento/flipCoin.js');
const say = require('./commands/entretenimiento/say.js');
// Server
const invitation = require('./commands/server/inv.js');
const suggest = require('./commands/server/suggest.js');
const ticket = require('./commands/server/tickets.js');
const server = require('./commands/server/server.js');
// Utilidades
const help = require('./commands/utilidades/help.js');
const npm = require('./commands/utilidades/npm.js');
const pingPong = require('./commands/utilidades/ping');
const url = require('./commands/utilidades/URLcutter.js');
const wiki = require('./commands/utilidades/wiki.js');
// admin
const renameChannel = require('./commands/admin/renameChannel.js');
const deleteChannel = require('./commands/admin/deleteChannel.js');
const lockChannel = require('./commands/admin/lockChannel.js');
const unlockChannel = require('./commands/admin/unlockChannel.js');
const helpAdmin = require('./commands/admin/helpAdmin.js');

// El intents le da permiso para dar roles y dar la bienvenida
const client = new Client({ ws: { intents: 32767 } })
const welcomeEmbed = require('./utils/welcomeEmbed');
require('discord-buttons')(client)

// Hace algo cuando el bot esta online
client.on('ready', () => {
  console.log('Estado del bot:', client.user.presence.status)
  console.log('100% ██████████ Cargado')
  presence(client)
})

client.on('guildMemberAdd', (member) => {
  const channelWelcome = member.guild.channels.cache.get('864259226380402698')
  const channelCount = member.guild.channels.cache.get('868511890245058600')
  // add Rol Member
  member.roles.add('790977106698960918')
  // Msg Welcome user
  const embed = welcomeEmbed()
  channelWelcome.send(embed).then(msg => msg.react('👋'))
  // const welcomeCanvas = welcomeEmbed()
  // channelWelcome.send(welcomeCanvas).then(msg => msg.react('👋'))
  // Channel edit
  channelCount.setName(`👥 ﹞Somos ${member.guild.memberCount} Devs`)
})

client.on('message', (msg) => {
  // Valida que los mensajes no sean del bot
  if (msg.author === client.user) return
  if (msg.author.bot) return

  const msgContent = msg.content

  if (msgContent.startsWith(config.prefix)) {
    const args = msgContent.toLocaleLowerCase().slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    try {
      switch (command) {
        case 'ping':
          pingPong(msg)
          break
        case 'npm':
          npm(msg, args)
          break 
        case 'server':
          server(msg)
          break
        case 'url':
          url(msg, args)
          break
        case 'avatar':
          avatar(msg)
          break
        case 'suggest':
        case 'sug':
          suggest(msg, args, command)
          break
        case 'flip':
          flipCoin(msg)
          break
        case 'hola' || 'Hola':
          hola(msg)
          break
        case 'help':
          help(msg, client)
          break
        case 'wiki':
        case 'search':
          wiki(msg, args)
          break
        case 'gif':
          gif(msg, args)
          break
        case 'inv':
          invitation(msg, client)
          break
        case 'ticket':
          ticket(msg, client)
          break
        case 'rename':
          renameChannel(msg, args)
          break
        case 'helpst':
          helpAdmin(msg)
          break
        case 'delete':
          deleteChannel(msg)
        break
        case 'lock':
          lockChannel(msg)
        break
        case 'unlock':
          unlockChannel(msg)
        break
        case '8ball':
          ball(msg, args)
        break
        case 'say':
          say(msg, args)
        break
      }
    } catch (err) {
      console.error(err)
    }
  }
})

client.login(config.BOT_TOKEN)
