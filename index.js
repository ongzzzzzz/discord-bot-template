const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("I'm not dead! :D"));

app.listen(port, () => console.log(`listening at http://localhost:${port}`));

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "xxx_"; // your short name here (eg. lyh_)


client.on("message", function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	}

	else if (command === "echo") {
		const string = args.join(" ");
		message.channel.send(string);
	}

	else if (command === "name") {
		message.channel.send(`My creator's name is XXX!`); // your full name here
	}
});


client.login(process.env.BOT_TOKEN);