import { db } from "../db.js";

// PayControl

export const getAllPayment = (_, res) => {
    const q = "SELECT * FROM pay_control";

    db.query(q, (err, data) => {
        if(err) return res.json()
        return res.status(200).json(data);
    });
};

export const addNewPayment = (req, res) => {
    const q = "INSERT INTO pay_control(`name`,`type`, `category`,`value`,`obs`,`date`,`user`) VALUES(?)";

    const values = [
        req.body.name,
        req.body.type,
        req.body.category,
        req.body.value,
        req.body.obs,
        req.body.date,
        req.body.user
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Payment done!");
    })
}

export const updatePayment = (req, res) => {
    const q = "UPDATE `db_control_pag`.`pay_control` SET `name`=?, `type`=?, `category`=?,`value`=?,`obs`=?,`date`=? WHERE (`idpay_control`=?)";

    const values = [
        req.body.name,
        req.body.type,
        req.body.category,
        req.body.value,
        req.body.obs,
        req.body.date
    ];

    db.query(q, [...values, req.params.idpay_control], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Data updated!");
    })
}

export const deletePayment = (req, res) => {
    const q = "DELETE FROM `db_control_pag`.`pay_control` WHERE (`idpay_control`=?)";

    db.query(q, [req.params.idpay_control], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Payment deleted!");
    })
}