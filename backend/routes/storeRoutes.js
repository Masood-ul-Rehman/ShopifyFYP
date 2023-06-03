const express = require("express");
const {
  getUserStores,
  startStore,
  stopStore,
} = require("../controlers/userStoreControler");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/getStores/:id", getUserStores);
router.get("/start/:id", startStore);
router.get("/stop", stopStore);

module.exports = router;
