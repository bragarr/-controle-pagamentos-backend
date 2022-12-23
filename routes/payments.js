import express from "express";
import { coletarPagamentos, criarPagamentos, atualizarPagamentos, deletarPagamentos } from "../controller/user.js";

export const routerPayments = express.Router();

// Rotas para requests de módulos de chamadas de HTTPS para criação e registro de pagamentos
routerPayments.get("/", coletarPagamentos);
routerPayments.post("/", criarPagamentos);
routerPayments.put("/:idfluxo_caixa", atualizarPagamentos);
routerPayments.delete("/:idfluxo_caixa", deletarPagamentos);