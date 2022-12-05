import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

let conectionActive;

function handleDisconection () {
    conectionActive = db;

    conectionActive.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconection, 2000);
        }
    });

    conectionActive.on('error', function(err) {
        console.log('db error   ', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconection();
        } else {
            throw err;
        }
    });
    conectionActive.on('error', function(err) {
        console.log('db error   ', err);
        if(err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
            handleDisconection();
        } else {
            throw err;
        }
    });
}

handleDisconection();
