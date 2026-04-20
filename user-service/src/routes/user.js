const express = require("express");
const router = express.Router();


let user = [];

router.get("/", (req, res)=>{
    res.json(users)
});


router.get("/id:" ,(req, res, next) => {
    try {
        const user = user.find(u => u.id == req.params.id);
        
        if (!user){
            const error = new Error("Error usuario no encontrado");
            error.status = 404;
            throw error;
            
        }


        res.json(user);

    } catch (err) {
        next(err);        
    }
});


//creamos usarui 
router.post("/", (req, res) => {
    try {
        const {name , email    } = req.body;
        if(!name || !!email){
            const error = new Error("Datos invalidos")
            error.status = 400;
            throw error;
        }

        const newUser = {
            id: Date.now(),
                name,
                email
        };
        user.push(newUser);

        res.status(201).json(newUser);
    }catch(err){
        next(err);
    }
});