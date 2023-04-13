import mysql from "promise-mysql";
import { DB_BD, DB_HOST, DB_USER, DB_PASSW } from "../config";

/*  import { createPool } from "mysql2/promise"  */

const connection = mysql.createConnection({
  host: DB_HOST,
  database: DB_BD,
  user: DB_USER,
  password: DB_PASSW,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
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
