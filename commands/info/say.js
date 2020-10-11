const db = require('quick.db')
const ms = require('parse-ms')
module.exports = {
    config: {
        name: 'say',
        description: 'mimic other people',
        aliases: ['copy']
    },
    run: async (bot, message, args) => {
        let argo = args.slice(1).join(' ')
        let user = message.mentions.users.first();
    
        if (!user) return message.channel.send('Please mention someone!')
        if (user && !argo) return message.channel.send('Please add text!')
            await message.channel.fetchWebhooks().then(webhooks => {
                if(webhooks.size === 50) return message.reply("Max webhook size reached please delete some webhooks")
            });
        message.delete();
            message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL()
            }).then(async webhook => {
                await webhook.send(argo)
            webhook.delete()
            }).catch(console.error)

    }
}