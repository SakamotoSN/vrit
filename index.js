var nom = ("Ice-Bot")      //speudo
var jeu = ("Game")  //nom du jeu 
var statue_actuel = ('online')  //statue
var prefix = ("!ice-bot")             //prefix



const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();



bot.on('ready', function() {
    bot.user.setUsername(nom)
    bot.user.setPresence({ game: { name: (jeu)}, status: (statue_actuel)})
    console.log("Connected")});

bot.login(process.env.TOKEN);








bot.on('message', message => {

    if(message.content === "Xarrin!help"){ //Xarrin help
 
        const embed = new Discord.RichEmbed()
        .setTitle("commande pour les gif")
        .setColor(0x0086AE)
        .setDescription("voila les gif et image que Xarrin posséde")
        .setThumbnail("https://cdn.discordapp.com/attachments/434681503964725248/435060807118749700/SF_Byakko.png")
        .setFooter("pour plus d'info demander a sig :D")
        .addField("gif",
          "Xarrin!nickel\nXarrin!voyeur\nXarrin!ham")
          .addField("image",
          "Xarrin!Invocation:Byakko\nXarrin!Invocation:Phoenix\nXarrin!invocation:spiritwater\nXarrin!invocation:spiritearth\nXarrin!invocation:spiritwind\nXarrin!invocation:spiritfire")
    
        message.channel.send({embed});
    }



}
)
