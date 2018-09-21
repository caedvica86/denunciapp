var express = require('express');
var router = express.Router();
var usu = require('../models/Usuario')
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.json({users: [{name: 'Timmy'}]});
  usu.getUsuario((error,data)=>{
    res.status(200).json(data);
  })
});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  const userData = {
    Id : null,
    Nombre: req.body.Nombre,
    Clave : req.body.Clave
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
