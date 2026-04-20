const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const errorHandler = require("./middlewares/error.handler");

const routes = require("./routes/user");


app.use(logger);
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/health", (req, res)=>{
    app.json({status: "ok"});
});


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Puerto corrinedo en: ${PORT}` );
});