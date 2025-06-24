import { DropDownUtilityQuery } from "../models/dropDownUtility.js";
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
}