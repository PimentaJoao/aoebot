const Discord = require("discord.js");

const token = require("./token.js");

const client = new Discord.Client();

client.on('ready', () => {
    console.log("I'm now connected to this bitch ass server of yours!.");
});

client.on('message', (msg) => {
    if (msg.content === '1') {
        if (msg.member.voiceChannel) {
            msg.channel.send('To colando!')
            msg.member.voiceChannel.join()
            .then(connection => {
                const dispatcher = connection.playFile("C:/Users/Pimenta/Documents/aoeBot/taunts/01-yes.mp3");
            }).catch(err => {
                console.log('~~~DEU RUIM PATRÃO~~~');
                console.log(err);
            });
        }
        else {
            msg.channel.send(`You must be in a Voice Channel for me to talk to you, ${msg.author.username}!`);
        }
   }
 });

client.login(token.botToken);