import winston from "winston";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '..', 'logs', 'dev.log');

const logger= winston.createLogger({
    level:"info",
    format : winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({timestamp ,level ,message})=>{
             return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    
    // Specifies where the logs should be written.
    transports:[
        new winston.transports.File({filename: logFilePath}),
        new winston.transports.Console()
    ]
});

export default logger;
