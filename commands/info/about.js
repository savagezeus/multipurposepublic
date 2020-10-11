const discord = require("discord.js");

module.exports = {
name: "about",
  description: "Get the information about the bot",
  category: "info",
  usage: "about",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("About Me")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("⚙️Function", '**Im a multipurpose bot which can be used in many ways**', true)
    .addField("😀Founder", '**My Founder is UcX Zeus**', true)
    .addField("⚒️Developers", '**My main dev is Zeus **', true)
    .addField("Bot Staff", '**Shivam and Nightkiller are my staff members**', true)
    .addField("Stats", '**Do ``E!stats`` to know my stats**', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}
