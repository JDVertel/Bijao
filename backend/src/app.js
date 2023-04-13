import express from "express";
import morgan from "morgan";


// importar routes

import userRoutes from "./routes/user.routes";
import appRoutes from "./routes/app.routes"
const app = express();

// Configuraciones

app.set("port", 4000);

// middleware para usar morgan en medio 
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/api/aplication",appRoutes);
app.use("/api/aplication",userRoutes);



export default app;
