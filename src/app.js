import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import { DropdownUtilityRouter } from './routes/dropDownUtilityRoutes.js'
import { ErrorHandler } from './middlewares/errorHandler.js';
import logger from './configs/logger.js';

dotenv.config(); //to use env variables
const app = express();
//to parse incoming request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to allow cors domain
app.use(cors());

app.get('/api/v1/status', (req, res) => {
    logger.info("status: App is Running successfully")
    res.status(200).json({
        message: "App is  Running successfully",
    })
});

app.use("/api/v1", DropdownUtilityRouter);

app.use(ErrorHandler)

export default app;