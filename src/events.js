module.exports = function() {
  const control = require('./control.js');
  control.bot.on('ready', () => {
      console.log(`Bot ${control.bot.user.tag} is logged in!`);
      control.bot.user.setActivity('!!help on discord', { type: "PLAYING" });
  });
  
  control.bot.on('guildMemberAdd', (member) => {
      const channelId = '918635755562233876';
      const welcomeMessage = `Hey <@${member.id}> the nerd! Greetings!`;
      member.guild.channels.fetch(channelId).then(channel => {
          channel.send(welcomeMessage)
      });
  });
}
