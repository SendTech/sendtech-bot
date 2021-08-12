// const { config } = require('../../../config.js')
// const got = require("got");
// const fetch = require('node-fetch')
const axios = require('axios');

const url = async (msg, args) => {
axios.get('https://api.short.io/api/domains', {
    headers: {
    accept:'application/json',
    authorization: 'pk_aYhDNAnnBwCljRwF'
    },
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (response) {
  console.log(response);
});
    // const options = {
    //   method: 'POST',
    //   url: 'https://api.short.io/links',
    //   headers: {
    //     authorization: 'APIKEY',
    //   },
    //   json: {
    //     originalURL: 'http://yourlongdomain.com/yourlonglink',
    //     domain: 'example.com'
    //   },
    //   responseType: 'json'
    // };
    
    // got(options).then(response => {
    //   console.log(response.body);
    // });
//     const data = {
//         'hideReferer':false,
//         'httpsLinks':false,
//         'hostname':'yourshortdomain.com',
//         'linkType':'random'
//     };
    
//     const options = {
//       headers: {
//         accept: 'application/json',
//         'content-type': 'application/json',
//         authorization: 'sk_crb7dhLTFWCAcv7q'
//       }
//     };
    
//     axios.post('https://api.short.io/domains/', data, options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (response) {
//       console.log(response);
//     });
}

module.exports = url