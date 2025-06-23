import pgPromise from "pg-promise";

const pgp = pgPromise();
const db = pgp({
  user: 'postgres',
  password: 'postgres',
  database: 'dropdown_utility_ws',
  host: 'localhost',
  port: 5432
});
export default db;