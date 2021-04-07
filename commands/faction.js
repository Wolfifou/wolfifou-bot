const Discord = require(`discord.js`)

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Nous sommes dans la TeamGobelin !`)
        .setDescription('Si sa vous interresses, vous pouvuez le rejoindre avec ce lien : **[https://discord.gg/tuWfDy77CQ](https://discord.gg/tuWfDy77CQ)** !')
        .setThumbnail(`https://cdn.discordapp.com/attachments/725317010489212990/818133002323886140/teamgobelin_1.png`)
        .setColor(`#00cfff`))
    },
    name: `faction`,
    help:{
        description: `Envoi le lien vers le serveur Faction de la TeamGobelin.` 
    }
}
