import express from "express";
import cors from "cors";

import { routerUsers } from "./routes/users.js";
import { routerCategories } from "./routes/categories.js";
import { routerPayments } from "./routes/payments.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use("/", routerUsers);
app.use("/pagamentos", routerPayments);
app.use("/categorias", routerCategories);

app.listen(port);