const discord = require("discord.js");

module.exports = {
name: "help",
  description: "Get the information about the bot",
  category: "info",
  usage: "help",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("HELP COMMANDS")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("⚙️Utility", '**E!helputility for a list of utility commands!**', true)
    .addField("😀Fun", '**E!helpfun for a list of fun commands!**', true)
    .addField("⚒️Moderation", '**E!helpmod for a list of moderation commands**', true)
    .addField("🎉Giveaway", '**E!helpgiveaway for a list of giveaway commands**', true)
    .addField("<:mediaanime:737970440525316166>Anime", '**E!helpanime for a list of anime commands**', true)
    .addField("Image", '**E!helpimg for a list of img commands**', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}
