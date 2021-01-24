const express = require("express");
const controller = require("../controller/controller");

const router = express.Router();
router.post("/api/users/authenticate", controller.authenticate);
router.post("/api/TableResponse", controller.TableResponse);
router.put("/api/deleteTable", controller.deleteTable);
router.get("/api/getBomMaster", controller.getBomMaster);
router.get("/api/getItemMaster", controller.getItemMaster);
router.get("/api/getUnitMaster", controller.getUnitMaster);
router.post("/api/postBomMaster", controller.postBomMaster);
router.post("/api/postBomDetail", controller.postBomDetail);
router.put("/api/deleteBomTable", controller.deleteBomTable);
router.get("/api/getBomDetailTable", controller.getBomDetailTable);
router.put("/api/updateBomMaster", controller.updateBomMaster);
router.post("/api/insertItemMaster", controller.insertItemMaster);
router.get("/api/getInvoiceDetails", controller.getInvoiceDetails);

module.exports = router;
