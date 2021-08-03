const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
const youtube = async (msg) => {
        console.log(msg.member.voice.channelID)
        client.discordTogether.createTogetherCode(msg.member.voice.channelID, 'youtube')
        .then(invite => {
            return msg.channel.send(`${invite.code}`);
        });
}

module.exports = youtube