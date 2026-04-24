const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host : 'postgres', // nombre dontenedor
    database : 'report_db',
    password : 'postgres',
    port: 5432
});

module.exports = pool;