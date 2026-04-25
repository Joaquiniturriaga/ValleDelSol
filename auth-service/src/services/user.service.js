const obtenerPerfil = (usuario) =>{
    return {
        id: usuario.id,
        email: usuario.email,
        rol:usuario.rol
    };
};

module.exports = { obtenerPerfil };