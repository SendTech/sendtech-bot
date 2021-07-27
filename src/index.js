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
const help = require('./commands/server/help.js');
const npm = require('./commands/utilidades/npm.js');
const pingPong = require('./commands/utilidades/ping');
const url = require('./commands/utilidades/URLcutter.js');
const wiki = require('./commands/utilidades/wiki.js');
const userInfo = require('./commands/utilidades/user-info.js');
const copyLetter = require('./commands/utilidades/ñ.js');

// admin
const renameChannel = require('./commands/admin/renameChannel.js');
const deleteChannel = require('./commands/admin/deleteChannel.js');
const lockChannel = require('./commands/admin/lockChannel.js');
const unlockChannel = require('./commands/admin/unlockChannel.js');
const autorole = require('./commands/admin/autorole.js');

// El intents le da permiso para dar roles y dar la bienvenida
const client = new Client({ ws: { intents: 32767 } })
const welcomeEmbed = require('./utils/welcomeEmbed');
const { Button } = require('semantic-ui-react');
require('discord-buttons')(client)

// Hace algo cuando el bot esta online
client.on('ready', () => {
  console.log('Estado del bot:', client.user.presence.status)
  console.log('100% ██████████ Cargado')
  presence(client)
})

client.on('guildMemberAdd', (member) => {
  const channelWelcome = member.guild.channels.cache.get('790999067060600852')
  const channelCount = member.guild.channels.cache.get('868511890245058600')
  // add Rol Member
  member.roles.add(config.ID_MEMBER_ROLE)
  // Msg Welcome user
  const welcomeMessage = welcomeEmbed(member)
  channelWelcome.send(welcomeMessage).then(msg => msg.react('👋'))
  // Channel edit
  channelCount.setName(`Somos ${member.guild.memberCount} Developers`)
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
          pingPong(msg, client)
          break
        case 'user-info':
          userInfo(msg, args)
          break
        case 'autorole':
          autorole(msg, client)
          break
        case 'n':
          copyLetter(msg, client)
          break
        case 'npm':
          npm(msg, args)
          break 
        case 'server-info':
          server(msg)
          break
        case 'url':
          url(msg, args)
          break
        case 'avatar':
          avatar(msg, args)
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
