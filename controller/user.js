import { db } from "../db.js";

export const getAllUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json()
        return res.status(200).json(data);
    });
};

export const addNewUser = (req, res) => {
    const q = "INSERT INTO users(`name`,`email`,`phone`,`category`,`user`) VALUES(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.category,
        req.body.user
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro criado com sucesso!");
    })
}

export const updateNewUser = (req, res) => {
    const q = "UPDATE `db_control_pag`.`users` SET `name`=?, `email`=?, `phone`=?, `category`=? WHERE (`id`=?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.category
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Data updated!");
    })
}

export const deleteUser = (req, res) => {
    const q = "DELETE FROM `db_control_pag`.`users` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Register deleted!");
    })
}