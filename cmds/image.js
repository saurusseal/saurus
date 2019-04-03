const Discord = require('discord.js');
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
const embed = await new Discord.RichEmbed().setDescription("").setColor(client.resolver.resolveColor('BLUE'));
let mentioned = message.mentions.members.first() || message.guild.members.get(args[0]);
let role = message.guild.roles.find(r => r = r.name("🔓"));

if(message.member.hasPermission('MANAGE_MEMBERS') != true) return message.channel.send(noperms2);
if(!mentioned) return message.channel.send(embed.setDescription("Please mention a member to recieve perms."));
try {
if(!mentioned.hasRole(role)) {
mentioned.removeRole(role, 'Take pic perms');
message.channel.send(embed.setDescription('Removed image perms from ' + mentioned.user.tag));
}
else {
mentioned.removeRole(role, 'Add pic perms');
message.channel.send(embed.setDescription('Added image perms to ' + mentioned.user.tag));
}
}
catch(e) {
return message.channel.send(embed.setDescription(e));
}
}

module.exports.help = {
  name: "image",
  usage: "image <@user>"
}
