//Para ordenar imports

module.exports = {
    ...require('./auth.middleware'),
    ...require('./email.middlewares'),
    ...require('./roles.middleware')
}