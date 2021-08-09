const Discord = require('discord.js');
const client = new Discord.Client({intents: 32767});
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

const youtube = async (msg) => {
        console.log(msg.guild.channel.voiceChannel)
        // client.discordTogether.createTogetherCode(msg.member.voice.channelID, 'youtube')
        // .then(invite => {
        //     return msg.channel.send({ content: invite.code});
        // });
}

module.exports = youtube