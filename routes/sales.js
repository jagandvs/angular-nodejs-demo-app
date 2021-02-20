const express = require("express");
const {
  insertItemMaster,
  updateItemMaster,
  UPSERT_ITEM_UNIT_MASTER,
} = require("../controller/sales/masters");
const reportsController = require("../controller/sales/reports");
const {
  UPSERT_CUSTOMER_PO,
  Item_SelectedIndexChanged,
  INSERT_UPSERT_CUSTOMER_PO,
  INSERT_UPSERT_CUSTOMER_PO_DETAIL,
} = require("../controller/sales/transactions");
const { TableResponse, logger } = require("../controller/_helper");
const { isSignedIn } = require("../controller/auth");

const router = express.Router();

router.post("/TableResponse", TableResponse);
router.post("/insertItemMaster", isSignedIn, insertItemMaster);
router.post("/updateItemMaster", isSignedIn, updateItemMaster);

// MASTERS

// Item Unit Master Routes

router.post(
  "/UPSERT_ITEM_UNIT_MASTER",
  isSignedIn,
  logger,
  UPSERT_ITEM_UNIT_MASTER
);

// TRANSACTIONS

// SALES ORDER

router.post("/UPSERT_CUSTOMER_PO", isSignedIn, logger, UPSERT_CUSTOMER_PO);
router.post(
  "/INSERT_UPSERT_CUSTOMER_PO",
  isSignedIn,
  logger,
  INSERT_UPSERT_CUSTOMER_PO
);
router.post(
  "/INSERT_UPSERT_CUSTOMER_PO_DETAIL",
  isSignedIn,
  logger,
  INSERT_UPSERT_CUSTOMER_PO_DETAIL
);
router.get(
  "/Item_SelectedIndexChanged",
  isSignedIn,
  logger,
  Item_SelectedIndexChanged
);

module.exports = router;
