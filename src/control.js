// modules
require('dotenv').config()
const EventEmitter = require('events');

const {
    Client,
    Intents,
    MessageEmbed  
} = require('discord.js');

// define stuff
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

const emitter = new EventEmitter();
// export assets to other files
exports.Client = Client;
exports.Intents = Intents;
exports.MessageEmbed = MessageEmbed;
exports.bot = bot;


// get helpers, run events and commands
bot.login(process.env.TOKEN);
emitter.emit('test');

const helper = require('./helper.js');
const events = require('./events.js')();
const commands = require('./commands.js')();