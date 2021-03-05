const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

const APIService = require('./APIService');
const { response } = require('express');

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


// Get data from UniqueIdGenerator
// Proxy
app.get('/unique/number', (req, res) => {
  fetch('http://localhost:6060/generate/number')
    .then(dataJson => dataJson.json())
    .then(data => {
      // data changing
      res.send(JSON.stringify(data));
    })
});

app.get('/unique/array', (req, res) => {
  fetch('http://localhost:6060/generate/array')
    .then(dataJson => dataJson.json())
    .then(data => res.json(data));
});

app.get('/weather/:city', (req, res) => {
  fetch(`http://localhost:6060/current/weather/${req.params.city}`)
      .then(resp => resp.json())
      .then(data => {
          res.json(data);
      });
})

app.get('/forecast/:city', (req, res) => {
  fetch(`http://localhost:6060/forecast/weather/${req.params.city}`)
      .then(resp => resp.json())
      .then(data => {
          res.json(data);
      });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});