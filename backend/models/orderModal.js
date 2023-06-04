const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "products",
      },
    ],
    store_id: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    customerName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("order", orderSchema);
