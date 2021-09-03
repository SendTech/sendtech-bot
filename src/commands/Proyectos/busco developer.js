const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const developer = async (msg) => {
    const everyone = msg.guild.roles.cache.find(rol => rol.name === '@everyone');
    msg.guild.channels.create(`${msg.member.user.username}-dev`, {
        permissionOverwrites: [
            {
                id: everyone.id,
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
            },
            {
                id: config.ID_ADMIN_ROLE,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
            },
            {
                id: msg.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
            }
        ],
        parent: '878863469443686400'
    }).then(async channel => {
        await channel.send({content: 'Hola, Manda la informacion del proyecto para el que necesitas devs'})
        await channel.send({content: 'El modo de enviarlo es; Titulo / Descripcion / Precio'})
        const collector = channel.createMessageCollector()
            collector.on( 'collect',async (msg) => {
                const varEmbed = msg.content.split(' / ')

                if(msg.content && varEmbed[2]) {
                    const searchDevChannel = msg.guild.channels.cache.get('878864426894241813');

                    const embed = new MessageEmbed()
                    .setTitle(varEmbed[0])
                    .setDescription(varEmbed[1])
                    .setFooter(varEmbed[2])
                    .setColor(config.embedColor)
                    searchDevChannel.send({ embeds: [embed] });

                msg.guild.channels.edit({
                        permissionOverwrites: [
                            {
                                id: everyone.id,
                                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                            },
                            {
                                id: config.ID_ADMIN_ROLE,
                                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                            },
                            {
                                id: msg.author.id,
                                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                            }
                        ]
                })
            }
                else {
                    await collector.on('end',() => {})
                    channel.send({ content: 'Manda los datos bien'});
                }
            });
    })
}

module.exports = developer