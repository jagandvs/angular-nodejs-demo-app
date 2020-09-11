const sql = require('mssql')

const config = {
    user: 'sa',
    password: 'Dj@004112',
    server: 'localhost',
    port: 1433,
    database: 'DEMO-APP',
    options: {
        encrypt: true,
        enableArithAbort: true
    },

}
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    sql, poolPromise
}