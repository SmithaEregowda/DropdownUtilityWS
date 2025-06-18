import { Pool } from "pg";

export const pool = new Pool({
    user:'postgres',
    password:'postgres',
    database:'dropdown_utility_ws',
    host:'localhost',
    port:5432
  });