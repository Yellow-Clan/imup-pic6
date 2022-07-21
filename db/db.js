const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testimageupload',
    password: 'admin',
    port: 5432,
});

client.connect()
    .then(console.log("Conectado a la base de Datos!"))
    .catch((err)=>{console.log("Algo salió mal! - ",err.message)});

module.exports = client;


// PARA CREAR TABLA EN PGql DB

// CREATE TABLE users(
// id SERIAL NOT NULL PRIMARY KEY ,
// name VARCHAR(50),
// icon VARCHAR NOT NULL
// );
