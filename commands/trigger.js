module.exports = {
    name: 'ping',
    description: 'Does absolutely nothing.',
    execute(message, args) {
        message.channel.send('Does absolutely nothing.')
    }
}