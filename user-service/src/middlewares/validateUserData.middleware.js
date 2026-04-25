const validateUserData = (req, res, next) => {
    const { email, nombre } = req.body;

    if (!email || !nombre) {
        return res.status(400).json({
            error: 'Email y nombre son requeridos'
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'Email inválido'
        });
    }

    next();
};

module.exports = { validateUserData };