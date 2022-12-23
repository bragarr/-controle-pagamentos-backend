import express from "express";
// import para cadastro de usuário
import { coletarCadastros, criarNovoCadastro, atualizarCadastro, deletarCadastro } from "../controller/user.js";

// import para registro de pagamentos
import { coletarPagamentos, criarPagamentos, atualizarPagamentos, deletarPagamentos } from "../controller/user.js";

// import para categorias

import { todasAsCategoriasDeCadastro, criarNovaCategoria, atualizarDescricaoDaCategoria, deletarCategoria } from "../controller/user.js";

const router = express.Router();

// Rotas para requests de módulos de chamadas de HTTPS para criação de contribuintes/fornecedores
router.get("/", coletarCadastros);
router.post("/", criarNovoCadastro);
router.put("/:id", atualizarCadastro);
router.delete("/:id", deletarCadastro);

// Rotas para requests de módulos de chamadas de HTTPS para criação e registro de pagamentos
router.get("/pagamentos", coletarPagamentos);
router.post("/pagamentos", criarPagamentos);
router.put("/pagamentos/:idfluxo_caixa", atualizarPagamentos);
router.delete("/pagamentos/:idfluxo_caixa", deletarPagamentos);

// Rotas para criação de categorias
router.get("/categorias", todasAsCategoriasDeCadastro);
router.post("/categorias", criarNovaCategoria);
router.put("/categorias/:idcategorias", atualizarDescricaoDaCategoria);
router.delete("/categorias/:idcategorias", deletarCategoria);


export default router;