const say = (msg, args) => {
    if(!args.join(' ')) return msg.channel.send('Debe escribir un mensaje a enviar.')
    msg.delete().then(msg.channel.send(args.join(' ')))
}

module.exports = say