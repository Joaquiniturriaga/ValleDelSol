const express = require("express");
const app = express();

// Middlewares
const logger = require("./middleware/logger");
const errorHandler = require("./middlewares/error.handler");

// Rutas
const authRoutes = require("./routes/auth");


app.use(logger);
app.use(express.json());

// Ruta principal
app.use("/api/auth", authRoutes);

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Error handler SIEMPRE al final
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});