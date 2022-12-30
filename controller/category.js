import { db } from "../db.js";

// Fluxo de Categorias

let connection;

function handleDisconnect() {
    connection = db;
    
    connection.connect(function(err) {
        if(err) {
            console.log("error when connecting to db->", err);
            setTimeout(handleDisconnect, 2000);
        } else {
            console.log("conection is successfull!");
        }
    });

    connection.on("error", function(err) {
        console.log("db error", err);
        if(err.code==="PROTOCOL_CONNECTION_LOST") {
            handleDisconnect();
        } else {
            throw err;
        };
    });
}

export const todasAsCategoriasDeCadastro = (_, res) => {
    const q =  "SELECT * FROM categorias";

    db.query(q, (err, data) => {
        if(err) {
            handleDisconnect();
            return res.json();
        }
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