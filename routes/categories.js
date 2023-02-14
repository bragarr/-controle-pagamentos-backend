import express from "express";
import { getAllCategories, addNewCategory, updateCategory, deleteCategory } from "../controller/category.js";

export const routerCategories = express.Router();

// Rotas para criação de categorias
routerCategories.get("/", getAllCategories);
routerCategories.post("/", addNewCategory);
routerCategories.put("/:idcategories", updateCategory);
routerCategories.delete("/:idcategories", deleteCategory);