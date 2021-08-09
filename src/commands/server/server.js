const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const server =  async (msg) => {
    const server = msg.guild;
    const owner = await server.fetchOwner()
    console.log(owner)
const embed = new MessageEmbed()
    .setAuthor(server.name, server.iconURL())
    .addFields(
        {
            name:'<:admin_button:869567092003864696> Creador del Server', 
            value: '```' + owner.user.tag + '```', 
            inline: true
        },
        {
            name: '<:IDs:869576071132110959> ID del Servidor',
            value: '```' + server.id + '```', 
            inline: true
        },
        {
            name:'<:date:869574756129710080> Creado el', 
            value: '```' + server.createdAt.toLocaleString() + '```', 
            inline: true
        },
        {
            name:'<:group:869964890805239888> Miembros', 
            value: '```' + server.memberCount + '```', 
            inline: true
        },
        {
            name:'<:check:869577155758145536> Conectados', 
            value: '```' + server.presences.cache.size+ '```', 
            inline: true
        },
        {
            name:'<:role:869573702730272808> Roles',
            value: '```' + server.roles.cache.size + '```', 
            inline: true
        },
        {
            name:'<:boost:869574753709596762> Boost',
            value: '```' + server.premiumSubscriptionCount + '```',
        },
        {
            name:'<:list:869980447524933652> Categorias',
            value: '```' + server.channels.cache.filter(channel => channel.type === 'category').size + '```',
            inline: true
        },
        {   
            name:'<:tag:869590351994835014> Canales',
            value: '```' + server.channels.cache.size + '```', 
            inline: true
        },
        {
            name:'<:chat:869597476313784422> Texto',
            value: '```' + server.channels.cache.filter(channel => channel.type === 'text').size + '```',
            inline: true
        },
    )
    .setTimestamp()
    .setColor(config.embedColor)
    msg.channel.send({embeds: [embed]});
}

module.exports = server