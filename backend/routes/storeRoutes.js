const express = require("express");
const {
  getUserStores,
  startStore,
} = require("../controlers/userStoreControler");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/getStores/:id", getUserStores);
router.get("/start/:id", startStore);

module.exports = router;
