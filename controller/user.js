import { db } from "../db.js";

//Modulo de funções para cadastros de pessoas e fornecedores
export const coletarCadastros = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

export const criarNovoCadastro = (req, res) => {
    const q = "INSERT INTO users(`nome`,`email`,`fone`,`categoria`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.categoria,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro criado com sucesso!");
    })
}

export const atualizarCadastro = (req, res) => {
    const q = "UPDATE `heroku_e02dbb19d377403`.`users` SET `nome`=?, `email`=?, `fone`=?, `categoria`=? WHERE (`id`= ?) ";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.categoria,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro Atualizado!");
    })
}

export const deletarCadastro = (req, res) => {
    const q = "DELETE FROM `heroku_e02dbb19d377403`.`users` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro deletado com sucesso!");
    })
}


//Modulo de funções para registro de pagamentos
export const coletarPagamentos = (_, res) => {
    const q = "SELECT * FROM fluxo_caixa";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

export const criarPagamentos = (req, res) => {
    const q = "INSERT INTO fluxo_caixa(`nome`,`tipo_pagamento`,`valor_pagamento`,`obs`,`data_pagamento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.tipo_pagamento,
        req.body.valor_pagamento,
        req.body.obs,
        req.body.data_pagamento,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pagamento registrado com sucesso!");
    })
}

export const atualizarPagamentos = (req, res) => {
    const q = "UPDATE `heroku_e02dbb19d377403`.`fluxo_caixa` SET `nome`=?, `tipo_pagamento`=?, `valor_pagamento`=?,`obs`=?,`data_pagamento`=? WHERE (`id`= ?) ";

    const values = [
        req.body.nome,
        req.body.tipo_pagamento,
        req.body.valor_pagamento,
        req.body.obs,
        req.body.data_pagamento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pagamento Atualizado!");
    })
}

export const deletarPagamentos = (req, res) => {
    const q = "DELETE FROM `heroku_e02dbb19d377403`.`fluxo_caixa` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pagamentto deletado com sucesso!");
    })
}