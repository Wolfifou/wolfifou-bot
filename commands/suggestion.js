const Discord = require(`discord.js`)
    config = require('../config.json')
 
module.exports = {
    run: (message, args) => {
        const member = message.member
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (message.channel.id !== (config.suggestion.channel2)) return message.channel.send(`Veuillez exécuter cette commande dans <#819961680057466942>.`)
        if (!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        message.channel.send(`Suggestion envoyée ${member} !`)
        message.guild.channels.cache.get(config.suggestion.channel).send(new Discord.MessageEmbed()
        .setTitle(`💡 Nouvelle idée de ${message.author.tag} 💡`)
        .setDescription(message.content.trim().slice(`${config.prefix}suggestion `.length))
        .setThumbnail(member.user.displayAvatarURL())
        .setColor(`#00cfff`))
    },
    name: 'suggestion',
    guildOnly: true,
    help: {
        description: `Permet de suggérer une idée`,
        syntax: `[suggestion]`
    }
}