const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { token, default_prefix } = require("./config.json")
const client = new Client({
    disableEveryone: true
})
const db = require("quick.db")
const ms = require('parse-ms')

client.commands = new Collection();
client.aliases = new Collection();



["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`)
    client.user.setActivity(db.get(`status`))
})

client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    if (!message.content.startsWith(prefix)) return;
 
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    
    let command = client.commands.get(cmd);
    
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    
    if (command) 
        command.run(client, message, args);


});




client.on("guildMemberAdd", (member) => { 
    let chx = db.get(`welchannel_${member.guild.id}`); 
    
    if(chx === null) { 
      return;
    }


    
    const Discord = require("discord.js")
    let wembed = new Discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("RANDOM")
    .setThumbnail(`https://media.giphy.com/media/FQyQEYd0KlYQ/giphy.gif`)
    .setDescription(`** <a:mediawelcome:730361276336832563> Welcome ${member.user.username} to our server <a:mediawelcome:730361276336832563>** \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <a:11:714743373554122784> **THE BELOW GUIDELINES WILL HELP YOU OUT THROUGHT THE SERVER** <a:11:714743373554122784> \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <a:11:714743373554122784> **Read and Follow our Rules.** \n <a:11:714743373554122784> **Be upto date with our announcements and updates** \n <a:11:714743373554122784> **Make new friends in the chat and be active.** \n <a:11:714743373554122784> **Do not spam it's against a civilised discord member ethics** \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <a:mediahype:730362648138481726>**We hope that u have fun in the server!**<a:mediahype:730362648138481726>`);
    
    client.channels.cache.get(chx).send(wembed) 
  
  

    


})






client.login(token);