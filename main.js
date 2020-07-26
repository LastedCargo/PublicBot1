const Discord = require("discord.js");

const client = new Discord.Client();

const {prefix,token} = require("./config.json")

const fs = require('fs');

client.commands = new Discord.Collection();

// Checks for the files in 'commands' folder ending in '.js'
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
const help = new Discord.MessageEmbed();
for(command of commandFiles) {
    help.addField(command.name, command.description)
}

client.once('ready', () => {
    console.log("Ready!");
});

client.on('message', message => {
    // checks to see if the message starts with the prefix or if the message was sent by a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if(!message.guild);
    const args = message.content.slice(prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();
    const channel = message.channel;


    switch(command) {
        // compares command to "pog" - exactly the same as if (command == "pog")
        // u dont need the "{HAHA YEAH MAN}" poop brain
        case ("pog"): {
            client.commands.get('pog').execute(message, args);
        } break;
        case ("ping"): {
            client.commands.get('ping').execute(message, args);
        } break;
        case ("help"): {
            message.channel.send(help)
        } break;
        case ("trigger"): {
         //image manipulation // npm i canvacord + npm i -g nodemon // thats gay :dab:
         client.commands.get('trigger').execute(message, args);
        } break; // watfak
        case ("stupid"): {
            client.commands.get('stupid').execute(message, args);
        } break;
        default: {
            channel.send("Haha what a noob, doesn't know that it wasn't a command what an idiot.");
        } break;
    }
});

client.login(token);