const express = require('express'); // load express
const cors = require('cors'); // CORS = cross-origin resources sharing -> middleware security allow front send requests
const helmet = require('helmet'); // middleware security against 11 attacks
const app = express(); // create app loading express
const authController = require('./controllers/authController');
require('express-async-errors'); // async errors

// configs middlewares
app.use(cors());

app.use(helmet());

app.use(express.json()); // middleware body parsing

app.post('/login', authController.doLogin);

app.post('/logout', authController.doLogout);

app.use('/', (req, res, next) => { // always last root
    res.send('hello world!');
})

app.use(require('./middlewares/errorMiddleware')); // require error

module.exports = app; // exports app 