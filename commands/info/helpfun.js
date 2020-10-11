const discord = require("discord.js");

module.exports = {
name: "helpfun",
  description: "Get the information about the bot",
  category: "info",
  usage: "helpfun",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("FUN COMMANDS")
    .setColor("FFA500")
    .setFooter(`Team Envoy | Zeus`)
    .addField("🎥Imdb", '**E!imdb movie name to get info about the movie**', true)
    .addField("<:kisspngsmileyemoticonclipartjoke:737975591415971850>Joke", '**E!joke for a funny joke xD**', true)
    .addField("<a:MeMeMeDance:737975667408240701>Meme", '**E!meme for fresh memes**', true)
    .addField("<a:Pokeball:737975745422557205>Pokemon", '**E!pokemon name to get info about a pokemon**', true)
    .addField("<:virus:737975850699456557>Corona", '**E!corona country to get stats about corona**', true)
    .addField("<:Question:737975934426021979>Trivia", '**E!trivia to play a game of trivia**', true)
    .addField("<:Question:737975934426021979>Advice", '**E!advice to get an advice **', true)
    .addField("🎱8ball", '**E!8ball question to get a random response**', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}
