const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                error: 'Not authenticated'
            });
        }

        if (!allowedRoles.includes(req.user.rol)) {
            return res.status(403).json({
                error: 'Acces denued'
            });
        }

        next();
    };
};

module.exports = { authorizeRoles };