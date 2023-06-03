const express = require("express");
const { getUserStores } = require("../controlers/userStoreControler");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/getStores/:id", getUserStores);
module.exports = router;
