const express = require("express");
const router = express.Router();

// Simulación de base de datos
const users = [];

// Registro
router.post("/register", (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error("Ingrese sus datos");
            error.status = 400;
            throw error;
        }

        const user = {
            id: Date.now(),
            email,
            password
        };

        users.push(user);

        res.status(201).json({
            message: "Usuario registrado",
            user
        });

    } catch (err) {
        next(err);
    }
});

// Login
router.post("/login", (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = users.find(u => u.email === email);

        if (!user || user.password !== password) {
            const error = new Error("Credenciales inválidas");
            error.status = 401;
            throw error;
        }

        res.json({
            message: "Login exitoso",
            user
        });

    } catch (err) {
        next(err);
    }
});

module.exports = router;