const discord = require("discord.js");

module.exports = {
name: "helpgiveaway",
  description: "Get the information about the bot",
  category: "info",
  usage: "helpgiveaway",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("FUN COMMANDS")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("🎉Giveaway", '**E!giveaway <time> <channel> <prize> to host a giveaway**', true)

    
    message.channel.send(embed)
    
    
    
  }

}
