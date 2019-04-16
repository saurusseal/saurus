var cleverbot = require("cleverbot.io"),
bot = new cleverbot(process.env.cleverbotuser, process.env.cleverbotkey);
module.exports = async (client, message) => {

let messageArray = message.content.split(" ");
let cmd = messageArray[0].toLowerCase();
if(message.author.bot) return;
if(message.content == "nigger") {
if(message.member.hasPermission("KICK_MEMBERS")) {
message.reply('no hard r in my domain retard');
message.delete();
}}
if(message.content.toLowerCase().indexOf(client.config.prefix) !== 0) return;
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let commandfile = client.commands.get(cmd.slice(client.config.prefix.length));
if(commandfile) commandfile.run(client, message, args);
}
