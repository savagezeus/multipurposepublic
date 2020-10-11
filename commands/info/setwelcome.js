const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "info",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { 
      return message.channel.send(" **<:mediacross:737178701690699797> Please Mention the channel first**")
    }
    
    
    
    db.set(`welchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(` **<a:mediatick:718456893307355226> Welcome Channel is set to** ${channel}`) //send success message
  }
}