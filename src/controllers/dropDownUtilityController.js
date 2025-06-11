import { DropDownUtilityQuery } from "../models/dropDownUtility";
export class DropDownUtilityController{
    static async getAllCountries(req,res){
        try{
            const result = await DropDownUtilityQuery.getAllCountiresFromDB();
            console.log("results----->",result)
        }catch(err){
            console.log("errror---->",err)
        }
    }
}