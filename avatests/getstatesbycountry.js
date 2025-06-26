import test from 'ava';
import request from 'supertest';
import app from '../src/index.js';

test("get Counteries",async t=>{
    const response= await request(app).get('/api/v1/states/6');
    console.log("response---->",response.body)
    t.truthy(true);
})