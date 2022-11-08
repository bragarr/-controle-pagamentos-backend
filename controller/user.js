import { db } from "../db.js";

export const coletarCadastros = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

export const criarNovoCadastro = (req, res) => {
    const q = "INSERT INTO users(`nome`,`email`,`fone`,`valor`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.valor,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro criado com sucesso!");
    })
}

export const atualizarCadastro = (req, res) => {
    const q = "UPDATE `heroku_e02dbb19d377403`.`users` SET `nome`=?, `email`=?, `fone`=?, `valor`=? WHERE (`id`= ?) ";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.valor,
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