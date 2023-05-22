const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModal");
const createOrder = asyncHandler(async (req, res) => {
  try {
    const { User, productId, quantity, customerName } = req.body;
    const newOrder = newOrder({
      User,
      productId,
      quantity,
      customerName,
    });
    res.json("Order placed");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = { createOrder };
