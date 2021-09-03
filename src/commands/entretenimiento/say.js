const say = async (msg, args) => {
    if(!args.join(' ')) return msg.channel.send('<:warning:869596475938713620> Debe escribir un mensaje a enviar.')
    await msg.delete()
    await msg.channel.send(args.join(' '))
}

module.exports = say