const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchALlMenbers: true
    }),
    config =require('./config.json')
    fs = require('fs')

client.login(process.env.TOKEN)
client.on('ready',() => {
    console.log(`[Log] Bot lancé ${client.user.tag}`)
})
client.commands = new Discord.Collection()
client.db = require('./db.json') 

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')
    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.bienvenue.channel).send(new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag} viens d'atterrir sur Notre Discord !`, member.user.avatarURL())
    .setDescription(`> 👋 | Bienvenue ${member} sur le **Fifou's Market** !
    > 🎉 | Nous sommes maintenant ${member.guild.memberCount} !
    > ✔️ | Oublie pas de te vérifier dans le <#820076417571618846> !
    > 📝 | Prends soin de lire le <#818929127658618941> avant de profiter du serveur !
    > 💲 | Tu peux aussi lire le catalogue pour t'informer de nos prix !
    > 📩 | Pour commander, suis les indications dans le <#819978432846102569> !`)
    .setColor(`#00cfff`)
    .setFooter(`${member.guild.name}`, member.guild.iconURL())
    .setTimestamp())
})
 
client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.depart.channel).send(new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag} est partit de Notre Discord !`, member.user.avatarURL())
    .setDescription(`> ✈️ | Au revoir ${member.user.tag}...
    > 😭 | Sans toi nous sommes que ${member.guild.memberCount} sur le **Fifou's Market**...
    > 😉 | Nous te souhaitons une bonne continuation !
    > 🙏 | A bientôt !`)
    .setColor(`#00cfff`)
    .setFooter(`Fifou's Market`, (`https://cdn.discordapp.com/icons/818921637104713759/7775f03f26c665379a2a2c3c074fe1e7.webp?size=128`))
    .setTimestamp())
})
 