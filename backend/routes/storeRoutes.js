const express = require("express");
const {
  getUserStores,
  createStore,
  startStore,
  stopStore,
} = require("../controlers/userStoreControler");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/getStores/:id", protect, getUserStores);
router.post("/createNew", protect, createStore);

router.get("/start/:id", startStore);
router.get("/stop", protect, stopStore);

module.exports = router;
