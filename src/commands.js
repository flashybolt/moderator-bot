const helper = require('./helper.js');
module.exports = function() {
  const control = require('./control.js');
  const BAD_WORDS = process.env.BAD_WORDS.split(',');
  
  control.bot.on('messageCreate', (message) => {
      if (message.author.bot === false) {
        if (message.content.startsWith('!!')) {
          helper.command(message, '!!about', function(){
            message.channel.send("Hello! I'm an all purpose bot with Moderation, Entertainment, and Ranking features.")
          })
          
          helper.command(message, '!!help', function(){
            message.channel.send("help msg here")
          })
        }
        for (const j of BAD_WORDS) {
          helper.command(message, j, function(){
            message.delete();
            message.author.send('Please don\'t swear.');
          })
        }
      }
  });
}

