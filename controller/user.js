import { db } from "../db.js";

// Abaixo estão os módulos de funções para alterações e 
// atualizações das tabalas para armazenamento de dados de contribuintes/fornecedores e pagamentos registrados

//Modulo de funções para cadastros de pessoas e fornecedores
export const coletarCadastros = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

// Criar contribuinte/forncedor na base dados
export const criarNovoCadastro = (req, res) => {
    const q = "INSERT INTO users(`nome`,`email`,`fone`,`categoria`,`usuario`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.categoria,
        req.body.usuario
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro criado com sucesso!");
    })
}

// Atualizar cadastro de contribuinte/fornecedor no banco de dados
export const atualizarCadastro = (req, res) => {
    const q = "UPDATE `sql10584702`.`users` SET `nome`=?, `email`=?, `fone`=?, `categoria`=? WHERE (`id`=?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.categoria
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro Atualizado!");
    })
}

// Deletar contribuinte/forncedor do banco de dados
export const deletarCadastro = (req, res) => {
    const q = "DELETE FROM `sql10584702`.`users` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro deletado com sucesso!");
    })
}


// Fluxo de Pagamentos

//Modulo de funções para registro de pagamentos
export const coletarPagamentos = (_, res) => {
    const q = "SELECT * FROM fluxo_caixa";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

// Inserir um novo pagamento no banco de dados
export const criarPagamentos = (req, res) => {
    const q = "INSERT INTO fluxo_caixa(`nome`,`tipo_pagamento`,`valor_pagamento`,`obs`,`data_pagamento`,`usuario`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.tipo_pagamento,
        req.body.valor_pagamento,
        req.body.obs,
        req.body.data_pagamento,
        req.body.usuario
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pagamento registrado com sucesso!");
    })
}

// Atualizar pagamentos presentes no banco de dados
export const atualizarPagamentos = (req, res) => {
    const q = "UPDATE `sql10584702`.`fluxo_caixa` SET `nome`=?, `tipo_pagamento`=?, `valor_pagamento`=?,`obs`=?,`data_pagamento`=? WHERE (`id`=?)";

    const values = [
        req.body.nome,
        req.body.tipo_pagamento,
        req.body.valor_pagamento,
        req.body.obs,
        req.body.data_pagamento
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pagamento Atualizado!");
    })
}

// Deletar pagamento do banco de dados
export const deletarPagamentos = (req, res) => {
    const q = "DELETE FROM `sql10584702`.`fluxo_caixa` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pagamento deletado com sucesso!");
    })
}

// Fluxo de Categorias

export const todasAsCategoriasDeCadastro = (_, res) => {
    const q =  "SELECT * FROM categorias";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    })
}

export const criarNovaCategoria = (req, res) => {
    const q = "INSERT INTO categorias(`categoria`, `criador`) VALUES(?)";

    const values = [
        req.body.categoria,
        req.body.criador,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Categoria criada com sucesso!");
    })
}

export const atualizarDescriçãoDaCategoria = (req, res) => {
    const q = "UPDATE `sql10584702`.`categorias` SET `categoria`=?, `criador`=? WHERE (`id`=?)";

    const values = [
        req.body.categoria,
        req.body.criador,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Categoria Atualizada!");
    })
}

export const deletarCategoria = (req, res) => {
    const q = "DELETE FROM `sql10584702`.`categorias` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Categoria deletado com sucesso!");
    })
}