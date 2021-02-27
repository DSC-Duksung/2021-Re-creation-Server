const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const db = require('./models');
const homeRouter = require('./routes/home');
const uploadRouter = require('./routes/upload');
const searchRouter = require('./routes/search');
const mypageRouter = require('./routes/mypage');

const app = express();
db.sequelize.sync();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', homeRouter);
app.use('/upload', uploadRouter);
app.use('/search', searchRouter);
app.use('/mypage', mypageRouter);

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});