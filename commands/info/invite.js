const discord = require("discord.js");

module.exports = {
name: "invite",
  description: "Get the information about the bot",
  category: "info",
  usage: "invite",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("**__Invite Me!__**")
        .setColor(`#RANDOM`)
        .addField("**Invite Link**", '[Click Here!](https://discord.com/oauth2/authorize?client_id=718862684585459723&scope=bot&permissions=2145910271)', true)
        .addField("**My Support Server**", '[Click Here!](https://discord.gg/aM3JrhC)', true)
        .setDescription('**A Multipurpose Bot which is very easy to use!**')
        .setFooter("Made With ❤️ Zeus | Envoy Family")
    
    
    message.channel.send(embed)
    
    
    
  }

}