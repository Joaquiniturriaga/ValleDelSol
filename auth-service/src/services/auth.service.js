const jwt = require('jsonwebtoken');

const usuarioPorMientras = []


const register = ( email, password) => {
    const nuevoUsuario = {
        id : usuarioPorMientras.length +1,
        email,
        password,
        rol : 'user'
    };


    usuarioPorMientras.push(nuevoUsuario);
    return nuevoUsuario;
};

const login = (email, password) => {
    const usuario = usuarioPorMientras.find(u => u.email === email);

     if  (!usuario || usuario.password !== password) {
        throw new('Credenciales invalidas hermano');
    }

    const token = jwt.sign(
        {id : usuario.id, email : usuario.email, rol: usuario.rol},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    );
    return token;
}

module.exports =  { register , login};
