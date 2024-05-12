const express = require('express');
const controller = require('../controllers/indexController');
const { isAuthenticated } = require('../middlewares/sessions');

const router = express.Router();

router.get('/', isAuthenticated, controller.home);
router.get('/olvidar', controller.olvidarCookie);
router.get('/set-cookie', controller.setCookie);
router.get('/clear-cookie', controller.clearCookie);
router.get('/get-cookies', controller.getCookies);

module.exports = router;