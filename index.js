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


if(message.content.startsWith(prefix)){
message.channel.send('My Message')
}


bot.on('message', message => {





}
)
