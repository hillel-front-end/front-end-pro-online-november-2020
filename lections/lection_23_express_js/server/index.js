const express = require('express');
const UsersService = require('./Users.service');

const app = express(); // constructor
const port = 7070;

app.use(express.static(__dirname + './../'));


app.all('*', (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  
  next();
});

app.get('/users', UsersService.getUsers);

app.get('/users/all', UsersService.getUsersAll);
app.get('/users/:usersName/', UsersService.getUsersByName);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});