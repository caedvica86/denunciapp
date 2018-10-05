var express = require('express');
var router = express.Router();
var usu = require('../models/Usuario')

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested With, Content-Type, Accept");
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.json({users: [{name: 'Timmy'}]});
  usu.getUsuario((error,data)=>{
    res.status(200).json(data);
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  const userData = {
    id : req.body.id,
    nombre: req.body.nombre,
    clave:req.body.clave
    /*numeroDocumento: req.body.numeroDocumento,
    email: req.body.email,
    contrasena: req.body.contrasena,
    Rol_idRol: req.body.rol*/

  };  

  
  usu.insertUser(userData,(error,data)=>{
    if(data&& data.insertId){
      res.json({
        sucess : true,
        msg : "Usuario Creado",
        data : data
    })
  }
  else{
    res.json({
        sucess: false,
        msg : "Error en la creacion del usuario",
        data: error
    })
  }

})
});

module.exports = router;
