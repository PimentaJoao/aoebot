const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();

const commandPrefix = "!aoe";
const commandList = fs.readFileSync("./commands.txt", "utf8");
const serversConfigs = {
    '819290156946554930': {
        connectedToVoiceChannel: false,
        voiceChannelId: undefined,
        connection: null,
    },
    '771605067291295786': {
        connectedToVoiceChannel: false,
        voiceChannelId: undefined,
        connection: null,
    },
};

client.on("ready", () => {
    console.log("I'm online!.\n");
});

client.on("guildCreate", (guild) => {

    console.log(`Joined ${guild.id}`);

    // server config constructor
    serversConfigs[guild.id] = {
        connectedToVoiceChannel: false,
        voiceChannelId: undefined,
        connection: null,
    }
});

client.on("guildDelete", (guild) => {
    
    console.log(`Left ${guild.id}`)

    // releases server config
    delete serversConfigs[guild.id];
});

client.on("message", async (msg) => {

    // Ignores message if it doesn't come from guild/server
    if (!msg.guild) return;

    // Ignores message if it comes from a bot (or itself)
    if (msg.author.bot) return;
    
    // Ignores message if user is not in a voice channel
    if (!msg.member.voice.channel) return;

    // "Normalizes" message, cutting prefix + 1 space character
    let userMessage = msg.content.toLowerCase().slice(commandPrefix.length + 1);

    // If message is not a number and starts with command prefix, it is a normal command.
    if (msg.content.startsWith(commandPrefix) && isNaN(msg.content)) {

        if (userMessage === "connect") {
            if (!serversConfigs[msg.guild.id].connectedToVoiceChannel) {
                try {
                    serversConfigs[msg.guild.id].connectedToVoiceChannel = true;
                    serversConfigs[msg.guild.id].voiceChannelId = msg.member.voice.channel.id;
                    serversConfigs[msg.guild.id].connection = await msg.member.voice.channel.join();
                    msg.channel.send(`Connecting to: ${msg.member.voice.channel}`);
                } catch (err) {
                    msg.channel.send('Sorry, there was an error! Try again later.');
                    console.log(`[ERR] There was an error trying to connect to: ${msg.member.voice.channel}`);
                    console.log(err);
                }
            }
            else {
                msg.channel.send(`Already connected to: ${msg.member.voice.channel}!`);
            }
            return;
        }

        // Disconnecting
        if (userMessage === "disconnect") {
            if (serversConfigs[msg.guild.id].connectedToVoiceChannel) {
                msg.member.voice.channel.leave();
                serversConfigs[msg.guild.id].connectedToVoiceChannel = false;
                serversConfigs[msg.guild.id].voiceChannelId = undefined;
                serversConfigs[msg.guild.id].connection = null;
                msg.channel.send(`Disconnecting from: ${msg.member.voice.channel}`);
            }
            else {
                msg.channel.send(`I'm not connected to: ${msg.member.voice.channel}!`);
            }
            return;
        }
        // Show commands
        if (userMessage === "commands" || userMessage ===  "help" || userMessage === "list"){
            msg.channel.send(commandList);
            return;
        }
        if (userMessage === "dev"){
            console.log(serversConfigs);
            return;
        }
    }
    // If message is a number, then it is a taunt
    else {
        let taunt = parseInt(msg.content, 10);
        if (serversConfigs[msg.guild.id].connectedToVoiceChannel){
            if ((taunt >= 1 && taunt <= 42)) {
                serversConfigs[msg.guild.id].connection.play(`./tauntsFolder/${taunt}.mp3`);
            }
            else if (taunt === 69) {
                msg.channel.send("( ͡° ͜ʖ ͡°)");
            }
            else if (taunt === 420) {
                msg.channel.send("( * ͜ʖ*)y─┛");
            }         
            else {
                return;
            }   
        }
    }

 });

client.login(process.env.AOE_TOKEN);