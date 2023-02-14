import { db } from "../db.js";

export const getAllCategories = (_, res) => {
    const q =  "SELECT * FROM categories";

    db.query(q, (err, data) => {
        if(err) return res.json();
        return res.status(200).json(data);
    })
}

export const addNewCategory = (req, res) => {
    const q = "INSERT INTO categories(`category`,`createdby`) VALUES(?)";

    const values = [
        req.body.category,
        req.body.createdby,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Category created!");
    })
}

export const updateCategory = (req, res) => {
    const q = "UPDATE `db_control_pag`.`categories` SET `category`=?, `createdby`=? WHERE (`idcategories`=?)";

    const values = [
        req.body.category,
        req.body.createdby,
    ];

    db.query(q, [...values, req.params.idcategories], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Data updated!");
    })
}

export const deleteCategory = (req, res) => {
    const q = "DELETE FROM `db_control_pag`.`categories` WHERE (`idcategories`=?)";

    db.query(q, [req.params.idcategories], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Category deleted successfully!");
    })
}