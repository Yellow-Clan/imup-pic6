const express = require('express');
const client = require('../db/db.js');
const controller =  require('../controllers/upload.js');

module.exports = function(app) {
   
   //Para subir una sola imagen
   app.post('/upload/upload-single-image',controller.upload.single('icon'),controller.uploadSingleImage);

   //Para subir varias imagenes
   app.post('/upload/upload-multiple-image', controller.upload.array('icon', 12),controller.uploadMultipleImage)
 
};

