import { db } from "../db.js";

// Fluxo de Categorias

export const todasAsCategoriasDeCadastro = (_, res) => {
    const q =  "SELECT * FROM categorias";

    db.query(q, (err, data) => {
        if(err) return res.json();
        return res.status(200).json(data);
    })
}

export const criarNovaCategoria = (req, res) => {
    const q = "INSERT INTO categorias(`categoria`,`criador`) VALUES(?)";

    const values = [
        req.body.categoria,
        req.body.criador,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Categoria criada com sucesso!");
    })
}

export const atualizarDescricaoDaCategoria = (req, res) => {
    const q = "UPDATE `db_control_pag`.`categorias` SET `categoria`=?, `criador`=? WHERE (`idcategorias`=?)";

    const values = [
        req.body.categoria,
        req.body.criador,
    ];

    db.query(q, [...values, req.params.idcategorias], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Categoria Atualizada!");
    })
}

export const deletarCategoria = (req, res) => {
    const q = "DELETE FROM `db_control_pag`.`categorias` WHERE (`idcategorias`=?)";

    db.query(q, [req.params.idcategorias], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Categoria deletada com sucesso!");
    })
}