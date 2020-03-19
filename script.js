
const TelegramBot = require('node-telegram-bot-api');

const { exec } = require('child_process');

const token = '1143258464:AAFFikCnoVnRri66kB3F8TydbShrrJpfjqc';

const bot = new TelegramBot(token, { polling: true });

const Commands = ['echo', 'data']

bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id; // Получаем ID отправителя
    var resp = match[1]; // Получаем текст после /echo
    bot.sendMessage(fromId, resp);
});

// bot.onText(/\/echo (.+)/, (msg, match)  => {
//     const chatid = msg.chat.id 
//     if (!Commands.includes(match[1])){
//         bot.sendMessage(msg.from.id, "illegal command");
//         return;
//       }else {
//         exec(match[1], (err, stdout, stderr) => {
//           if (err) {
//             bot.sendMessage(chatId, "error executing command");
//           }
      
//           console.log(`stdout: ${stdout}`);
//           console.log(`stderr: ${stderr}`);
    
//           bot.sendMessage(msg.from.id, match[1]);
//         });


//     var resp = match[1]; 
//     bot.sendMessage(fromId, resp);
// });


// bot.on('message', function (msg) {
//     var chatId = msg.chat.id; 
//     var photo = 'cats.png';
//     bot.sendPhoto(chatId, photo);
// });