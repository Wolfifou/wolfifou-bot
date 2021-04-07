const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Voici le règlement du Fifou's Market :`)
        .setDescription(`Voici le règlement du Fifou's Market :

        **Règle 1 **: Ne pas insulter sous peine d'être sanctionné. 
        
        **Règle 2 :** Ne pas tenir de propos à caractères racistes, homophobes, religieux et discriminatoires sur le Market.
        
        **Règle 3 :** Il faut avoir un comportement exemplaire, ne pas être insolent envers les plus jeunes personnes du discord.
        
        **Règle 4 :** Ne pas diffuser du contenu pornographique, pédopornographique, pédophile et zoophile sous risque d'un bannissement. 
        
        **Règle 5 :** Le spam et le flood sont interdits.
        
        **Règle 6 :** Le spam des tickets est sanctionnable d'un kick du discord.
        
        **Règle 7 :** Il est strictement interdit de faire de la pub que ce soit en messages privés ou sur l'intégralité du serveur sous peine de kick.
        
        **Règle 8 :** Il faut respecter le patern indiqué pour les commandes, sinon elles ne seront pas prises en compte. Et si cela persiste ce seras suivit d'une sanction ! 
        
        **Règle 9 :** Le harcèlement en vocal ou à l'écrit est  interdit !
        
        **Règle 10 :** Les arnaques sont interdites sous risque d’un bannissement temporaire du discord.
        
        **Règle 11 :** Il est obligatoire de payer en premier quelque soit l’échange.
        
        __***MERCI DE RESPECTER CE RÈGLEMENT !***__`)
        .setColor(`#BD6B17`)
        .setFooter(`Mis à jour le 06/04/2021`, message.guild.iconURL()))
    },
    name: 'regle',
    help: {
        description: `Les règles du serveur`,
    }
}