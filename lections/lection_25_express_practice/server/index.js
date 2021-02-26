const express = require('express');
const bodyParser = require('body-parser');

const APIService = require('./APIService');

const app = express(); // constructor
const port = 7070;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + './../'));


app.all('*', (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  
  next();
});

// CREATE
app.post('/user/create', APIService.userCreate);

// READ
app.get('/user/data', APIService.userData);

// DELETE
app.delete('/user/data', APIService.userDataDelete);

// UPDATE
app.put('/user/update', APIService.userDataUpdate);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});