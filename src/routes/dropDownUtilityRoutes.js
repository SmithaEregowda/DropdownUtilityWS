const { DropDownUtilityController } = require('../controllers/dropDownUtilityController')
const router = require('express').Router();

router.get('/countries',DropDownUtilityController.getAllCountries);

module.exports=router;