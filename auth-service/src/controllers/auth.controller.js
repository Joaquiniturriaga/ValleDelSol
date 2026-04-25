const authService = require('../services/auth.service');

const registro = (req, res) =>{
    try{
        const {email, password} = req.body;
        const usuario = authService.register(email,password);

        res.status(201).json({usuario});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};



const login = (req, res) =>{
    try{
        const {email, password} = req.body;
        const token = authService.login(email, password);
        res.json({token});
    }catch(error){
        res.status(401).json({error:error.message});
    }
};

module.exports={ register, login};