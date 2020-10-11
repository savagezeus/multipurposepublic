const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Best NPM package",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 4,
  },
  {
    title: "What is the rarest M&M color?",
    options: ["Brown", "Red", "Green", "Pink"],
    correct: 1,
  },
  {
    title: "In what year were the first Air Jordan sneakers released?",
    options: ["1989", "1986", "1984", "1987"],
    correct: 3,
  },
  {
    title: "Tennis star Serena Williams won which major tournament while pregnant with her first child?",
    options: ["Wimbledon", "The Australia open", "US Open", "ATP Finals"],
    correct: 2,
  },
  {
    title: "In which European city would you find Orly airport?",
    options: ["Paris", "The Australia open", "US Open", "ATP Finals"],
    correct: 1,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "fun",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`RANDOM`)
      .setFooter(
        `Reply to this message with the correct answer number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  },
};