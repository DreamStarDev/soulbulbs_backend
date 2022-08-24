import { createPool } from 'mysql2';
import bluebird from 'bluebird';
import { DBHost, DBUser, DBPassword, DBName } from '../Config.js';

const dbConf = {
    host: DBHost,
    user: DBUser,
    password: DBPassword,
    database: DBName,
    Promise: bluebird
};

class Database {
    static async getDBConnection() {
        try {
            if (!this.db) {
                const pool = createPool(dbConf);
                // now get a Promise wrapped instance of that pool
                const promisePool = pool.promise();
                this.db = promisePool;
            }
            return this.db;
        } catch (err) {
            console.log('Error in database connection');
            console.log(err.errro || err);
        }
    }
    static async DBQuery(query, values = []) {
        let conn = await this.getDBConnection();
        let [data, fields] = await conn.query(query, values);
        return [data, fields];
    }
}

export default Database;