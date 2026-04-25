const express = require('express');
const { perfil } = require('../controllers/user.controller');
const { protegerRuta, autorizarRol } = require('../middlewares');

const router = express.Router();

router.get('/perfil', protegerRuta, autorizarRol);


//solo admin ksksk

router.get('/admin', protegerRuta, autorizarRol('admin'), (req, res)=>{
    res.json({message:'zona admin'});
});

module.exports = router;