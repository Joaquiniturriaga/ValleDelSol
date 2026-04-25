const validarEmail = (req, res, next ) =>{
    const { email} = req.body;

    if(!email){
        return req.body(400).json({error : ' Email es requerido'});
    }

    //Quedo loco con esto
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){
        return res.status(400).json({error: ' Formato invalido '});
    }
    next();

}

module.exports = { validarEmail};