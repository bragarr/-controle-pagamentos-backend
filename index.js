import express from "express";
import cors from "cors";

import { routerUsers } from "./routes/users.js";
import { routerCategories } from "./routes/categories.js";
import { routerPayments } from "./routes/payments.js";
import { routerCallingCodes } from "./routes/callingCodes.js"

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/users", routerUsers);
app.use("/payments", routerPayments);
app.use("/categories", routerCategories);
app.use("/callingcodes", routerCallingCodes);

app.listen(port, () => {
    console.log("Servidor On")
});