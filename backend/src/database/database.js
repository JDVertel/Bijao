import mysql from "promise-mysql";
import { config } from "./../config";

const connection = mysql.createConnection({
    host:"localhost",
    database:"apirest",
    user:"root",
    password: "mysql"
});

const getConnection=()=>{
    return connection;
}

module.exports={
    getConnection
};