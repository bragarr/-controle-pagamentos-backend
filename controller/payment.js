import { db } from "../db.js";

// Fluxo de Pagamentos

//Modulo de funções para registro de pagamentos
export const coletarPagamentos = (_, res) => {
    const q = "SELECT * FROM fluxo_caixa";

    db.query(q, (err, data) => {
        if(err) return res.json()
        return res.status(200).json(data);
    });
};

// Inserir um novo pagamento no banco de dados
export const criarPagamentos = (req, res) => {
    const q = "INSERT INTO fluxo_caixa(`nome`,`tipo_pagamento`, `categoria`,`valor_pagamento`,`obs`,`data_pagamento`,`usuario`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.tipo_pagamento,
        req.body.categoria,
        req.body.valor_pagamento,
        req.body.obs,
        req.body.data_pagamento,
        req.body.usuario
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Payment done!");
    })
}

// Atualizar pagamentos presentes no banco de dados
export const atualizarPagamentos = (req, res) => {
    const q = "UPDATE `db_control_pag`.`fluxo_caixa` SET `nome`=?, `tipo_pagamento`=?, `categoria`=?,`valor_pagamento`=?,`obs`=?,`data_pagamento`=? WHERE (`idfluxo_caixa`=?)";

    const values = [
        req.body.nome,
        req.body.tipo_pagamento,
        req.body.categoria,
        req.body.valor_pagamento,
        req.body.obs,
        req.body.data_pagamento
    ];

    db.query(q, [...values, req.params.idfluxo_caixa], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Data updated!");
    })
}

// Deletar pagamento do banco de dados
export const deletarPagamentos = (req, res) => {
    const q = "DELETE FROM `db_control_pag`.`fluxo_caixa` WHERE (`idfluxo_caixa`=?)";

    db.query(q, [req.params.idfluxo_caixa], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Payment deleted!");
    })
}