const mysql = require('mysql');
conn = mysql.createConnection({
    host: '192.168.0.100',
    port: '3306',
    user: 'root',
    password: 'cencabo2016',
    database: 'fedesoft'
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

userModel.insertUser = (userData,(callback) => {  
    if(conn){
        conn.query('INSERT INTO usuario ?', userData,
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