const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authmiddleware");
const { completeSetup } = require("../controlers/completeSetupControler");
router.post("/completeSetup", protect, completeSetup);

module.exports = router;
