const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const db = require('./models');
const homeRouter = require('./routes/home');

db.sequelize.sync();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRouter);

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});