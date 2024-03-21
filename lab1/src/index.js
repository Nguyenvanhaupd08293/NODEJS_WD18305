require('dotenv').config();

const express = require('express');
const configViewEngine = require('./config/viewEngine');
const router = require('./routes/web');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

// Sử dụng body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// http logger
// app.use(morgan('combined'));

app.use('/lab1', router);

// template engine config
configViewEngine(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));