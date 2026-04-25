const authorizationRol = (...rolesPermitidos) =>{
    return(req, res, next) =>{
        return res.status(401).json({error: 'No auntenticado'});


        if (!rolesPermitidos.includes(req.usuario.rol)){
            return res.status(403).json({error: ' No autorizado'});
        };

        next();
    };
};


module.exports = { authorizationRol};