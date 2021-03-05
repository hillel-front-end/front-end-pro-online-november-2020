const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express(); // constructor
const port = 6060;

const openWeatherConfig = {
    protocol: 'http://',
    domain: 'api.openweathermap.org',
    resourceBase: '/data/2.5',
    API_KEY: '2810361115bc38ee291eb1e48fdb49d4', // NO SAVE IN REPO
};

const {protocol, domain, resourceBase, API_KEY} = openWeatherConfig;
const openWeatherPath = `${protocol}${domain}${resourceBase}`;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.all('*', (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    
    next();
});
function getRand() {
    return Math.floor(Math.random()*100);
}
app.get(/\/generate\/number\/id-\d{,255}/, (req, res) => {
    const nNumber1 = getRand();

    res.send(JSON.stringify(nNumber1));
});

app.get('/generate/array', (req, res) => {
    const array = [];
    array.length = getRand();
    for(let i = 0; i < array.length; i++) {
        const nNumber2 = getRand();
        array[i] = nNumber2;
    }

    setTimeout(() => {
        res.send(JSON.stringify(array));
    }, 2000);
});

app.get('/current/weather/:city', (req, res) => {
    fetch(`${openWeatherPath}/weather?appid=${API_KEY}&units=metric&q=${req.params.city}`)
        .then(resp => resp.json())
        .then(data => {
            res.json(data);
        });
})

app.get('/forecast/weather/:city', (req, res) => {
    fetch(`${openWeatherPath}/forecast?appid=${API_KEY}&units=metric&q=${req.params.city}`)
        .then(resp => resp.json())
        .then(data => {
            res.json(data);
        });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});