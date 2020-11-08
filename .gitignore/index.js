
 const express = require("express");
 const app = express();

 app.listen(() => console.log("start btrolie"));

 app.use('/ping', (req, res) => {
   res.send(new Date());
 });
  

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const ms = require("ms");
client.login(process.env.TOKEN);
//البرفكس تحت
const prefix = "هنا"
// خلي ايديك
const developers = "هنا"





//حاله بوتك
  client.on("ready", () => {

   console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name}`));
  client.user.setStatus("online");
 client.user.setActivity(`${prefix}help`, { type: "WATCHING" });
    });





client.on('message', message => {

var dragon = ["رابط الصوره",
رابط الصوره",
//ملاحظه : في نهايه الصوره ممنوع تخلي , لانها تسبب مشاكل في البوت
"رابط الصوره"]
        var args = message.content.split(" ").slice(1);
         if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + 'الأمر')) {
         var mdragon = new Discord.RichEmbed()
.setImage(dragon[Math.floor(Math.random() * dragon.length)])
message.channel.send(mdragon);
    }
});
