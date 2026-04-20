require("dotenv").config();

const express = require("express");
const app = express();

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error.handler");

const userRoutes = require("./routes/user");


app.use(logger);
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/health", (req, res)=>{
    res.json({status: "ok"});
});

app.use(errorHandler);


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Puerto corrinedo en: ${PORT}` );
});
