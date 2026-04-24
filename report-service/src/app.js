const express = require('express');
const {connectRabbit} = require('./config/rabbit');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(express.json);

app.use('/api/reports', reportRoutes);


connectRabbit();

app.listen(3000, () =>{
    console.log('report service runnig')
    
} );