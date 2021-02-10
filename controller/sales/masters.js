const { sql, poolPromise } = require("../../database/db");
const fs = require("fs");
var rawdata = fs.readFileSync("./controller/sales/salesQueries.json");
var queries = JSON.parse(rawdata);

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
    res.status(200).json({ message: "Created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
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

exports.UPSERT_ITEM_UNIT_MASTER = async (req, res) => {
  try {
    console.warn(req.body);
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("PROCESS", sql.VarChar, req.body.PROCESS)
      .input("I_UOM_CODE", sql.Int, req.body.I_UOM_CODE)
      .input("I_UOM_CM_COMP_ID", sql.Int, req.body.I_UOM_CM_COMP_ID)
      .input("I_UOM_NAME", sql.VarChar, req.body.I_UOM_NAME)
      .input("I_UOM_DESC", sql.VarChar, req.body.I_UOM_DESC)
      .output("PK_CODE", sql.Numeric)
      .output("ERROR", sql.VarChar)
      .execute("UPSERT_ITEM_UNIT_MASTER");

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
