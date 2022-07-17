const { Client } = require('pg');

const client = new Client({
    user: 'hybeeatdkhzlga',
    host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
    database: 'd871baq3aopb9d',
    password: '9d053184491d7ebe52ccdc19710896c1fd49db68eed3a4a3732ed72cf4791b33',
    port: 5432,
});

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'testimageupload',
//     password: 'admin',
//     port: 5432,
// });

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
