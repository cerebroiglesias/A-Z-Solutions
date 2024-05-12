const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');
const articulosRouter = require('./routes/articulosRouter');
const reportesRouter = require('./routes/reportesRouter');
const indexRouter = require('./routes/indexRouter');
const log = require('./middlewares/log');
const { sessionConfig } = require('./middlewares/sessions');

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig);
app.use(cookieParser());
app.use(log);

app.use('/articulos', articulosRouter);
app.use('/reportes', reportesRouter);
app.use('/', indexRouter);


module.exports = app;