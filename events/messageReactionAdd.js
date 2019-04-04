const Discord = require('discord.js')

module.exports = async (client, reaction, user) => {
  if (reaction.emoji.name === "⭐") {
    if(reaction.count == 3) {
const embed = await new Discord.RichEmbed().setDescription("").setColor(client.resolver.resolveColor('YELLOW'));
let starboard = client.channels.find(c => c.name == "starboard");

starboard.send(embed.setDescription(reaction.message.content).setAuthor(reaction.message.author.username, reaction.message.member.user.avatarURL).setFooter('⭐ ' + reaction.count + '   •   Saurus'));
    }
  }
};
