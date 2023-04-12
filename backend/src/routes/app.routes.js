import { Router } from "express";
import { methods as userAppController} from "../controllers/app.controller";
const myrouter= Router();


myrouter.get("/", userAppController.GetUsers);
myrouter.post("/", userAppController.AddUser);
myrouter.get("/:id", userAppController.GetUser);
myrouter.delete("/:id", userAppController.DeleteUser);
myrouter.put("/:id", userAppController.UpdateUser);

export default myrouter;