const express = require('express');
const {registro, login} = require('../controllers/auth.controller');
const { validarEmail} = require('../middlewares');

const router = express.Router();

router.post('/registro', validarEmail, registro);
router.post('/login', validarEmail, login);

module.exports = router;