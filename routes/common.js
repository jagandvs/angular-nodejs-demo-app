const express = require("express");
const { isSignedIn } = require("../controller/auth");
const { setResetModify, deleteRow } = require("../controller/common");
const { logger } = require("../controller/_helper");

const router = express.Router();

router.post("/setResetModify", isSignedIn, setResetModify);
router.post("/deleteRow", isSignedIn, deleteRow);

module.exports = router;
