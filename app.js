const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('hbs');
const articulosRouter = require('./routes/articulosRouter');
const reportesRouter = require('./routes/reportesRouter');
const indexRouter = require('./routes/indexRouter');
const log = require('./middlewares/log');
const { sessionConfig } = require('./middlewares/sessions');

dotenv.config();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig);
app.use(cookieParser());
app.use(log);

app.use('/articulos', articulosRouter);
app.use('/reportes', reportesRouter);
app.use('/', indexRouter);


module.exports = app;