
import { getConnection } from "../database/database";

const Getproductos = async (req, res) => {
    try {
      const connection = await getConnection();
      const result = await connection.query("SELECT * FROM  usuarios");
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  


/* ----------------------------------------- */
export const app_methods = {
    Getproductos,
   
  };