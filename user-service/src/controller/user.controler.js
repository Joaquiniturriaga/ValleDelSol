const userService = require('../service/user.service');

const getProfile = (req, res) => {
    try{
        const user = userService.getProfile(req.user);
        res.json(res);
    }catch(error){
        res.status(404).json({error:error.message})
    }
},

const updateUser=(req, res )=>{
    try {
        const updateUser = user.updateUser(req.user.id, req.body);
        res.json(updateUser);

    }catch(error){

        res.status(400).json({error:error.message});
    }
};

const getAllUsers = (req, res)=>{
    const users = userService.getAllUsers();
        res.json();
    
};


module.exports={ getProfile, updateUser,getAllUsers};