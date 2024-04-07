const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const articulosRouter = require('./routes/articulosRouter');
const reportesRouter = require('./routes/reportesRouter');
const log = require('./middlewares/log');

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(log);

app.use('/articulos', articulosRouter);
app.use('/reportes', reportesRouter);


module.exports = app;