//Importamos middleware de Express 
module.exports = (req, res, next) => {
    //Guardamos la fecha exacta en que llega la request
    const start = Date.now();

    //Con res on escuchamos al evento
    res.on("finish", () => {
        const duration = Date.now()- start;
        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration} ms `

        );
    });

    next();
};