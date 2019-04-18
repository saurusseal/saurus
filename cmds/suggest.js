const Discord = require('discord.js')
/**
 * @param {Discord.client} client 
 * @param {Discord.Message} msg 
 * @param {srting[]} args 
 */
async function run(client, msg, args){
    if(msg.channel.id != '563862969616826368') return msg.channel.send({embed:{description:'Please use <#563862969616826368>'}}).then(message => [msg.delete(1000), message.delete(1000)])
    let suggestion = args.join(' ').split(' | ');
    if(suggestion.length < 2) return msg.channel.send({embed:{description:'Please provide a suggestion as follows: s?suggest title | description'}}).then(message => [msg.delete(1000), message.delete(1000)])
    /**
     * @type {Discord.Message}
     */
    let message = await msg.channel.send({embed:{
        author: { name: `${suggestion.shift()} | ${msg.author.tag}`, icon_url: msg.author.displayAvatarURL },
        color: msg.guild.roles.find(role => role.name == 'Yellow').color,
        description: suggestion.join(' | '),
        footer: { text: 'Suggested at ' },
        timestamp: new Date
    }})
    msg.delete()
    await message.react('568405531728019456').then(() => message.react('568405684404748314'))
    let collector = message.createReactionCollector((reaction, user) => ['568405531728019456', '568405684404748314'].includes(reaction.emoji.id))
    collector.on('collect', async reaction => {
        let user = reaction.users.last()
        if(user.id == msg.author.id) return await reaction.remove(user)
        if(reaction.emoji.id == '568405531728019456' && reaction.count == 6){
            await message.pin()
            msg.author.send({embed:{description: `Your [suggestion](${message.url}) has 6 upvotes and was pinned!`}})
            collector.stop()
        }
    })
}

module.exports = {
    run,
    help: {
        name: 'suggest'
    }
}