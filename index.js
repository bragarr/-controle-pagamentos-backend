import express from "express";
import cors from "cors";

import { routerUsers } from "./routes/users.js";
import { routerCategories } from "./routes/categories.js";
import { routerPayments } from "./routes/payments.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/", routerUsers);
app.use("/pagamentos", routerPayments);
app.use("/categorias", routerCategories);

app.listen(port, () => {
    console.log("Servidor On")
});