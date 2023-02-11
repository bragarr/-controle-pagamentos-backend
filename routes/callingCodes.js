import express from "express";
import { getAllCallingCodes } from "../controller/callingCode.js";

export const routerCallingCodes = express.Router();

// Rotas para criação de categorias
routerCallingCodes.get("/", getAllCallingCodes);