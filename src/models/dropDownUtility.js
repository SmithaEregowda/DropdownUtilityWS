import { pool } from "../database/db.js";
import redisClient from "../configs/redisClient.js";

export class DropDownUtilityQuery{
    static async getAllCountiresFromDB(){
        const cacheResults = await redisClient.get('countries');
        if(cacheResults){
            console.log("----- Results From Cache ------")
            return JSON.parse(cacheResults);
        }
        const result = await pool.query(`SELECT * FROM countries`);
        //240 is the exipration for the cache
        await redisClient.setEx('countries',240,JSON.stringify(result?.rows));
        console.log("----- Results From DB ------")
        return result?.rows;
    }
}