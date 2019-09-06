const Discord = require("discord.js");
const { token } = require("./token.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log("I'm now connected to this bitch ass server of yours!.");
});

let isConnected = false;

client.on("message", (msg) => {
    if (!isConnected && msg.content === "con") {
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
    else if(isConnected && msg.content === "con") {
            msg.channel.send(`Already connected to: ${msg.member.voiceChannel}!`);
    }
    if(isConnected && msg.content === "dis"){
        msg.member.voiceChannel.leave();
        isConnected = false;
    }
    if (isConnected && msg.content === "1"){
        msg.channel.send("Yes.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/01-yes.mp3");
    }
    if (isConnected && msg.content === "2"){
        msg.channel.send("No.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/02-no.mp3");
    }
    if (isConnected && msg.content === "3"){
        msg.channel.send("Food, please.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/03-food.mp3");
    }
    if (isConnected && msg.content === "4"){
        msg.channel.send("Wood, please.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/04-wood.mp3");
    }
    if (isConnected && msg.content === "5"){
        msg.channel.send("Gold, please.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/05-gold.mp3");
    }
    if (isConnected && msg.content === "6"){
        msg.channel.send("Stone, please.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/06-stone.mp3");
    }
    if (isConnected && msg.content === "7"){
        msg.channel.send("Aaah!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/07-ahh.mp3");
    }
    if (isConnected && msg.content === "8"){
        msg.channel.send("All hail, king of the loosers!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/08-all-hail.mp3");
    }
    if (isConnected && msg.content === "9"){
        msg.channel.send("Ooooh!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/09-oooh.mp3");
    }
    if (isConnected && msg.content === "10"){
        msg.channel.send("I will beat you back to Age of Empires!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/10-back-to-age.mp3");
    }
    if (isConnected && msg.content === "11"){
        msg.channel.send("(Laugh)");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/11-laugh.mp3");
    }
    if (isConnected && msg.content === "12"){
        msg.channel.send("Ah! Being rushed!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/12-being-rushed.mp3");
    }
    if (isConnected && msg.content === "13"){
        msg.channel.send("Sure, blame it on your ISP.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/13-blame.mp3");
    }
    if (isConnected && msg.content === "14"){
        msg.channel.send("Start the game already!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/14-start.mp3");
    }
    if (isConnected && msg.content === "15"){
        msg.channel.send("Don't point that thing at me!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/15-dont-point.mp3");
    }
    if (isConnected && msg.content === "16"){
        msg.channel.send("Enemy sighted.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/16-enemy-sighted.mp3");
    }
    if (isConnected && msg.content === "17"){
        msg.channel.send("It's good to be the king.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/17-its-good.mp3");
    }
    if (isConnected && msg.content === "18"){
        msg.channel.send("Monk, I need a monk!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/18-need-monk.mp3");
    }
    if (isConnected && msg.content === "19"){
        msg.channel.send("Long time, no siege.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/19-long-time.mp3");
    }
    if (isConnected && msg.content === "20"){
        msg.channel.send("My granny could scrap better than that.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/20-my-granny.mp3");
    }
    if (isConnected && msg.content === "21"){
        msg.channel.send("Nice town, I'll take it.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/21-nice-town.mp3");
    }
    if (isConnected && msg.content === "22"){
        msg.channel.send("Quit touching me!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/22-quit-touching.mp3");
    }
    if (isConnected && msg.content === "23"){
        msg.channel.send("Raiding party!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/23-raiding-party.mp3");
    }
    if (isConnected && msg.content === "24"){
        msg.channel.send("Dadgum.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/24-dadgum.mp3");
    }
    if (isConnected && msg.content === "25"){
        msg.channel.send("Eh, smite me.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/25-smite-me.mp3");
    }
    if (isConnected && msg.content === "26"){
        msg.channel.send("The wonder, the wonder, the... no!");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/26-the-wonder.mp3");
    }
    if (isConnected && msg.content === "27"){
        msg.channel.send("You played two hours to die like this?");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/27-two-hours.mp3");
    }
    if (isConnected && msg.content === "28"){
        msg.channel.send("Yeah, well, you should see the other guy.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/28-other-guy.mp3");
    }
    if (isConnected && msg.content === "29"){
        msg.channel.send("Roggan.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/29-roggan.mp3");
    }
    if (isConnected && msg.content === "30"){
        msg.channel.send("Wololo.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/30-wololo.mp3");
    }
    if (isConnected && msg.content === "31"){
        msg.channel.send("Attack an enemy now.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/31-attack-now.mp3");
    }
    if (isConnected && msg.content === "32"){
        msg.channel.send("Cease creating extra villagers.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/32-cease-creating.mp3");
    }
    if (isConnected && msg.content === "33"){
        msg.channel.send("Create extra villagers.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/33-create-villagers.mp3");
    }
    if (isConnected && msg.content === "34"){
        msg.channel.send("Build a navy.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/34-build-a-navy.mp3");
    }
    if (isConnected && msg.content === "35"){
        msg.channel.send("Stop building a navy.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/35-stop-building-navy.mp3");
    }
    if (isConnected && msg.content === "36"){
        msg.channel.send("Wait for my signal to attack.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/36-wait-attack.mp3");
    }
    if (isConnected && msg.content === "37"){
        msg.channel.send("Build a wonder.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/37-build-wonder.mp3");
    }
    if (isConnected && msg.content === "38"){
        msg.channel.send("Give me your extra resources.");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/38-give-extra-resources.mp3");
    }
    if (isConnected && msg.content === "39"){
        msg.channel.send("(Ally sound)");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/39-ally.mp3");
    }
    if (isConnected && msg.content === "40"){
        msg.channel.send("(Enemy sound)");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/40-enemy.mp3");
    }
    if (isConnected && msg.content === "41"){
        msg.channel.send("(Neutral sound)");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/41-neutral.mp3");
    }
    if (isConnected && msg.content === "42"){
        msg.channel.send("What age are you in?");
        msg.member.voiceChannel.connection.playFile("./tauntsFolder/42-what-age.mp3");
    }
    if (isConnected && msg.content === "69"){
        msg.channel.send("( ͡° ͜ʖ ͡°)");
    }
 });

client.login(token);