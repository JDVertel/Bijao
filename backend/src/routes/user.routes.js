import { Router } from "express";
import { user_methods } from "../controllers/user.controller";

const myuserrouter= Router();


myuserrouter.get("/user", user_methods.GetUsers);
myuserrouter.post("/user", user_methods.AddUser);
myuserrouter.get("/user:id", user_methods.GetUser);
myuserrouter.delete("user/:id", user_methods.DeleteUser);
myuserrouter.put("/user:id", user_methods.UpdateUser);

export default myuserrouter;