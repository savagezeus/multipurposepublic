const discord = require("discord.js");

module.exports = {
name: "helpmod",
  description: "Get the information about the bot",
  category: "info",
  usage: "helpmod",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("MODERATION COMMANDS")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("Warn", '**E!warn @user reason**', true)
    .addField("Warnings", '**E!warnings @user to know his/her warnings**', true)
    .addField("Reset Warns", '**E!rwarns @user**', true)
    .addField("Kick", '**E!kick @user reason**', true)
    .addField("Ban", '**E!ban @user reason**', true)
    .addField("Mute", '**E!mute @user - Make sure you have the Muted role**', true)
    .addField("Unmute", '**E!unmute @user**', true)
    .addField("Dm", '**E!dm @user message**', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}