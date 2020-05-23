var nom = ("Ice-Bot")      //speudo
var jeu = ("Smash Ultimate")  //nom du jeu 
var statue_actuel = ('online')  //statue
var prefix = ("!ice-bot")             //prefix



const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

function random(min, max) {
    min = Math.ceil(0)// 0 est impossible a avoir
    max = Math.floor(100)
    RNG = Math.floor(Math.random() * (max - min +1) + min);
 }

bot.on('ready', function() {
    bot.user.setUsername(nom)
    bot.user.setPresence({ game: { name: (jeu)}, status: (statue_actuel)})
    console.log("Connected")});

bot.login(process.env.TOKEN);



bot.on('message', message => {



if(message.content.startsWith("!ice-bot meme")){
message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
}
if(message.content.startsWith("!ice bot")){
    message.channel.send(`T'as oublié le - dans la commande batard`)
    }
    

if(message.content.startsWith("!ice-bot search")){
    function random(min, max) {
        min = Math.ceil(0)// 0 est impossible a avoir
        max = Math.floor(100)
        RNG = Math.floor(Math.random() * (max - min +1) + min);
     }
    random();
    console.log(RNG)
    if (RNG < 80){
        console.log("RNG normal")
        message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
}else{
    console.log("RNG google")
    message.channel.send(`Tien BG : https://www.google.fr`)   
}
}




if(message.content.startsWith("!ice-bot play")){
message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
} 

if(message.content.startsWith("!ice-bot hello")){
message.channel.send("Bonjour, je suis un bot")
}


if(message.content.startsWith("!ice-bot-say")){
    if("234368202379886593 330676716676710400 396423644794060800 394603568373694474 305758596971626498 434070408501919745".includes(message.author.id)){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    message.delete();
    message.channel.send(`${thingToEcho}`)  
}else{
    
    message.delete();
}
}
if(message.content.startsWith('!ice-bot-MP')) {

    if(message.mentions.users.first()){

    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();

    userToSend.send(`🧊 ${message.author.username} vous a envoyer un message! 🧊\n\n${messageToSend}`);
    message.delete(`🧊 ${message.author.username} vous a envoyer un message! 🧊\n\n${messageToSend}`);
    message.channel.send(`**${message.author}** , votre message a bien été envoyer a **${message.mentions.users.first().username}**`)
}else{
message.delete();
message.channel.send(`erreur`)

}
}





if(message.content.startsWith("!(S)MP")) {
    if("234368202379886593".includes(message.author.id)){
    if(message.mentions.users.first()){

    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();

    userToSend.send(`${messageToSend}`);
    message.delete();
}else{
message.delete();
}
}else{
    console.log("WII")
    }
}



if(message.content === "!ice-bot help"){ //help
 
    const embed = new Discord.RichEmbed()
    .setTitle("Voici les commandue de Ice-Bot")
    .setAuthor("Ice-Bot")
    .setColor(0x00FFF8)
    .setFooter("Ce bot est principalement un bot troll")
    .addField("Commande actuel",
    "!ice-bot meme\n!ice-bot search\n!ice-bot play\n!ice-bot hello")
     .setThumbnail("https://cdn.discordapp.com/attachments/713157932258295950/713724412423045201/flat550x550075f.jpg")
    message.channel.send({embed});
}

if(message.content === "!ice-bot eurobeat"){ 
    message.channel.send("", {
    file: "https://raw.githubusercontent.com/hugo59191/vrit/master/file/euro.jpg"
})
}

if(message.content === "!ice-bot anime"){ 
    message.channel.send("Rentres dans ce trou, s'il te plaît.", {
    file: "https://raw.githubusercontent.com/hugo59191/vrit/master/file/hole.gif"
})
}


}
)
