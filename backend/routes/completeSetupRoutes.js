const express = require("express");
const router = express.Router();
// const { protect } = require("../middleware/authmiddleware");
const { completeSetup } = require("../controlers/completeSetupControler");
const { install, start } = require("../controlers/installController");
router.post("/completeSetup", completeSetup);
router.post("/install/:id", install);
router.post("/start/:id", start);

module.exports = router;
