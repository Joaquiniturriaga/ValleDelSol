const jwt = require('jsonwebtoken');

const validate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Beaber')){
        return res.status(401).json({
            error: 'Token requerida'
        });
    }

    const token = authHeader.split('')[1];


    try {
        const dedoced = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    }catch(error){
        return res.status(401).json({
            error : 'Invalid token or expired token'
        });
    }
};

module.exports = { validate};