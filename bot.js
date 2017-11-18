var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    //OR
    token: process.env.BOT_TOKEN
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!test") { // command to trigger
      var interval = setInterval (function (){
        bot.sendMessage({
          to: channelID,
          message: "pong" // message to send
        });
      }, 1000); // time between each interval in milliseconds
    }
});
