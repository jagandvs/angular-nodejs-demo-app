const { sql, poolPromise } = require("../database/db");
const { encryptPWD, comparePWD } = require("../helper/helper");
const fs = require("fs");
var rawdata = fs.readFileSync("./query/queries.json");
var queries = JSON.parse(rawdata);

exports.getInvoiceDetails = async (req, res) => {
  try {
    console.log(req.query.bm_code);
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("INM_CODE", sql.Int, req.query.bm_code)
      .execute("InvoicePrint");
    return res.json(result.recordset);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.TableResponse = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("TableNames", sql.VarChar, req.body.tableNames)
      .input("fieldNames", sql.VarChar, req.body.fieldNames)
      .input("condition", sql.VarChar, req.body.condition)
      .execute("SP_CM_TableResponse");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};

exports.deleteTable = async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool
      .request()
      .input("TableName", sql.VarChar, req.body.tableName)
      .input("condition", sql.VarChar, req.body.condition)
      .execute("SP_CM_DeleteTable");
    res.json("DELETED successfully");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.authenticate = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("UM_USERNAME", sql.VarChar, req.body.username)
      .execute("getUserDetails");
    const matcher_True = comparePWD(
      req.body.password,
      result.recordset[0].UM_PASSWORD
    );
    if (matcher_True) {
      res.status(200).json(result.recordset[0]);
    } else {
      res.status(401).json("UNAUTHORIZED");
    }
  } catch (error) {
    res.status(500);
    res.send("user not found");
    console.log(error);
  }
};
exports.getBomMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(queries.getBomMaster);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
exports.getItemMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()

      .query(queries.getItemMaster);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
exports.getUnitMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(queries.getUnitMaster);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.postBomMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("BM_I_CODE", sql.Int, req.body.BM_I_CODE)
      .query(queries.postBomMaster)
      .then(function (recordset) {
        console.log("Recordset: " + JSON.stringify(recordset));
        res.json(recordset.recordset[0].id);
      })
      .catch(function (err) {
        console.log("Request error: " + err);
      });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
exports.postBomDetail = async (req, res) => {
  try {
    const pool = await poolPromise;
    for (let data of req.body) {
      const result = await pool
        .request()
        .input("BD_BM_CODE", sql.Int, data.BD_BM_CODE)
        .input("BD_I_CODE", sql.Int, data.BD_I_CODE)
        .input("BD_SCRAPQTY", sql.Int, data.BD_SCRAPQTY)
        .input("BD_VQTY", sql.Int, data.BD_SCRAPQTY)
        .execute("postBomDetail");
    }
    res.json("Created successfully");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.deleteBomTable = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("BM_CODE", sql.Int, req.query.bm_code)
      .query(queries.deleteBomTable);
    res.json("DELETED successfully");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.getBomDetailTable = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("BD_BM_CODE", sql.Int, req.query.bd_bm_code)
      .query(queries.getBomDetailTable);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.updateBomMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    console.log("BM_CODE" + req.query.bm_code);
    console.log(req.body.BM_I_CODE);
    const result = await pool
      .request()
      .input("BM_CODE", sql.Int, req.query.bm_code)
      .input("BM_I_CODE", sql.Int, req.body.BM_I_CODE)
      .query(queries.updateBomMaster);

    res.json("DELETED successfully");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.insertItemMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("I_CODENO", sql.VarChar, req.body.I_CODENO)
      .input("I_NAME", sql.VarChar, req.body.I_NAME)
      .input("I_SCAT_CODE", sql.Int, req.body.I_SCAT_NAME)
      .input("I_CAT_CODE", sql.Int, req.body.I_CAT_NAME)
      .input("I_DRAW_NO", sql.VarChar, req.body.I_DRAW_NO)
      .input("I_SPECIFICATION", sql.VarChar, req.body.I_SPECIFICATION)
      .query(queries.insertItemMaster);

    res.json("Created successfully");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
exports.updateItemMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("I_CODENO", sql.VarChar, req.body.I_CODENO)
      .input("I_NAME", sql.VarChar, req.body.I_NAME)
      .input("I_SCAT_CODE", sql.Int, req.body.I_SCAT_NAME)
      .input("I_CAT_CODE", sql.Int, req.body.I_CAT_NAME)
      .input("I_CODE", sql.Int, req.body.I_CODE)
      .query(queries.updateItemMaster);

    res.json("Updated successfully");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
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
