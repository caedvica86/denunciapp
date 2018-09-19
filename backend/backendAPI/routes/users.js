var express = require('express');
var router = express.Router();
var usu = require('../models/Usuario')
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.json({users: [{name: 'Timmy'}]});
  usu.getUsuario((error,data)=>{
    res.status(200).json;
  })
});

module.exports = router;
