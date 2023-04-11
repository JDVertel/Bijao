import { getConnection } from "./../database/database";

const GetUsers = async (req, res) => {
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

const AddUsers = async (req, res) => {
  try {
    const { nombre, documento, pass, id_rol, estado, email } = req.body;


/* **************inicio control de campos vacios************************ */
    if (
      nombre === undefined ||
      documento === undefined ||
      pass === undefined ||
      email === undefined
    ) {
      res.status(400).json({
        message: "Bad request. Los datos incompletos.",
      });
    }
    
/* *****************fin control de campos vacios************************* */

    const user = { nombre, documento, pass, id_rol, estado, email };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO usuarios SET ?", user);
    res.json({ message: "usuario adicionado exitosamente!" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
/* ----------------------------------------- */
const GetUser = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM  usuarios WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/* ----------------------------------------- */
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE  FROM  usuarios WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
/* ----------------------------------------- */
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, documento, pass, id_rol, estado, email } = req.body;

/* **************inicio control de campos vacios************************ */
    if (
      id===undefined ||
      nombre === undefined ||
      documento === undefined ||
      pass === undefined ||
      email === undefined
    ) {
      res.status(400).json({
        message: "Bad request. Los datos incompletos.",
      });
    }
    /* **************fin control de campos vacios************************ */

    const usuario ={ id, nombre, documento, pass, id_rol, estado, email }
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE usuarios SET ? WHERE documento = ?",
      [usuario , id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


/* ----------------------------------------- */
export const methods = {
  GetUsers,
  GetUser,
  AddUsers,
  DeleteUser,
  UpdateUser
};

/* 
const addUsers = async (req,res)=>{

    try {
        const connection= await getConnection();
     
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }

}; */
