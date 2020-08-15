const { sql, poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getBomMaster(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .query(queries.getBomMaster)
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async getItemMaster(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .query(queries.getItemMaster)
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async getUnitMaster(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .query(queries.getUnitMaster)
            res.json(result.recordset)

        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async postBomMaster(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .input('BM_I_CODE', sql.Int, req.body.BM_I_CODE)
                .query(queries.postBomMaster)
                .then(function (recordset) {
                    console.log('Recordset: ' + JSON.stringify(recordset));
                    res.json(recordset.recordset[0].id)
                }).catch(function (err) {
                    console.log('Request error: ' + err);
                });
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async postBomDetail(req, res) {
        try {
            const pool = await poolPromise
            for (let data of req.body) {

                const result = await pool.request()
                    .input('BD_BM_CODE', sql.Int, data.BD_BM_CODE)
                    .input('BD_I_CODE', sql.Int, data.BD_I_CODE)
                    .input('BD_SCRAPQTY', sql.Int, data.BD_SCRAPQTY)
                    .input('BD_VQTY', sql.Int, data.BD_SCRAPQTY)
                    .execute('postBomDetail')
            }
            res.json("Created successfully")
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }


    async deleteBomTable(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .input('BM_CODE', sql.Int, req.query.bm_code)
                .query(queries.deleteBomTable)
            res.json("DELETED successfully")
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async getBomDetailTable(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .input('BD_BM_CODE', sql.Int, req.query.bd_bm_code)
                .query(queries.getBomDetailTable)
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async updateBomMaster(req, res) {
        try {
            const pool = await poolPromise
            console.log("BM_CODE" + req.query.bm_code)
            console.log(req.body.BM_I_CODE)
            const result = await pool.request()
                .input('BM_CODE', sql.Int, req.query.bm_code)
                .input('BM_I_CODE', sql.Int, req.body.BM_I_CODE)
                .query(queries.updateBomMaster)

            res.json("DELETED successfully")
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    // async deleteBomDetail(req, res) {
    //     try {
    //         const pool = await poolPromise
    //         const result = await pool.request()
    //             .input('BD_BM_CODE', sql.Int, req.query.bd_bm_code)
    //             .query(queries.deleteBomMaster)
    //         res.json()
    //     } catch (error) {
    //         res.status(500)
    //         res.send(error.message)
    //     }
    // }


    // async getData(req, res) {
    //     try {
    //         if (req.query.code != null) {
    //             const pool = await poolPromise

    //             const result = await pool.request()
    //                 .input('code', sql.BigInt, req.query.code)
    //                 .query(queries.getData)
    //             res.json(result.recordset)
    //         } else {
    //             res.send('Please fill all the details!')
    //         }
    //     } catch (error) {
    //         res.status(500)
    //         res.send(error.message)
    //     }
    // }
}

const controller = new MainController()
module.exports = controller;