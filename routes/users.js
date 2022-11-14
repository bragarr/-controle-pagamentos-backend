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
router.get("/pagamentos", coletarPagamentos);
router.post("/pagamentos", criarPagamentos);
router.put("/pagamentos:id", atualizarPagamentos);
router.delete("/pagamentos:id", deletarPagamentos);


export default router;