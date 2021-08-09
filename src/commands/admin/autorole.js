const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const config = require('../../../config')

const autorole = (msg, client) => {
    const role = msg.mentions.roles.first();
    if(!msg.guild.me.permissionsIn(msg.channel).has('MANAGE_ROLES')){
        const embed = new MessageEmbed()
        .setTitle('<:warning:869596475938713620> Perdon, pero no tengo permisos para esto')
        .setColor(config.embedColor)
        return msg.channel.send({embeds:[embed]})
    }

    if(!msg.member.roles.cache.has(config.ID_ADMIN_ROLE) && !msg.member.permissionsIn(msg.channel).has('MANAGE_CHANNELS')) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Perdon, pero no tienes permisos')
        return msg.channel.send({embeds:[embed]})
    }
    if(!role) {
        const embed = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('<:warning:869596475938713620> Debes mencionar un rol')
        return msg.channel.send({embeds:[embed]})
    }
    else {
    const embed = new MessageEmbed()
        .setTitle('<:check:869577155758145536> Verificate')
        .setDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae libero non nulla mattis pretium ut vel mi. Pellentesque tincidunt nunc in odio dictum hendrerit. Etiam porta vestibulum sagittis. Sed auctor orci ut purus consectetur, at cursus metus gravida. Fusce vulputate ligula viverra, consectetur felis non, pharetra ex.')
        .setColor(config.embedColor)
    const addRole = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel('Agregate el rol!')
        .setStyle('SECONDARY')
        .setCustomId('add-role')
        .setEmoji('<:addpeople:869574753478934538>')
    )
    msg.channel.send({embeds:[embed], components: [addRole]})
    client.on('clickButton', async (button) => {
        if (button.id === 'add-role') {
        // const rol = msg.guild.roles.cache.get(role.id)
            await button.reply.defer()
            await button.clicker.fetch()
            button.clicker.member.roles.add(role.id);
        }
    })
}
}


module.exports = autorole


/*
Te recomiendo que antes de pegar este codigo en tu proyecto lo leas y entiendas
asi vas a poder aprender y saber que hace
*/ 

