import { db } from "../db.js";

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

// Abaixo estão os módulos de funções para alterações e 
// atualizações das tabalas para armazenamento de dados de contribuintes/fornecedores e pagamentos registrados

//Modulo de funções para cadastros de pessoas e fornecedores
export const coletarCadastros = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) {
            handleDisconnect();
            return res.json()
        };

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
    const q = "UPDATE `db_control_pag`.`users` SET `nome`=?, `email`=?, `fone`=?, `categoria`=? WHERE (`id`=?)";

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
    const q = "DELETE FROM `db_control_pag`.`users` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastro deletado com sucesso!");
    })
}