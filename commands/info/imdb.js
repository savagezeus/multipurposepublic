const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  category: "info",
  description: "Get the information about series and movies",
  usage: "imdb <name>",
  run: async (client, message, args, color) => {

    if(!args.length) {
      return message.channel.send("Please give the name of movie or series")
    }

const imob = new imdb.Client({apiKey: "37249e60"})

let movie = await imob.get({'name': args.join(" ")})

let embed = new discord.MessageEmbed()
  .setTitle("SHOWING RESULTS FOR YOUR SEARCH")
  .setColor("RANDOM")
  .setThumbnail(`https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif`)
  .setDescription(movie.plot)
  .setFooter(`Ratings: ${movie.rating}`)
  .addField("Country", movie.country, true)
  .addField("Languages", movie.languages, true)
  .addField("Type", movie.type, true);


  message.channel.send(embed)
  



  }

}