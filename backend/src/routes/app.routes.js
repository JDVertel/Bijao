import { Router } from "express";
import { app_methods} from "../controllers/app.controllers";

const myapprouter= Router();


myapprouter.get("/app", app_methods.Getproductos);


/* myapprouter.post("/", app_methods.AddUser);
myapprouter.get("/:id", app_methods.GetUser);
myapprouter.delete("/:id", app_methods.DeleteUser);
myapprouter.put("/:id", app_methods.UpdateUser); */

export default myapprouter;