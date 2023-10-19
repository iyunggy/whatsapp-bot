
const express = require('express'); 
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express(); 
const client = new Client();
const PORT = 3000; 

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
	console.log(message);
  if(message.body === '!ping') {
		message.reply('pong');
	}
});
 

client.initialize();

  
app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 