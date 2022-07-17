var multer  = require('multer');
const path = require('path');
const client = require('../db/db.js');


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
   
   cb(null, `image-${Date.now()}` + path.extname(file.originalname))
      //path.extname obtener la extensión del archivo cargado
  }
});

const multerFilter = (req, file, cb) => {
   
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
             // upload solo formatos png y jpg 
           return cb(new Error('Sube una imagen'))
         }
       cb(null, true)
    
};

exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});


exports.uploadSingleImage=async(req,res)=>{
    
 const allquery =await client.query(`INSERT INTO users(name, icon) VALUES ('${req.body.name}', '${req.file.filename}')`);
    
 res.status(200).json({'statusCode':200, 'status':true, message: 'Imagen añadida','data':[]});
    
}


exports.uploadMultipleImage=async(req,res)=>{
      
   for(var i=0;i<req.files.length;i++){
     const allquery =await client.query(`INSERT INTO users(name, icon) VALUES ('${req.body.name}','${req.files[i].filename}')`);
      }
  res.status(200).json({'statusCode':200, 'status':true,
 message: 'Todas las imágenes añadidas','data':[]});
}