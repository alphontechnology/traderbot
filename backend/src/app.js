const express = require('express'); // load express
const cors = require('cors'); // CORS = cross-origin resources sharing -> middleware security allow front send requests
const helmet = require('helmet'); // middleware security against 11 attacks
const app = express(); // create app loading express


// configs middlewares
app.use(cors());
app.use(helmet());
app.use(express.json()); // middleware body parsing


// proccess middlewares
app.use('/middleware', (req, res, next) => {
    res.send('hello middleware process!!');
})

app.use('/', (req, res, next) => {
    res.send('hello world!');
})

module.exports = app; // exports app