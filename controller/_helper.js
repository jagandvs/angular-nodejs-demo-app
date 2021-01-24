const { sql, poolPromise } = require("../database/db");
const fs = require("fs");
var rawdata = fs.readFileSync("./controller/queries.json");
var queries = JSON.parse(rawdata);

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
