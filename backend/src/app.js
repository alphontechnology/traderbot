const express = require('express'); // load express
const cors = require('cors'); // CORS = cross-origin resources sharing -> middleware security allow front send requests
const helmet = require('helmet'); // middleware security against 11 attacks
const app = express(); // create app loading express
require('express-async-errors'); // async errors

// configs middlewares
app.use(cors());

app.use(helmet());

app.use(express.json()); // middleware body parsing

// login
app.post('/login', (req, res, next) => { 
    const email = req.body.email;
    const password = req.body.password;

    if(email === 'contato@email.com' && password === '111')
    res.sendStatus(200); // auth ok
    else res.sendStatus(401); // denied access
})

// logout
app.post('/logout', (req, res, next) => {
    req.sendStatus(200);
})

app.use('/', (req, res, next) => { // always last root
    res.send('hello world!');
})

app.use(require('./middlewares/errorMiddleware')); // require error

module.exports = app; // exports app 