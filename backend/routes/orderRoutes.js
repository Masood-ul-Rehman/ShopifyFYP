const express = require("express");
const { createOrder } = require("../controlers/orderControler.js");
const router = express.Router();
const { protect } = require("../middleware/authmiddleware");

router.post("/placeOrder", createOrder);
module.exports = router;
