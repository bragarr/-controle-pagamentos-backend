import express from "express";
import { coletarCadastros, criarNovoCadastro, atualizarCadastro, deletarCadastro } from "../controller/user.js";

export const routerUsers = express.Router();

// Rotas para requests de módulos de chamadas de HTTPS para criação de contribuintes/fornecedores
routerUsers.get("/", coletarCadastros);
routerUsers.post("/", criarNovoCadastro);
routerUsers.put("/:id", atualizarCadastro);
routerUsers.delete("/:id", deletarCadastro);