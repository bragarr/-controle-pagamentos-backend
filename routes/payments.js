import express from "express";
import { getAllPayment, addNewPayment, updatePayment, deletePayment } from "../controller/payment.js";

export const routerPayments = express.Router();

routerPayments.get("/", getAllPayment);
routerPayments.post("/", addNewPayment);
routerPayments.put("/:idfluxo_caixa", updatePayment);
routerPayments.delete("/:idfluxo_caixa", deletePayment);