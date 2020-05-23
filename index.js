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




    if(message.content.startsWith(prefix + "dit")){
        if("234368202379886593".includes(message.author.id)){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        message.delete();
        message.channel.send(`${thingToEcho}`)  
    }else{
        message.delete();
    }
    }




//if(message.content == (prefix + "bonjours")){
//    message.channel.send(`Bonjours, je suis un bot`)
//}
    
//if (message.content.startsWith(prefix + "search", "find", "play")){
//        message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
//       console.log("FINISH") 
//    }




}
)
