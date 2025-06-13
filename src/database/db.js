import { Pool } from "pg";

export const pool = new Pool({
    user:'myuser',
    password:'mypassword',
    database:'dropdown_utility_ws',
    host:'localhost',
    port:5432
  });