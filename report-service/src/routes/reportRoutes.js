const express = require('express');
const {
    createReport,
    getReports
}=require('../middleware/validateToken.middleware');

const { validateToken } = require('../middleware/validateToken.middleware');

const router = express.Router();

//crear reporte incendio;

router.post('/', validateToken, createReport);

router.get('/', validateToken,createReport);

module.exports = router;
