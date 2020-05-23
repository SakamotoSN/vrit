var nom = ("Ice-Bot")      //speudo
var jeu = ("Game")  //nom du jeu 
var statue_actuel = ('online')  //statue
var prefix = ("!ice-bot")             //prefix
var error =(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)


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

    if(message.content.startsWith(prefix + "meme")){
        message.channel.send(error)
        }else
        if(message.content.startsWith(prefix + "search")){
            message.channel.send(error)
}else        
        if(message.content.startsWith(prefix + "play")){
    message.channel.send(error)
}else   

if(message.content.startsWith(prefix + "hello")){
message.channel.send("Bonjour, je suis un bot")
}







}
)
