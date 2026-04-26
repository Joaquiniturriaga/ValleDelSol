require('dotenv').config();
const express = require('express');

const reportRoutes = require('./middleware/validateToken.middleware');
const { connectRabbit } = require('./config/rabbit');

const app = express();

//rutas

app.use('/api', reportRoutes);

app.get('/', (req,res)=>{
    res,send('Report service running');
});

const startServer = async( )=>{
    await connectRabbit();

    app.listen(3002, ()=>{
        console.log('Report service in port 3002');
    });
};

startServer();