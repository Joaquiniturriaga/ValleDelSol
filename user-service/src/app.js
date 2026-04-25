require('dotenv').config();
const express = require('express')

const useRoutes= require('./routes/user.routes');

const app = express();

app.use(express.json());

app.use('/api/users', useRoutes);
app.get('api/users', useRoutes);

app.get('/', (req, res)=>{
    req.send('User service running');
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`User service rruning on port ${PORT}`);
});