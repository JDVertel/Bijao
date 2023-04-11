import mysql from "promise-mysql";
import { config } from "./../config";

const connection = mysql.createConnection({
 /*    host:"localhost",
    database:"apirest",
    user:"root",
    password: "mysql" */
    host:"myadmin.bdmsystems.com.co",
    database:"api_bijao",
    user:"apisena",
    password: "tpsocorro2023"
});

const getConnection=()=>{
    return connection;
}

module.exports={
    getConnection
};

/* 

    host:"myadmin.bdmsystems.com.co",
    database:"api_bijao",
    user:"apisena",
    password: "tpsocorro2023"

*/