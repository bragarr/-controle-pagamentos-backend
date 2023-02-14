import express from "express";
import { getAllUsers, addNewUser, updateNewUser, deleteUser } from "../controller/user.js";

export const routerUsers = express.Router();

routerUsers.get("/", getAllUsers);
routerUsers.post("/", addNewUser);
routerUsers.put("/:id", updateNewUser);
routerUsers.delete("/:id", deleteUser);