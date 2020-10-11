const discord = require("discord.js");

module.exports = {
    name: "helpanime",
      description: "Get the information about the bot",
      category: "info",
      usage: "helpanime",
      run: async (bot, message, args) => {
        
        let embed = new discord.MessageEmbed()
        .setTitle("FUN COMMANDS")
        .setColor("FFA500")
        .setFooter(`Team Envoy | Zeus`)
        .addField("<:mediaanime:737970440525316166>Anime", '**E!anime name to get info about anime**', true)
        .addField("<:mediaanime:737970440525316166>Scrap", '**E!scrap name | episode no. to get anime episodes**', true)
    
        
        message.channel.send(embed)
        
        
        
      }
    
    }
    