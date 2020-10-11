const discord = require("discord.js");

module.exports = {
name: "helputility",
  description: "Get the information about the bot",
  category: "info",
  usage: "helputility",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("UTILITY COMMANDS")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("Welcome Message", '**E!setwelcome #channel**', true)
    .addField("Ping", '**E!ping to know the bots ping**', true)
    .addField("Suggestions", '**E!suggest, Make sure you have a channel whose topic is suggestions**', true)
    .addField("Emojis", '**E!emoji to get the emojis of a server**', true)
    .addField("Weather", '**E!weather area to know weather **', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}
