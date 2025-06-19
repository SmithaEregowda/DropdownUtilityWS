import { pool } from "../database/db.js";

export class DropDownUtilityQuery{
    static async getAllCountiresFromDB(){
        const result = await pool.query(`SELECT * FROM countries`);
        return result?.rows;
    }
}