import { get } from "express/lib/response";
import { pool } from "../config/database/db"

export const findAllProduct = async (req, res)=>{
    try {
        const [rows] = await pool.query("CALL spFindAllProduct();");
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un error");
    }
}
export const findProduct = async (req, res)=>{
    const cod = req.params.cod;
    try {
        const [rows] = await pool.query(`CALL spFindProduct(${cod});`);
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un error");
    } 
}
export const insertProduct = async (req, res)=>{
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const tamaño = req.body.tamaño;
    const cod_categoria = req.body.cod_categoria;
    const foto = req.body.foto;
    try {
        const result = await pool.query(`CALL spInsertProduct('${descripcion}', '${cantidad}', '${tamaño}', '${cod_categoria}', '${foto}');`);
        res.json(result);
        
    } catch (error) {
        console.error("ha ocurrido un error")
    }

}
export const deleteProduct = async (req, res)=>{
    const cod = req.params.cod;
    try {
        const result = await pool.query(`CALL spDeleteProduct(${cod})`);
        if(result[0].affectedRows == 1)
            res.json(result);
        else
            res.json({"rs": "No se elimino"});
            
    } catch (error) {
        console.error(error);
    }
}
export const updateProduct = async (req, res)=>{
    const cod = req.body.cod;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const tamaño = req.body.tamaño;
    const cod_categoria = req.body.cod_categoria;
    const foto = req.body.foto;
    try {
        const result = await pool.query(`CALL spUpdateProduct(${cod}, '${descripcion}', '${cantidad}', '${tamaño}', '${cod_categoria}', '${foto}');`)
        if(result[0].affectedRows != 0)
            res.json(result);
         else
            res.json({"rs": "NO ACTUALIZO"});

    } catch (error) {
        console.error(error);
    }
}