import test from 'ava';
import request from 'supertest';
import app from '../src/app.js';

test("get Counteries",async t=>{
    const response= await request(app).get('/api/v1/states/1');
    const states = response.body.countries;
    t.is(states.length,3);
})