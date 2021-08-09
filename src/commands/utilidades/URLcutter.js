const fetch = require('node-fetch')

const url = async (msg, args) => {
    const response = new fetch(URLSearchParams(`https://api-ssl.bitly.com/v4/shorten/=${args}`))
    console.log(response)
    fetch( {
        // method: 'POST',
        // body: response,
        'group_guid': 'Ba1bc23dE4F',
        'domain': 'bit.ly',
        'long_url': 'https://dev.bitly.com'
    })
    // const response = await fetch(`https://api-ssl.bitly.com/v4/shorten/${args}`)
    // const response = await fetch(`https://api-ssl.bitly.com/v4/shorten&longUrl=${args}&login=Sendero Tecnologico&apiKey=167134afe300d357f314b48142a8f006e76a9c49`)
    // const data = await response.json()

    // msg.channel.send(data);
    // const URL_API = {
    //     "group_guid": "Ba1bc23dE4F",  
    //     "domain": "bit.ly",  
    //     "long_url": "https://dev.bitly.com"  
    // }  
    // 167134afe300d357f314b48142a8f006e76a9c49
}

module.exports = url