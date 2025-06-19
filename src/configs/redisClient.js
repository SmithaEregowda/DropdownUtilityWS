import { createClient } from 'redis';

//redis client creation
const redisClient = createClient();

redisClient.on('error',(err)=>{
    console.error("Redis Client Error");
});

await redisClient.connect();

console.log("Redis Client Connected");

export default redisClient;