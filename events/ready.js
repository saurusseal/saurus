const chalk = require("chalk");
module.exports = async (client) => {
    console.log(chalk.green('Saurus loaded successfully.'));
    await client.user.setPresence({ game: { name: `${client.users.size} Dinosaur Earthers`}});
}

