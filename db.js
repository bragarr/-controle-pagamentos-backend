import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// let connection;

// function handleDisconnect() {
//     connection = db;
    
//     connection.connect(function(err) {
//         if(err) {
//             console.log("error when connecting to db->", err);
//             setTimeout(handleDisconnect, 2000);
//         } else {
//             console.log("conection is successfull");
//         }
//     });

//     connection.on("error", function(err) {
//         console.log("db error", err);
//         if(err.code==="PROTOCOL_CONNECTION_LOST") {
//             handleDisconnect();
//         } else {
//             throw err;
//         };
//     });
// }

// handleDisconnect();

export default db;