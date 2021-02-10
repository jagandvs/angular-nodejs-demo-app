const express = require("express");
const { isSignedIn } = require("../controller/auth");
const { setResetModify } = require("../controller/common");
const { logger } = require("../controller/_helper");

const router = express.Router();

router.post("/setResetModify", setResetModify);

module.exports = router;
