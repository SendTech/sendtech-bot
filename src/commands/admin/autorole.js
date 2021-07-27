const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../../../config')

const autorole = (msg, client) => {
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_ROLES')){
        const embed = new MessageEmbed()
        .setTitle('Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        return msg.channel.send(embed)
    }

    if(!msg.member.roles.cache.has(config.ID_ADMIN_ROLE) && !msg.member.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('Perdon, pero no tienes permisos')
        return msg.channel.send(embed)
    }

    else {
    const embed = new MessageEmbed()
        .setTitle('Verificate')
        .setDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae libero non nulla mattis pretium ut vel mi. Pellentesque tincidunt nunc in odio dictum hendrerit. Etiam porta vestibulum sagittis. Sed auctor orci ut purus consectetur, at cursus metus gravida. Fusce vulputate ligula viverra, consectetur felis non, pharetra ex.')
        .setColor(config.embedColor)
    const addRole = new MessageButton()
        .setStyle('red')
        .setLabel('Agregate el rol')
        .setID('add-role')
        .setEmoji('👍')
    msg.channel.send(embed, addRole);

    client.on('clickButton', async (button) => {
        if (button.id === 'add-role') {
        const rol = msg.guild.roles.cache.get(config.ID_MEMBER_ROLE)
            await button.reply.defer()
            await button.clicker.fetch()
            button.clicker.member.roles.add(rol);
        }
    })
}
}


module.exports = autorole


/*
Te recomiendo que antes de pegar este codigo en tu proyecto lo leas y entiendas
asi vas a poder aprender y saber que hace
*/ 

