import express from "express";

import { coletarCadastros, criarNovoCadastro, atualizarCadastro, deletarCadastro } from "../controller/user.js";

const router = express.Router();

router.get("/", coletarCadastros);
router.post("/", criarNovoCadastro);
router.put("/:id", atualizarCadastro);
router.delete("/:id", deletarCadastro);


export default router;