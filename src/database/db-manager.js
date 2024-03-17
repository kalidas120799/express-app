const mysql = require("mysql");

module.exports = class DbManager {
    static instance;
    mySql = null;

    constructor() {
        this.connectSql();
    }

    static getInstance() {
        if (!DbManager.instance) DbManager.instance = new DbManager();
        return DbManager.instance;
    }

    async connectSql() {
        try {
            this.mySql = mysql.createPool({
                host: process.env.MYSQL_HOST,
                port: parseInt(process.env.MYSQL_PORT),
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                timezone: 'UTC'
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    async disConnectSql() {
        try {
            if (this.mySql) this.mySql.end();
        } catch (ex) {
            console.log(ex);
        }
    }

    async execute(query, params) {
        let values = params;
        let sql = query;

        return new Promise((resolve, reject) => {
            this.mySql.query(sql, values, (err, results) => {
                if (err) return reject(err);
                else return resolve(results);
            });
        });
    }

    async insert(tableName, params) {
        return this.execute(`INSERT INTO ${tableName} SET ?`, params);
    }

    async find(query, params) {
        return this.execute(query, params);
    }

    async findOne(query, params) {
        return new Promise((resolve, reject) => {
            this.execute(query, params).then((rows) => {
                return (rows.length > 0) ? resolve(rows[0]) : resolve(null);
            }).catch(reject);
        });
    }

    async update(query, params) {
        return this.execute(query, params);
    }

    async delete(query, params) {
        return this.execute(query, params);
    }

    async call(procedureName, params) {
        const opt = (params || []).map(() => { return '?'; });
        return this.execute(`CALL ${procedureName.replace(';', '')}(${opt.join(',')});`, params);
    }
}