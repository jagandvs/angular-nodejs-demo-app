const express = require("express");
const {
  insertItemMaster,
  updateItemMaster,
  UPSERT_ITEM_UNIT_MASTER,
} = require("../controller/sales/masters");
const reportsController = require("../controller/sales/reports");
const transactionsController = require("../controller/sales/transactions");
const { TableResponse, logger } = require("../controller/_helper");
const { isSignedIn } = require("../controller/auth");

const router = express.Router();

router.post("/TableResponse", TableResponse);
router.post("/insertItemMaster", isSignedIn, insertItemMaster);
router.post("/updateItemMaster", isSignedIn, updateItemMaster);

// Item Unit Master Routes

router.post(
  "/UPSERT_ITEM_UNIT_MASTER",

  UPSERT_ITEM_UNIT_MASTER
);

module.exports = router;
