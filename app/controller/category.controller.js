import { get } from "express/lib/response";
import { pool } from "../config/database/db"

export const findAllCategory = async (req, res)=>{
    try {
        const [rows] = await pool.query("CALL spFindAllCategory();");
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un error");
    }
}
export const findCategory = async (req, res)=>{
    const cod = req.params.cod;
    try {
        const [rows] = await pool.query(`CALL spFindCategory(${cod});`);
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un error");
    } 
}
export const insertCategory = async (req, res)=>{
    const descripcion = req.body.descripcion;
    const estado = req.body.estado;
    try {
        const result = await pool.query(`CALL spInsertCategory('${descripcion}', '${estado}');`);
        res.json(result);
        
    } catch (error) {
        console.error("ha ocurrido un error")
    }

}
export const deleteCategory = async (req, res)=>{
    const cod = req.params.cod;
    try {
        const result = await pool.query(`CALL spDeleteCategory(${cod})`);
        if(result[0].affectedRows == 1)
            res.json(result);
        else
            res.json({"rs": "No se elimino"});
            
    } catch (error) {
        console.error(error);
    }
}
export const updateCategory = async (req, res)=>{
    const cod = req.body.cod;
    const descripcion = req.body.descripcion;
    const estado = req.body.estado;
    try {
        const result = await pool.query(`CALL spUpdateUser(${cod}, '${descripcion}', '${estado}');`)
        if(result[0].affectedRows != 0)
            res.json(result);
         else
            res.json({"rs": "NO ACTUALIZO"});

    } catch (error) {
        console.error(error);
    }
}