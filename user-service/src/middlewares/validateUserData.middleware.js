const validateUserData = (req, res, next) => {
    const { email, name } = req.body;

    if (!email || !name) {
        return res.status(400).json({
            error: 'Email and name are required'
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'invalid email format'
        });
    }

    next();
};

module.exports = { validateUserData };