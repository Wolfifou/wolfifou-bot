const { Client } = require("discord.js");

const Discord = require(`discord.js`)
    client = new Discord.Client()

module.exports = {
    run: async (message) => {
        
        let args = message.content.trim().split(/ +/g);
        let time = Date.now();

        await message.channel.send("**Chargement... 🤖**").then(async(m) => await m.edit(`**Latence du bot :** ${Date.now() - time} ms`))
        
    },
    name: `ping`
}