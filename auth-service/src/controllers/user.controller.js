const { use } = require('react');
const userService = require('../services/user.service');

const perfil = (req, res) =>{
    const data = userService.obtenerPerfil(req.perfil);
    res.json(data);
};

module.exports = { perfil}