const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const config = require('../../../config')

const ticket = (msg, client) => {
    const addTicket = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setLabel('Abre ticket')
        .setCustomId('open-ticket')
        .setEmoji('<:paperplane:872861917708951582>')
    )
    const addedTicket = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setStyle('SUCCESS')
        .setLabel('Ticket Abierto')
        .setCustomId('added-ticket')
        .setEmoji('<:check:869577155758145536>')
        .setDisabled(true)
    )
    const closeTicket = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setLabel('Cierra ticket')
        .setCustomId('close-ticket')
        .setEmoji('<:cancel:869573017452314674>')
    )

    const embed = new MessageEmbed()
    .setTitle('<:people:869573743477927988> Tienes algo que decirles a los admins?')
    .setColor(config.embedColor)
    msg.channel.send({ embeds: [embed], components: [addTicket]});

client.on('interactionCreate', async (button) => {
    const everyone = msg.guild.roles.cache.find(rol => rol.name === '@everyone');
    const admins = msg.guild.roles.cache.find(rol => rol.name === '《 ✊ 》Admin');
    const clickButton = button.user.username.toLowerCase();

    if (button.customId === 'open-ticket') {
        await button.update({ components: [addedTicket] });
        msg.guild.channels.create(`${clickButton}-st`, {
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
            parent: '859459585689124865'
        }).then(msg => {
            const embed = new MessageEmbed()
                .setTitle('<:coffeecup:869573017041268736> Bienvenido al ticket')
                .setColor(config.embedColor)
            msg.send({ embeds: [embed], components: [closeTicket]});
        })
    }
    // if (button.customId === 'close-ticket') {
    //     msg.channel.delete()
    // }
})
}

module.exports = ticket