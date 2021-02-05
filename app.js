require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const { sql, poolPromise } = require("./database/db");
const salesRouter = require("./routes/sales");
const authRouter = require("./routes/auth");
const administratorRouter = require("./routes/administrator");
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "/logs/access.log"),
  { flags: "a" }
);

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/api/auth", authRouter);
app.use("/api/sales", salesRouter);
app.use("/api/administrator", administratorRouter);
// app.use("/api/logger", logger);
// app.use(router);
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    console.log(err);
    res.status(401).json(err);
  } else {
    next(err);
  }
});
const manoj = async (req, res) => {
  try {
    var manoj_data = new sql.Table();
    manoj_data.columns.add("CODE", sql.VarChar);
    manoj_data.columns.add("NAME", sql.VarChar);

    for (let data of req.body) {
      manoj_data.rows.add("CODE", data.CODE);
      manoj_data.rows.add("NAME", data.NAME);
    }

    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("manojtbl", manoj_data)
      .execute("bulkManoj");
    console.log(result);
    res.json({ message: "success" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

app.post("/manoj", manoj);
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) console.log("Unable to start the server!");
  else console.log("Server started running on : " + port);
});
