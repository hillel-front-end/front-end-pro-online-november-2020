const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const app = express();
const port = 6060;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const token = '1731333802:AAHCGMZks7NKCUHTPIZbe8jw6On_o2euqmE';
const bot = new TelegramBot(token, {polling: true});
const USERS_FILE = './users.json';
let usersInMemory = null;

filereader(USERS_FILE).then(data => {
  usersInMemory = data;
}).catch(err => {
  fileCreation(USERS_FILE, JSON.stringify([]));
});

const random_ids = [];

const fileCreation = (fileName, dataJson) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, dataJson, (err) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve();
    });
  });
};

function filereader(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf8', function (error, d) {
      if (error) reject(error);

      else resolve(JSON.parse(d));
    });
  });
}

bot.on("polling_error", console.log);

const postCreationGreeting = (chatId) => {
  bot.sendMessage(chatId, 'Мы рады вас видеть! Пожалуйста введите свою дату рождения в формате: dd/mm/yyyy');
}

bot.onText(/(?<day>\d\d)\/(?<month>\d\d)\/(?<year>\d\d\d\d)/, (msg, match) => {
  const chatId = msg.chat.id;
  const {day, month, year} = match.groups;

  const currentUser = usersInMemory.find(user => user.chatId === chatId);
  currentUser.birthday = { day, month, year };
  fileCreation(USERS_FILE, JSON.stringify(usersInMemory)).then(() => {
    bot.sendMessage(chatId, `Спасибо! Вы получите поздравление от нас!`);
  });
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  if (!usersInMemory.some(user => user.chatId === chatId)) {
    usersInMemory.push({
      chatId: chatId
    });
  } else {
    bot.sendMessage(chatId, 'С возвращением, мой милый друг!');
    setTimeout(() => {
      postCreationGreeting(chatId);
    },2000);

    return;
  }

  fileCreation(USERS_FILE, JSON.stringify(usersInMemory)).then(() => {
    bot.sendMessage(chatId, 'Приветствую тебя мой милый друг!');
    postCreationGreeting(chatId);
  })
});

bot.onText(/\/echo (?<test>.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match.groups.test

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/random (?<limit>\d{1,5})/, (msg, match) => {
  const chatId = msg.chat.id;
  const limit = match.groups.limit;

  const rand = Math.floor(Math.random()*limit);

  random_ids.push(msg.from.id);

  bot.sendMessage(chatId, String(rand));
});

bot.onText(/\/get_ids/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, String(random_ids));
});


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Received your message');
// });


app.get('/render-ids', (req, res) => {
  usersInMemory.forEach(user => {
    bot.sendMessage(user.chatId, 'Check everyone!');
  });

  res.send('Done!');
});


app.get('/birthdays/month', (req, res) => {
  const fullDate = new Date();
  const month = fullDate.getMonth();

  const userWithBDThisMonth = usersInMemory.filter(user => {
    return user.birthday && parseInt(user.birthday.month) === month + 1;
  });

  res.send(userWithBDThisMonth);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});