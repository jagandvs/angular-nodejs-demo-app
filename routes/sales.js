const express = require("express");
const {
  insertItemMaster,
  updateItemMaster,
} = require("../controller/sales/masters");
const reportsController = require("../controller/sales/reports");
const transactionsController = require("../controller/sales/transactions");
const { TableResponse } = require("../controller/_helper");
const { isSignedIn } = require("../controller/auth");

const router = express.Router();

router.post("/TableResponse", TableResponse);
router.post("/insertItemMaster", isSignedIn, insertItemMaster);
router.post("/updateItemMaster", isSignedIn, updateItemMaster);

// Master Routes

module.exports = router;
