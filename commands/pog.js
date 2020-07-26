module.exports = {
    name: 'ping',
    description: 'A command that returns "pog".',
    execute(message, args) {
        message.channel.send('pong')
    }
}