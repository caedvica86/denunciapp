const mysql = require('mysql');
conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'cencabo2016',
    database: 'denunciaAppDB'
})
let userModel = {};


userModel.getUsuario = (callback) => {
    if(conn){
        conn.query('SELECT * FROM usuario ORDER BY Id',
        (error,rows)=> {
            if(error){
                throw error;
            }
            else{
                callback(null,rows);
            }
             
        }
    )}
};

userModel.insertUser = (userData,callback) => {  
    if(conn){
        conn.query('INSERT INTO usuario SET ?', userData,
        (error,result)=> {
            if(error){
                throw error;
            }
            else{
                callback(null,{
                    'insertId' : result.insertId
                })
            }
             
        }
    )}
};

module.exports = userModel;