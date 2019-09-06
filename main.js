const Discord = require("discord.js");
const { token } = require("./token.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log("I'm now connected to this bitch ass server of yours!.");
});

let isConnected = false;

client.on("message", (msg) => {
    if (msg.content === "con") {
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
    if(isConnected && msg.content === "dis"){
        msg.member.voiceChannel.leave();
    }
    if(isConnected && msg.content === "1"){
        msg.channel.send("Yes.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/01-yes.mp3");
    }
 });

client.login(token);