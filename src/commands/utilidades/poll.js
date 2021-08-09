const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')

const createPoll = async (msg, args) => {
    const varPoll = args.join(' ').split(' / ')
    const sliceVarPoll = varPoll.slice(1, varPoll.length)
    const Mayustitle = varPoll[0].charAt(0).toUpperCase() + varPoll[0].slice(1);
    const embed = new MessageEmbed()
        .setTitle(`<:doublearrow_left:869736320661090304>  ${Mayustitle}  <:doublearrow_right:869736320661073970>`)
        .setDescription(`${sliceVarPoll.join('\n \n')}`)
        .setColor(config.embedColor)
    
    await msg.delete()
    await msg.channel.send({ embeds: [embed] }).then(msg => {
        const reactions = ['<:1_:869931454958821416>','<:2_:869931468791627787>','<:3_:869931469890551828>','<:4_:869931459832594462>','<:5_:870276716038324244>','<:6_:870276715560173568>','<:7_:870276714989764648>','<:8_:870276716076085318>','<:9_:870276715673419777>']
        const reactionsCount = reactions.slice(0, sliceVarPoll.length);

        for (emoji of reactionsCount) {
            msg.react(emoji);
        }
    })
}

module.exports = createPoll