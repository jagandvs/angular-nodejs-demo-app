const { Table } = require("mssql");
const { sql, poolPromise } = require("../../database/db");

exports.UPSERT_CUSTOMER_PO = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("PROCESS", sql.VarChar, req.body.PROCESS)
      .input("CPOM_CODE", sql.Int, req.body.CPOM_CODE)
      .input("CPOM_P_CODE", sql.Int, req.body.CPOM_P_CODE)
      .input("CPOM_PONO", sql.VarChar, req.body.CPOM_PONO)
      .input("CPOM_DOC_NO", sql.Int, req.body.CPOM_DOC_NO)
      .input("CPOM_TYPE", sql.Int, req.body.CPOM_TYPE)
      .input("CPOM_DATE", sql.DateTime, req.body.CPOM_DATE)
      .input("CPOM_CR_DAYS", sql.Int, req.body.CPOM_CR_DAYS)
      .input("CPOM_CM_COMP_ID", sql.Int, req.body.CPOM_CM_COMP_ID)
      .input("MODIFY", sql.Bit, req.body.MODIFY)
      .input("ES_DELETE", sql.Bit, req.body.MODIFY)
      .input("CPOM_PAY_TERM", sql.VarChar, req.body.CPOM_PAY_TERM)
      .input("CPOM_AUTH_FLG", sql.Bit, req.body.CPOM_AUTH_FLG)
      .input("CPOM_QE_CODE", sql.Int, req.body.CPOM_QE_CODE)
      .input("CPOM_T_NAME", sql.VarChar, req.body.CPOM_T_NAME)
      .input("CPOM_T_PER", sql.Float, req.body.CPOM_T_PER)
      .input("CPOM_T_AMT", sql.Float, req.body.CPOM_T_AMT)
      .input("CPOM_BASIC_AMT", sql.Float, req.body.CPOM_BASIC_AMT)
      .input("CPOM_DISCOUNT_PER", sql.Float, req.body.CPOM_DISCOUNT_PER)
      .input("CPOM_DISCOUNT_AMT", sql.Float, req.body.CPOM_DISCOUNT_AMT)
      .input("CPOM_DISCOUNT_REASON", sql.VarChar, req.body.CPOM_DISCOUNT_REASON)
      .input("CPOM_DEVIATION_AMT", sql.Float, req.body.CPOM_DEVIATION_AMT)
      .input(
        "CPOM_DEVIATION_REASON",
        sql.VarChar,
        req.body.CPOM_DEVIATION_REASON
      )
      .input("CPOM_PACKING_AMT", sql.Float, req.body.CPOM_PACKING_AMT)
      .input("CPOM_EXC_PER", sql.Float, req.body.CPOM_EXC_PER)
      .input("CPOM_EXC_EDU_PER", sql.Float, req.body.CPOM_EXC_EDU_PER)
      .input("CPOM_EXC_HEDU_PER", sql.Float, req.body.CPOM_EXC_HEDU_PER)
      .input("CPOM_EXC_AMT", sql.Float, req.body.CPOM_EXC_AMT)
      .input("CPOM_ROUNDING", sql.Float, req.body.CPOM_ROUNDING)
      .input("CPOM_GRAND_TOT", sql.Float, req.body.CPOM_GRAND_TOT)
      .input("CPOM_INV_FLAG", sql.Bit, req.body.CPOM_INV_FLAG)
      .input("CPOM_FINAL_DEST", sql.VarChar, req.body.CPOM_FINAL_DEST)
      .input("CPOM_PRE_CARR_BY", sql.VarChar, req.body.CPOM_PRE_CARR_BY)
      .input("CPOM_PORT_LOAD", sql.VarChar, req.body.CPOM_PORT_LOAD)
      .input("CPOM_PORT_DIS", sql.VarChar, req.body.CPOM_PORT_DIS)
      .input("CPOM_PLACE_DEL", sql.VarChar, req.body.CPOM_PLACE_DEL)
      .input("CPOM_BUYER_NAME", sql.VarChar, req.body.CPOM_BUYER_NAME)
      .input("CPOM_BUYER_ADD", sql.VarChar, req.body.CPOM_BUYER_ADD)
      .input("CPOM_CURR_CODE", sql.Int, req.body.CPOM_CURR_CODE)
      .input("CPOM_WORK_ODR_NO", sql.VarChar, req.body.CPOM_WORK_ODR_NO)
      .input("CPOM_PO_DATE", sql.DateTime, req.body.CPOM_PO_DATE)
      .input("CPOM_AM_COUNT", sql.Int, req.body.CPOM_AM_COUNT)
      .input("CPOM_AM_DATE", sql.DateTime, req.body.CPOM_AM_DATE)
      .input("CPOM_INQ_CODE", sql.Int, req.body.CPOM_INQ_CODE)
      .input("CPOM_IS_VERBAL", sql.Bit, req.body.CPOM_IS_VERBAL)
      .input("CPOM_PROJECT_CODE", sql.Int, req.body.CPOM_PROJECT_CODE)
      .input("CPOM_PROJECT_NAME", sql.VarChar, req.body.CPOM_PROJECT_NAME)
      .input("CPOM_NO", sql.VarChar, req.body.CPOM_NO)
      .input("CPOM_FREIGHT_CHARGES", sql.VarChar, req.body.CPOM_FREIGHT_CHARGES)
      .input("CPOM_DOC_NAME", sql.VarChar, req.body.CPOM_DOC_NAME)
      .output("PK_CODE", sql.Numeric)
      .output("ERROR", sql.VarChar)
      .execute("UPSERT_CUSTOMER_PO");
    res.status(200).json(result.recordset);
  } catch (error) {
    res.send(error.message);
  }
};

