const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../../../config')

const ticket = (msg, client) => {
  const openTicket = new MessageButton()
    // Configuracion del ticket
    .setStyle('red')
    .setLabel('Abre ticket')
    .setID('open-ticket')
    .setEmoji('🚪');
    // Configuracion del embed
    const embed = new MessageEmbed()
    .setTitle('Tienes algo que decirles a los admins')
    .setColor(config.embedColor)
    msg.channel.send(embed, openTicket)
    
client.on('clickButton', async (button) => {
    const everyone = msg.guild.roles.cache.find(rol => rol.name === '@everyone');
    const admins = msg.guild.roles.cache.find(rol => rol.name === '《 ✊ 》Admin');
    const clickButton = button.clicker.user.username.toLowerCase();
    if (button.id === 'open-ticket') {
        await button.reply.defer()
        msg.guild.channels.create(`${clickButton}-st`, {
            // Permisos para el canal
            permissionOverwrites: [
                {
                    id: everyone.id,
                    deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                },
                {
                    id: admins.id,  
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                },
                {
                    id: msg.author.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                }
            ], 
            // Que aparezca en una categoria padre
            parent: '859459585689124865'
        })
        .then(msg => {
            // opciones en el ticket
            const embed = new MessageEmbed()
                .setTitle('Bienvenido al ticket')
                .setColor(config.embedColor)
            const closeTicket = new MessageButton()
                .setStyle('red')
                .setLabel('Cierra ticket')
                .setID('close-ticket')
                .setEmoji('🔒')
            msg.send(embed, closeTicket)
        })
    }
    if (button.id === 'close-ticket') {
        button.channel.delete() 
        await button.reply.defer()
    }
  })
}

module.exports = ticket