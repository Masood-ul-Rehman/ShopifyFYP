const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    store_id: {
      type: String,
      required: true,
      ref: "storeDetails",
    },
    title: {
      type: String,
      required: [true, "Please enter Name of your Product"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortdesc: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },

    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    colors: { type: String },

    image: {
      data: String,
      contentType: String,
    },

    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("products", productSchema);