exports.INSERT_UPSERT_CUSTOMER_PO = async (req, res) => {
  console.log(req.body);
  var status;
  var DT_CUSTOMER_PO_DETAIL = new sql.Table();
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CPOM_CODE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_I_CODE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_UOM_CODE", sql.VarChar(50));

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_ORD_QTY", sql.Float);
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_RATE", sql.VarChar(50));

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_AMT", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_STATUS", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DISPACH", sql.Float);

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DESC", sql.VarChar(100));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CUST_I_CODE", sql.VarChar(200));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CUST_I_NAME", sql.VarChar(200));

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_WO_QTY", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DIEAMORTRATE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DISC_PER", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DIEAMORTQTY", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DIEAMORTQTYRETURN", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_FILE_NAME", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_TRANSPORT_RATE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_GROSS_RATE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CAST_WEIGHT", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_FINISH_WEIGHT", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_TURNING_WEIGHT", sql.VarChar(50));
  for (let data of req.body[1]) {
    data.CPOD_STATUS == "Active" ? (status = 1) : (status = 0);

    DT_CUSTOMER_PO_DETAIL.rows.add(
      data.CPOD_CPOM_CODE,
      data.CPOD_I_CODE,
      data.CPOD_UOM_CODE,
      data.CPOD_ORD_QTY,
      data.CPOD_RATE,
      data.CPOD_AMT,
      status,
      0,
      data.CPOD_DESC,
      data.CPOD_CUST_I_CODE,
      data.CPOD_CUST_I_NAME,
      data.CPOD_WO_QTY,
      data.CPOD_DIEAMORTRATE,
      data.CPOD_DISC_PER,
      data.CPOD_DIEAMORTQTY,
      data.CPOD_DIEAMORTQTYRETURN,
      data.CPOD_FILE_NAME,
      data.CPOD_TRANSPORT_RATE,
      data.CPOD_GROSS_RATE,
      data.CPOD_CAST_WEIGHT,
      data.CPOD_FINISH_WEIGHT,
      data.CPOD_TURNING_WEIGHT
    );
  }
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("PROCESS", sql.VarChar, req.body[2].PROCESS)
      .input("CPOM_CODE", sql.Int, req.body[0].CPOM_CODE)
      .input("CPOM_P_CODE", sql.Int, req.body[0].CPOM_P_CODE)
      .input("CPOM_PONO", sql.VarChar, req.body[0].CPOM_PONO)
      .input("CPOM_DOC_NO", sql.Int, req.body[0].CPOM_DOC_NO)
      .input("CPOM_TYPE", sql.Int, req.body[0].CPOM_TYPE)
      .input("CPOM_DATE", sql.DateTime, req.body[0].CPOM_DATE)
      .input("CPOM_CR_DAYS", sql.Int, req.body[0].CPOM_CR_DAYS)
      .input("CPOM_CM_COMP_ID", sql.Int, req.body[0].CPOM_CM_COMP_ID)
      .input("MODIFY", sql.Bit, req.body[0].MODIFY)
      .input("ES_DELETE", sql.Bit, req.body[0].MODIFY)
      .input("CPOM_PAY_TERM", sql.VarChar, req.body[0].CPOM_PAY_TERM)
      .input("CPOM_AUTH_FLG", sql.Bit, req.body[0].CPOM_AUTH_FLG)
      .input("CPOM_QE_CODE", sql.Int, req.body[0].CPOM_QE_CODE)
      .input("CPOM_T_NAME", sql.VarChar, req.body[0].CPOM_T_NAME)
      .input("CPOM_T_PER", sql.Float, req.body[0].CPOM_T_PER)
      .input("CPOM_T_AMT", sql.Float, req.body[0].CPOM_T_AMT)
      .input("CPOM_BASIC_AMT", sql.Float, req.body[0].CPOM_BASIC_AMT)
      .input("CPOM_DISCOUNT_PER", sql.Float, req.body[0].CPOM_DISCOUNT_PER)
      .input("CPOM_DISCOUNT_AMT", sql.Float, req.body[0].CPOM_DISCOUNT_AMT)
      .input(
        "CPOM_DISCOUNT_REASON",
        sql.VarChar,
        req.body[0].CPOM_DISCOUNT_REASON
      )
      .input("CPOM_DEVIATION_AMT", sql.Float, req.body[0].CPOM_DEVIATION_AMT)
      .input(
        "CPOM_DEVIATION_REASON",
        sql.VarChar,
        req.body[0].CPOM_DEVIATION_REASON
      )
      .input("CPOM_PACKING_AMT", sql.Float, req.body[0].CPOM_PACKING_AMT)
      .input("CPOM_EXC_PER", sql.Float, req.body[0].CPOM_EXC_PER)
      .input("CPOM_EXC_EDU_PER", sql.Float, req.body[0].CPOM_EXC_EDU_PER)
      .input("CPOM_EXC_HEDU_PER", sql.Float, req.body[0].CPOM_EXC_HEDU_PER)
      .input("CPOM_EXC_AMT", sql.Float, req.body[0].CPOM_EXC_AMT)
      .input("CPOM_ROUNDING", sql.Float, req.body[0].CPOM_ROUNDING)
      .input("CPOM_GRAND_TOT", sql.Float, req.body[0].CPOM_GRAND_TOT)
      .input("CPOM_INV_FLAG", sql.Bit, req.body[0].CPOM_INV_FLAG)
      .input("CPOM_FINAL_DEST", sql.VarChar, req.body[0].CPOM_FINAL_DEST)
      .input("CPOM_PRE_CARR_BY", sql.VarChar, req.body[0].CPOM_PRE_CARR_BY)
      .input("CPOM_PORT_LOAD", sql.VarChar, req.body[0].CPOM_PORT_LOAD)
      .input("CPOM_PORT_DIS", sql.VarChar, req.body[0].CPOM_PORT_DIS)
      .input("CPOM_PLACE_DEL", sql.VarChar, req.body[0].CPOM_PLACE_DEL)
      .input("CPOM_BUYER_NAME", sql.VarChar, req.body[0].CPOM_BUYER_NAME)
      .input("CPOM_BUYER_ADD", sql.VarChar, req.body[0].CPOM_BUYER_ADD)
      .input("CPOM_CURR_CODE", sql.Int, req.body[0].CPOM_CURR_CODE)
      .input("CPOM_WORK_ODR_NO", sql.VarChar, req.body[0].CPOM_WORK_ODR_NO)
      .input("CPOM_PO_DATE", sql.DateTime, req.body[0].CPOM_PO_DATE)
      .input("CPOM_AM_COUNT", sql.Int, req.body[0].CPOM_AM_COUNT)
      .input("CPOM_AM_DATE", sql.DateTime, req.body[0].CPOM_AM_DATE)
      .input("CPOM_INQ_CODE", sql.Int, req.body[0].CPOM_INQ_CODE)
      .input("CPOM_IS_VERBAL", sql.Bit, req.body[0].CPOM_IS_VERBAL)
      .input("CPOM_PROJECT_CODE", sql.Int, req.body[0].CPOM_PROJECT_CODE)
      .input("CPOM_PROJECT_NAME", sql.VarChar, req.body[0].CPOM_PROJECT_NAME)
      .input("CPOM_NO", sql.VarChar, req.body[0].CPOM_NO)
      .input(
        "CPOM_FREIGHT_CHARGES",
        sql.VarChar,
        req.body[0].CPOM_FREIGHT_CHARGES
      )
      .input("CPOM_DOC_NAME", sql.VarChar, req.body[0].CPOM_DOC_NAME)
      .input("detail", DT_CUSTOMER_PO_DETAIL)
      .output("PK_CODE", sql.VarChar)
      .output("ERROR", sql.VarChar)
      .execute("UPSERT_CUSTOMER_PO");
    console.log(result);
    res.status(200).json(result.output);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

