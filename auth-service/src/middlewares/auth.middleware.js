const jwt = require('jsonwebtoken');

const protegerRuta = (req, res , rext) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({error : 'Token requerido'});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();

    }catch(error){
        return res.status(401).json({error:'token inbalido o expirado'});
    }
};

module.exports = { protegerRuta };