import { DropDownUtilityQuery } from "../models/dropDownUtility.js";
import fs from 'fs';
import path from "path";
import {fileURLToPath} from 'url';
export class DropDownUtilityController {
    static async getAllCountries(req, res, next) {
        try {
            const result = await DropDownUtilityQuery.getAllCountiresFromDB();
            res.status(200).json({
                countries: result
            })
        } catch (err) {
            next(err);
        }
    }

    static async getAllStates(req, res, next) {
        try {
            const result = await DropDownUtilityQuery.getAllStatesFromDB();
            res.status(200).json({
                countries: result
            })
        } catch (err) {
            next(err);
        }
    }

    static async getAllCites(req, res, next) {
        try {
            const result = await DropDownUtilityQuery.getAllCitesFromDB();
            res.status(200).json({
                countries: result
            })
        } catch (err) {
            next(err);
        }
    }

    static async getAllStatesFromCountryId(req, res, next) {
        try {
            const { countryId } = req.params;
            const result = await DropDownUtilityQuery.getAllStatesFromCountryId(countryId);
            res.status(200).json({
                countries: result
            })
        } catch (err) {
            next(err);
        }
    }

     static async getAllCitesFromStateId(req, res, next) {
        try {
            const { stateId } = req.params;
            const result = await DropDownUtilityQuery.getAllCitesFromStateId(stateId);
            res.status(200).json({
                cites: result
            })
        } catch (err) {
            next(err);
        }
    }

    static async getAllLogs(req, res, next) {
        try {
           const __filename = fileURLToPath(import.meta.url);
           const __dirname = path.dirname(__filename);
           const logFilePath = path.join(__dirname, '..', 'logs', 'dev.log');
           console.log("===== getting Logs =======");

           fs.readFile(logFilePath,(err,data)=>{
            if(err){
                next(err);
            };
            res.type('text/plain').send(data);
           });
        } catch (err) {
            next(err);
        }
    }
}