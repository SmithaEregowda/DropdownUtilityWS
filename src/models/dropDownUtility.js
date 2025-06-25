import db from '../database/db.js'
import redisClient from "../configs/redisClient.js";
import logger from '../configs/logger.js';

export class DropDownUtilityQuery{
    static async getAllCountiresFromDB(){
        console.log("----getting data from db-----")
        const cacheResults = await redisClient.get('countries');
        if(cacheResults){
            console.log("----- Results From Cache ------")
            return JSON.parse(cacheResults);
        }
        const results = await db.any(`SELECT * FROM countries`);
        //240 is the exipration for the cache
        await redisClient.setEx('countries',240,JSON.stringify(results));
        console.log("----- Results From DB ------")
        return results;
    }

    static async getAllStatesFromDB(){
        const cacheResults = await redisClient.get('states');
        if(cacheResults){
            console.log("----- Results From Cache ------")
            return JSON.parse(cacheResults);
        }
        const results = await db.any(`SELECT * FROM states`);
        //240 is the exipration for the cache
        await redisClient.setEx('states',240,JSON.stringify(results));
        console.log("----- Results From DB ------")
        return results;
    }

    static async getAllCitesFromDB(){
        const cacheResults = await redisClient.get('cites');
        if(cacheResults){
            console.log("----- Results From Cache ------")
            return JSON.parse(cacheResults);
        }
        const results = await db.any(`SELECT * FROM cites`);
        //240 is the exipration for the cache
        await redisClient.setEx('cites',240,JSON.stringify(results));
        console.log("----- Results From DB ------")
        return results;
    }

     static async getAllStatesFromCountryId(countryId){
        console.log("---- fetching states from Id ---------");
        const rediskey =`states:${countryId}`;
        const cacheResults = await redisClient.get(rediskey);
        if(cacheResults){
            console.log("----- Results From Cache ------",rediskey)
            return JSON.parse(cacheResults);
        }
        const results = await db.any(`SELECT * FROM states WHERE countryId = $1;`,[countryId]);
        //240 is the exipration for the cache
        await redisClient.setEx(rediskey,240,JSON.stringify(results));
        console.log("----- Results From DB ------")
        return results;
    }

     static async getAllCitesFromStateId(stateId){
        logger.info("---- fetching states from Id ---------");
        const rediskey =`cites:${stateId}`;
        const cacheResults = await redisClient.get(rediskey);
        if(cacheResults){
            logger.info("----- Results From Cache ------",rediskey)
            return JSON.parse(cacheResults);
        }
        const results = await db.any(`SELECT * FROM cites WHERE StateId = $1;`,[stateId]);
        //240 is the exipration for the cache
        await redisClient.setEx(rediskey,240,JSON.stringify(results));
        logger.info("----- Results From DB ------")
        return results;
    }

}