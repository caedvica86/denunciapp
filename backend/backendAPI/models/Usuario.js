const mysql = require('mysql');
conn = mysql.createConnection({
    host: 'localhost',
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

module.exports = userModel;