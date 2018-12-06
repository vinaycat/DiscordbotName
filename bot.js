var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var person = args[1]
        console.log("original args", args);
        var removed = args.splice(1, args.length);
        console.log("spliced args", removed);
        var all = removed.join('');
        
        //var encodedUserId = args[1];
       // console.log(encodedUserId);
        //var realUserId = encodedUserId.split("!")[1].split(">")[0];
        //console.log(realUserId);
        /*var user = bot.users[realUserId];
        var username = user.username;
        console.log(user);
        console.log(userID);
        console.log('message.member', message.member)*/
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'count':
                bot.sendMessage({
                    to: channelID,
                    message: "No spaces: " + all.length
                });
            break;
            case 'flex':
                bot.sendMessage({
                    to: channelID,
                    message: "<@186602980563222528> Can I flex plz?"
                });
            break;
            case 'help count':
            bot.sendMessage({
                to: channelID,
            });
            break;
            // Just add any case commands if you want to..
         }
     }
});