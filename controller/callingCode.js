import { db } from "../db.js";

// Fluxo de Categorias

export const getAllCallingCodes = (_, res) => {
    const q =  "SELECT * FROM calling_code";

    db.query(q, (err, data) => {
        if(err) return res.json();
        return res.status(200).json(data);
    })
}