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
const getOrders = asyncHandler(async (req, res) => {
  try {
    const { store_id } = req.params;
    const Order = await NewOrder.find(store_id);
    res.json(Order);
  } catch (error) {}
});
module.exports = { createOrder, getOrders };
