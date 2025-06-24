import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import { Server } from 'http';
import { DropdownUtilityRouter } from './routes/dropDownUtilityRoutes.js'
import { ErrorHandler } from './middlewares/errorHandler.js';

dotenv.config(); //to use env variables
const app = express();

//to parse incoming request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to allow cors domain
app.use(cors());

app.get('/api/v1/status', (req, res) => {
    res.status(200).json({
        message: "App is  Running successfully",
    })
});

app.use("/api/v1", DropdownUtilityRouter);

app.use(ErrorHandler)

const server = new Server(app);


server.listen(process.env.PORT, () => {
    console.log("Node JS APP Running ", process.env.PORT)
})