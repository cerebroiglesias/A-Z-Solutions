const express = require('express');
const getReport = require('../controllers/reportesController');

const router = express.Router();

router.get('/:id', getReport);
module.exports = router;