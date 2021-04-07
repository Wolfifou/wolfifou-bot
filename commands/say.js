const Discord = require(`discord.js`)
    config = require('../config.json')
 
module.exports = {
    run: (message, args) => {
        const member = message.member
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Le staff à une annonce à vous faire !`)
        .setDescription(message.content.trim().slice(`${config.prefix}say`.length))
        .setColor(`#00cfff`)
        .setFooter(`Cordialement le staff et ${message.author.tag} !`, member.user.displayAvatarURL()))
    },
    name: 'say',
    guildOnly: true,
    help: {
        description: `Permet faire dans annonces`,
        syntax: `[message d'annonce]`
    }
}