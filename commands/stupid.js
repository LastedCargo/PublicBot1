module.exports = {
    name: 'stupid',
    description: 'a truly moronic command',
    execute: (message, args)=>{
        let bu = message.mentions.users.first();
        if(!bu) {
            message.channel.send(message.author.displayAvatarURL({format: "gif"}))
        } else {
            let buu = message.guild.members.cache.find(bu)
            message.channel.send(buu.displayAvatarURL({format: "gif"}))
        }
        message.channel.send("here you go noob. :laughing:")
    }
}