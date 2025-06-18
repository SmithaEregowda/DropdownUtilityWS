import {DropDownUtilityController} from '../controllers/dropDownUtilityController.js'
import express from 'express';

const DropdownUtilityRouter = express.Router();

DropdownUtilityRouter.get('/countries', DropDownUtilityController.getAllCountries);

export { DropdownUtilityRouter };
