const asyncHandler = require("express-async-handler");
const NewOrder = require("../models/orderModal");
const createOrder = asyncHandler(async (req, res) => {
  try {
    const { User, productId, store_id, customerName, total } = req.body;
    console.log(req.body);
    const placeOrder = await NewOrder.create({
      User,
      store_id,
      productId,
      customerName,
      total,
    });
    res.json(placeOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = { createOrder };
