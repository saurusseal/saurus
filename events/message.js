var cleverbot = require("cleverbot.io"),
bot = new cleverbot(process.env.cleverbotuser, process.env.cleverbotkey);
module.exports = async (client, message) => {

let messageArray = message.content.split(" ");
let cmd = messageArray[0].toLowerCase();
if(message.author.bot) return;
  if(message.channel.id == 564631599476506639) {
    console.log('pee pee poo poo')
          await bot.create(function (err, session) {
            message.channel.startTyping()
  await bot.ask(messageArray.join(" "), function (err, response) {
    
  await message.channel.send(response).then(m => m.channel.stopTyping())
  });
});
  }
if(message.content.toLowerCase().indexOf(client.config.prefix) !== 0) return;
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let commandfile = client.commands.get(cmd.slice(client.config.prefix.length));
if(commandfile) commandfile.run(client, message, args);
}
