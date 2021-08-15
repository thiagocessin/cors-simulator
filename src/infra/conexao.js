const mysql = require("mysql2");

const config ={

    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"fiap_fase4"

}

const conexao = mysql.createConnection(config);

module.exports = conexao;