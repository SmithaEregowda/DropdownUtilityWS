import { Server } from 'http';
import app from './app.js';

const server = new Server(app);
server.listen(process.env.PORT, () => {
    console.log("Node JS APP Running ", process.env.PORT)
});