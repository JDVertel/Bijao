import { Router } from "express";
import { methods as userAppController} from "../controllers/app.controller";
const myrouter= Router();


myrouter.get("/", userAppController.getUsers);


export default myrouter;