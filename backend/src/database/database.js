import mysql from "promise-mysql";


/*  import { createPool } from "mysql2/promise"  */

const connection = mysql.createConnection({
    host:"localhost",
    database:"api_bijao",
    user:"root",
    password: ""




}); 

const getConnection=()=>{
    return connection;
}

module.exports={
    getConnection
};


/*  host:"vmi419338.contaboserver.net",
    database:"api_bijao",
    user:"apisena",
    password: "tpsocorro2023" */




/* export const Pool = createPool({
  host: "localhost",
  database: "api_bijao",
  user: "root",
  password: "",
});
 */