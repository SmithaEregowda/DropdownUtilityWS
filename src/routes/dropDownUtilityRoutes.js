import {DropDownUtilityController} from '../controllers/dropDownUtilityController.js'
import express from 'express';

const DropdownUtilityRouter = express.Router();

DropdownUtilityRouter.get('/countries', DropDownUtilityController.getAllCountries);


DropdownUtilityRouter.get('/states/:countryId', DropDownUtilityController.getAllStatesFromCountryId);

DropdownUtilityRouter.get('/states', DropDownUtilityController.getAllStates);


DropdownUtilityRouter.get('/cites', DropDownUtilityController.getAllCites);

DropdownUtilityRouter.get('/cites/:stateId', DropDownUtilityController.getAllCitesFromStateId);

DropdownUtilityRouter.get('/logs', DropDownUtilityController.getAllLogs);


export { DropdownUtilityRouter };
