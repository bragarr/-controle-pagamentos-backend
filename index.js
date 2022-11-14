import express from "express";

import userRoutes from "./routes/users.js"

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use("/", userRoutes)

app.use("/pagamentos", userRoutes)

app.listen(port);