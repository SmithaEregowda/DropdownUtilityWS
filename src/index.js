import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import { Server } from 'http';

dotenv.config(); //to use env variables
const app= express();

//to parse incoming request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to allow cors domain
app.use(cors());

app.get('/',(req,res)=>{
    res.send("App Running sucessfully....")
});

const server =new Server();


server.listen(process.env.PORT , ()=>{
    console.log("Node JS APP Running ", process.env.PORT)
})