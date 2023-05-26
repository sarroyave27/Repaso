import { get } from "express/lib/response";
import { pool } from "../config/database/db"

export const findAllUser = async (req, res)=>{
    try {
        const [rows] = await pool.query("CALL spFindAllUser();");
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un error");
    }
}
export const findUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const [rows] = await pool.query(`CALL spFindUser(${id});`);
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un error al encontrar al usuario");
    } 
}
export const insertUser = async (req, res)=>{
    const name = req.body.name;
    try {
        const result = await pool.query(`CALL spInsertUser('${name}');`);
        res.json(result);
        
    } catch (error) {
        console.error("ha ocurrido un error al insertar")
    }

}
export const deleteUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL spDeleteUser(${id})`);
        if(result[0].affectedRows == 1)
            res.json(result);
        else
            res.json({"rs": "No se elimino"});
            
    } catch (error) {
        console.error(error);
    }
}
export const updateUser = async (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    try {
        const result = await pool.query(`CALL spUpdateUser(${id}, '${name}');`)
        if(result[0].affectedRows != 0)
            res.json(result);
         else
            res.json({"rs": "NO ACTUALIZO"});

    } catch (error) {
        console.error(error);
    }
}