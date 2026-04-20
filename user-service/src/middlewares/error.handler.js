module.exports = (err, req, res, next) => {
    console.error(`[ERROR] ${new Date().toISOString()}`);
    console.error(`Route: ${req.method} ${req.originalUrl}`);
    console.error(err.stack);

    res.status(err.status || 500).json({
        err: err.message || "Error interno del servidor hermano"
    });
};
