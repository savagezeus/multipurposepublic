const discord = require("discord.js");

module.exports = {
name: "helpimg",
  description: "Get the information about the bot",
  category: "info",
  usage: "helpimg",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("HELP COMMANDS")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("Beautiful", '**E!beautiful**', true)
    .addField("Respect", '**E!respect @user**', true)
    .addField("Wasted", '**E!wasted @user**', true)
    .addField("Burn", '**E!burn @user**', true)
    .addField("R.I.P", '**E!rip @user**', true)
    .addField("Scary", '**E!scary @user**', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}
