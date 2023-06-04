const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    productId: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    store_id: {
      type: String,
    },

    customerName: {
      type: String,
    },
    total: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("order", orderSchema);
