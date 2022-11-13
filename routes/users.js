import express from "express";
// import para cadastro de usuário
import { coletarCadastros, criarNovoCadastro, atualizarCadastro, deletarCadastro } from "../controller/user.js";

// import para registro de pagamentos
import { coletarPagamentos, criarPagamentos, atualizarPagamentos, deletarPagamentos } from "../controller/user.js";

const router = express.Router();

// Tabela de Usuários
router.get("/", coletarCadastros);
router.post("/", criarNovoCadastro);
router.put("/:id", atualizarCadastro);
router.delete("/:id", deletarCadastro);

// Tabela Creditos e debitos
router.get("/", coletarPagamentos);
router.post("/", criarPagamentos);
router.put("/:id", atualizarPagamentos);
router.delete("/:id", deletarPagamentos);


export default router;