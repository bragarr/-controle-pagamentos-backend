import express from "express";
import { todasAsCategoriasDeCadastro, criarNovaCategoria, atualizarDescricaoDaCategoria, deletarCategoria } from "../controller/user.js";

export const routerCategories = express.Router();

// Rotas para criação de categorias
routerCategories.get("/", todasAsCategoriasDeCadastro);
routerCategories.post("/", criarNovaCategoria);
routerCategories.put("/:idcategorias", atualizarDescricaoDaCategoria);
routerCategories.delete("/:idcategorias", deletarCategoria);