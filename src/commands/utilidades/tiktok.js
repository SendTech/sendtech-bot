const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')
const axios = require('axios');

const tiktok = async (msg, args) => {
const options = {
  method: 'GET',
  url: `https://tiktok33.p.rapidapi.com/user/info/${args}`,
  headers: {
    'x-rapidapi-key': '2251941a97msh0afe31162304861p107a3djsn1ad9252e9a90',
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    const verified = response.data.user.verified ? '<a:Verificadicimo:848417004930072608>' : '';
    const userLink = `https://www.tiktok.com/@${response.data.user.uniqueId}`;

    const embed = new MessageEmbed()
        .setTitle(`${response.data.user.nickname}  ${verified}`)
        .setURL(userLink)
        .setDescription(response.data.user.signature)
        .setThumbnail(response.data.user.avatarLarger)
        .addFields(
            {
                name: 'Seguidores',
                value: '```' + response.data.stats.followerCount +'```',
                inline: true
            },
            {
                name: 'Siguiendo',
                value: '```' + response.data.stats.followingCount +'```',
                inline: true
            },
            {
                name: 'Likes',
                value: '```' + response.data.stats.heart +'```'
            },
            {
                name: 'Videos',
                value: '```' + response.data.stats.videoCount +'```'
            }
        )
        .setColor(config.embedColor)
        .setFooter(userLink)
    msg.channel.send({embeds: [embed]})
}).catch(function (error) {
	console.error(error);
});
}

module.exports = tiktok