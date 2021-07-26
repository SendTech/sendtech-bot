const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../../../config')

const autorole = (msg, client) => {
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
            console.log('CLICK');
        const rol = msg.guild.roles.cache.get('866851454857379880')
        button.clicker.roles.add(rol);
        await button.reply.defer()
        // const rol = msg.guild.roles.cache.get(config.ID_MEMBER_ROLE)
        // button.clicker.user.roles.add('866851454857379880');

            // button.clicker.roles.add(rol.id);
            // button.clicker.user.roles.add(rol);
        }
    })
}


module.exports = autorole


/*
Te recomiendo que antes de pegar este codigo en tu proyecto lo leas y entiendas
asi vas a poder aprender y saber que hace
*/ 

