const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "kick anyone",
  usage: "ban <@user> <raeson>",
  run: (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
      }
      
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, __**!I do not have enough permission to use this command**__`)
      }

      let target = message.mentions.members.first();
    
      if(!target) {
        return message.channel.send(`**${message.author.username}**, __**Please mention the person who you want to kick**__`)
      }

      if(target.user.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, __**You can not kick yourself**__`)
      }

      if(target.user.id === message.client.id) {
          return message.channel.send(`**${message.author.username}**, __**You cannot kick me :( `)
      }

      if(!args[1]) {
        return message.channel.send(`**${message.author.username}**, __**Please Give Reason to kick**__`)
      }

      let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target} (${target.id})`)
    .setColor("RANDOM")
    .setThumbnail('https://media.giphy.com/media/l1J3AS8RShMebsmgU/giphy.gif')
    .setFooter(`Kicked by ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.ban(args[1]);
             
    }
 }