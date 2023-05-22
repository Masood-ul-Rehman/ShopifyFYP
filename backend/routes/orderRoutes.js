const express = require("express");
const { createOrder } = require("../controlers/orderControler.js");
const router = express.Router();

router.post("/placeOrder", protect, createOrder);
module.exports = router;
