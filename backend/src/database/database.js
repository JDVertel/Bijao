import mysql from "promise-mysql";
import { config } from "./../config";

const connection = mysql.createConnection({
    host:"localhost",
    database:"api_bijao",
    user:"root",
    password: ""

/*  host:"myadmin.bdmsystems.com.co",
    database:"api_bijao",
    user:"apisena",
    password: "tpsocorro2023" */


});

const getConnection=()=>{
    return connection;
}

module.exports={
    getConnection
};

