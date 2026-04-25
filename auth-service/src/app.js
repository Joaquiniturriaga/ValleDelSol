require('dotenv').config();

const express= require('express');

const authRoutes = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');

const app = express();

app.use(express.json());


//rutas 
app.use('/api/auth', authRoutes);
app.use('/api/user', userRouter);

app.use('/', (req,res)=>{
    res.send('API ARRIBA SANGRE');
});

//MIDLLEWARES

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Error de las entrañas del servidor' });
});

const PORT = process.env.PORT||3000;

app.listen(PORT, ()=>{
    console.log(`servidor corrinedo en el poderoso puerto ${PORT}` );
});