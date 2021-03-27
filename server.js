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

app.use(express.static.apply(process.cwd() + "/web-no-stress/dist"));

app.get('/api/destinations', (req, res) => {
    res.json(destinations);
})

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/web-no-stress/dist/index.html");
})