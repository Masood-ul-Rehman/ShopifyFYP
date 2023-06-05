const express = require("express");
const { createOrder, getOrders } = require("../controlers/orderControler.js");
const router = express.Router();
const { protect } = require("../middleware/authmiddleware");

router.post("/placeOrder", createOrder);
router.get("/getOrders/:id", getOrders);

module.exports = router;
