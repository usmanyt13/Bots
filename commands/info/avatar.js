const { RichEmbed } = require('discord.js');

module.exports = {
    name:'avatar',    
    run: async (client, message, args) => {
        let user = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
             
        message.channel.send(user.displayAvatarURL);
        if(!user) 
        message.channel.send(message.author.displayAvatarURL);
        

    }
}