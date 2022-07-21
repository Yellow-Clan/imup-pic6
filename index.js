const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const router = express.Router();
const { Client } = require('pg');
var multer  = require('multer');

const port = process.env.PORT || 3000;



// Analizar solicitudes de tipo de contenido - application/json
app.use(bodyParser.json());

// Analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images',express.static('images'));

app.get('/', (req, res) => { 
    res.send("Heyy!!"); 
});

//cargar las rutas
require('./routes/image_routes')(app);
// Simplemente significa que require('./app/routes.js') devuelve una función. Luego puede llamar a esta función con otro conjunto de paréntesis.
// yyy es lo mismo que:

// var func = require('./app/routes.js');
// func(app);

app.listen(port, () => {
    console.log('Server port ' + port);
})

