const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Cette commande n\'existe pas.')
            message.channel.send(new Discord.MessageEmbed()
            .setColor('#00cfff')
            .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(`La commande help t'as été envoyé en messages privé !`)
            message.author.createDM().then(channel => {
                channel.send(new Discord.MessageEmbed()
                .setAuthor(`Commande Help du Wolfifou's Bot !`, `https://cdn.discordapp.com/avatars/345513926919716865/4c01d8468b71602ed244521b09104b81.webp`)
                .setColor('#00cfff')
                .setDescription(`Le prefix de notre bot est \`w!\` !
                Voici Toutes les commandes du bot :

                ${client.commands.filter(command => command.help).map(command => `\`${config.prefix}${command.name}\``).join(' ')}\n\nPour plus d'informations sur une commande, tapez \`${config.prefix}help [nom de la commande]\``))
            })
        }
    },
    name: 'help',
    help: {
        description: 'Cette commande permet d\'avoir de l\'aide.',
        syntax: '[nom de la commande]'
    }
}