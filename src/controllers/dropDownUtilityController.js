import { DropDownUtilityQuery } from "../models/dropDownUtility.js";
export class DropDownUtilityController{
    static async getAllCountries(req,res){
        console.log("---- getting all countries -------")
        try{
            const result = await DropDownUtilityQuery.getAllCountiresFromDB();
            res.status(200).json({
            countries: result
        })
        }catch(err){
            console.log("errror---->",err)
            res.status(500).json({
            err
        })
        }
    }
}