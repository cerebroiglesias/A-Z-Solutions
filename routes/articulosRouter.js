const express = require('express');
const articulosController = require('../controllers/articulosControllerDB');

const router = express.Router();

router.get('/', articulosController.home)
router.get('/:id', articulosController.findOne)
router.post('/', articulosController.save);
router.put('/:id', articulosController.update);
router.delete('/:id', articulosController.erase);

module.exports = router;