module.exports = {
    name: 'help',
    description: 'Displays all the commands available.',
    execute(message, args) {
        const { Client, MessageEmbed } = require('discord.js');

        message.channel.send(embed)
    }
}