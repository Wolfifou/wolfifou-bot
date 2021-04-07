const Discord = require(`discord.js`)

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Recrutement TeamGobelin`)
        .setDescription('Si tu souhaite être recruter dans notre faction, Tu peux accédé au formulaire de recrutement avec ce lien : **[https://forms.gle/uYku9rz9BHxD2AB3](https://forms.gle/uYku9rz9BHxD2AB3)**')
        .setThumbnail(`https://cdn.discordapp.com/attachments/725317010489212990/818133002323886140/teamgobelin_1.png`)
        .setColor(`#00cfff`))
    },
    name: 'formulaire',
    help: {
        description: `Envoi le lien du formulaire de recrutement de la TeamGobelin`
    }
}