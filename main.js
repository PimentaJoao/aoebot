const Discord = require("discord.js");
const fs = require("fs");
const { token } = require("./token.js");
const { tauntsTable } = require("./taunts.js");

const client = new Discord.Client();

const commandPrefix = "!aoe ";
const commandList = fs.readFileSync("./commands.txt", "utf8");
let isConnected = false;

client.on("ready", () => {
    console.log("I'm connected to the server!.");
});

client.on("message", (msg) => {
    
    // Ignora mensagem caso não venha de uma guild/server
    if (!msg.guild) return;
    
    // Ignora mensagem caso venha de um bot (ou dele mesmo)
    if (msg.author.bot) return;
    
    // Ignora mensagem caso ela não seja dirigida ao bot
    // (primeiros chars =/= prefixo de comando)
    if (msg.content.substring(0, commandPrefix.length) !== commandPrefix) return;
    
    // Gera um aviso e ignora mensagem caso venha de alguém
    // que não está no canal de voz.
    if (!msg.member.voice.channel) {
        msg.reply('Você precisa estar conectado num canal!');
        return;
    }
    
    let userMessage = msg.content.toLowerCase();
    if (isNaN(userMessage)){ // If message is not a number, then it is a normal command.

        // Connecting 
        if (!isConnected && userMessage ===  commandPrefix + "connect") {
            if (msg.member.voiceChannel) {
                msg.channel.send(`Connecting to: ${msg.member.voiceChannel}`);
                msg.member.voiceChannel.join()
                .then(connection => {
                    console.log("Connected to a voice channel.");
                    isConnected = true;
                }).catch(err => {
                    console.log(err);
                });
            }
            else {
                msg.channel.send(`You must be in a Voice Channel, ${msg.author.username}!`);
            }
        }
        // If already connected
        else if (isConnected && userMessage === commandPrefix + "connect") {
            msg.channel.send(`Already connected to: ${msg.member.voiceChannel}!`);
        }
        // Disconnecting
        if (isConnected && userMessage === commandPrefix + "disconnect"){
            msg.member.voiceChannel.leave();
            isConnected = false;
        }
        // Show commands
        if (isConnected && (userMessage === commandPrefix + "commands") || ((userMessage === commandPrefix + "help"))){
            msg.channel.send(commandList);
        }

    }
    else { // If message is a number, then it is a taunt 
        userMessage = parseInt(userMessage, 10);
        if (isConnected){
            if ((userMessage >= 1 && userMessage <= 42)){
                console.log("Entrei na condição.");
                tauntsTable[userMessage-1](msg);
            }
            else if (userMessage === 69) {
                tauntsTable[42](msg);
            }
        }
    }

 });

client.login(token);