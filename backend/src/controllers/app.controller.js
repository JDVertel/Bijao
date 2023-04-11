import {getConnection} from "./../database/database";

const getUsers = async (req,res)=>{
   const connection= await getConnection();
   const result= await connection.query("SELECT * FROM  usuarios");
   console.log(result);
   res.json(result);
   console.log(connection);
};
export const methods={
    getUsers
}