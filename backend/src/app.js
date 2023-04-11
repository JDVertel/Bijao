import express from "express";
import morgan from "morgan";


// importar routes

import AppsRoutes from "./routes/app.routes";

const app = express();

// Configuraciones

app.set("port", 4000);

// middleware para usar morgan en medio 
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/api/aplication",AppsRoutes);


export default app;
