export class CountriesQuery{
    static async getAll(){
        const result = await pool.query(`SELECT * FROM accounts`);
        return result?.rows?.[0];
    }
}