import express from "express";
import { getAllPayment, addNewPayment, updatePayment, deletePayment } from "../controller/payment.js";

export const routerPayments = express.Router();

routerPayments.get("/", getAllPayment);
routerPayments.post("/", addNewPayment);
routerPayments.put("/:idpay_control", updatePayment);
routerPayments.delete("/:idpay_control", deletePayment);