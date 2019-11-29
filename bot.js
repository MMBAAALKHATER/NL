const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('عليكم السلام منور ');
  }
});
  client.on('message', msg => {
    if (msg.content === 'NXXᗡ∀') {
      msg.reply('تسجيل دخول تم التفعيل');
    }
});
client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('يا غالي السيرفر قريب بيفتح');
  }
});
client.on('message', msg => {
  if (msg.content === 'متئ يفتح السيرفر') {
    msg.reply('قريب...');
  }
});
client.on('message', msg => {
  if (msg.content === 'IP') {
    msg.reply('السيرفر الئ الحين ما اشتغل قريب');
  }
});
client.on('message', msg => {
  if (msg.content === 'NXXᗡ∀') {
    msg.reply('تسجيل دخول تم التفعيل');
  }
});
client.on('message', msg => {
  if (msg.content === 'متئ بيفتح السيرفر') {
    msg.reply('قريب..');
  }
});
client.on('message', msg => {
  if (msg.content === 'NXXᗡA') {
    reply('تم الغاء التفعيل ');
  }
});
  client.on('message', message => {
    
    let args = message.content.split(' ').slice(1).join(' ');
    
  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }
  
  
  if (message.content.startsWith('-N')) {
          if (!args[0]) {
message.channel.send("**-N <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }
 
});
  client.login('NjM3NzkyNzMwMzUyODQ0ODA1.XdQomw.X4vQA-SiIpwnL-A7KUXVVdPOeFY');