exports.INSERT_UPSERT_CUSTOMER_PO_DETAIL = async (req, res) => {
  var status;
  var DT_CUSTOMER_PO_DETAIL = new sql.Table();
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CPOM_CODE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_I_CODE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_UOM_CODE", sql.VarChar(50));

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_ORD_QTY", sql.Float);
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_RATE", sql.VarChar(50));

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_AMT", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_STATUS", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DISPACH", sql.Float);

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DESC", sql.VarChar(100));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CUST_I_CODE", sql.VarChar(200));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CUST_I_NAME", sql.VarChar(200));

  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_WO_QTY", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DIEAMORTRATE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DISC_PER", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DIEAMORTQTY", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_DIEAMORTQTYRETURN", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_FILE_NAME", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_TRANSPORT_RATE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_GROSS_RATE", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_CAST_WEIGHT", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_FINISH_WEIGHT", sql.VarChar(50));
  DT_CUSTOMER_PO_DETAIL.columns.add("CPOD_TURNING_WEIGHT", sql.VarChar(50));
  for (let data of req.body) {
    console.warn(data);
    data.CPOD_STATUS == "Active" ? (status = 1) : (status = 0);

    DT_CUSTOMER_PO_DETAIL.rows.add(
      req.query.PK_CODE,
      data.CPOD_I_CODE,
      data.CPOD_UOM_CODE,
      data.CPOD_ORD_QTY,
      data.CPOD_RATE,
      data.CPOD_AMT,
      status,
      0,
      data.CPOD_DESC,
      data.CPOD_CUST_I_CODE,
      data.CPOD_CUST_I_NAME,
      data.CPOD_WO_QTY,
      data.CPOD_DIEAMORTRATE,
      data.CPOD_DISC_PER,
      data.CPOD_DIEAMORTQTY,
      data.CPOD_DIEAMORTQTYRETURN,
      data.CPOD_FILE_NAME,
      data.CPOD_TRANSPORT_RATE,
      data.CPOD_GROSS_RATE,
      data.CPOD_CAST_WEIGHT,
      data.CPOD_FINISH_WEIGHT,
      data.CPOD_TURNING_WEIGHT
    );
  }
  try {
    console.log(DT_CUSTOMER_PO_DETAIL);
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("detail", DT_CUSTOMER_PO_DETAIL)
      .output("PK_CODE", sql.VarChar)
      .output("ERROR", sql.VarChar)
      .execute("UPSERT_CUSTOMER_PO_DETAIL");
    res.json(result.output);
  } catch (error) {
    res.send(error.message);
  }
};

exports.Item_SelectedIndexChanged = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("I_CODE", sql.Int, req.query.I_CODE)
      .output("CPOD_UOM_CODE", sql.Int)
      .output("CPOD_CUST_I_CODE", sql.VarChar)
      .output("CPOD_CUST_I_NAME", sql.VarChar)
      .execute("Item_SelectedIndexChanged");
    res.json(result.output);
  } catch (error) {
    res.send(error.message);
  }
};
