const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const database = require('mime-db');
const fs = require('fs');
const Country = require('./models/country');
const { response } = require('express');
let destinations = require('./final.json');
require('dotenv/config');

const app = express();

//Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then((result) => {
//         app.listen(3000);
//         console.log('Connected to database');
//     })
//     .catch((err) => console.log(err));

app.listen(3080);

app.use(morgan('dev'));

app.use(express.static(__dirname + "/nostress-frontend/dist/nostress-frontend"));

app.get('/api/destinations', (req, res) => {
    let responseJson = [{}];
    for (let i = 0; i < 7; ++ i) {
        responseJson[i] = destinations[Math.floor(Math.random() * 230)];
    }
    res.json(responseJson);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/nostress-frontend/dist/nostress-frontend/index.html");
})

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
})