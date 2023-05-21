const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    title: {
      type: String,
      required: [true, "Please enter Name of your Product"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      require: false,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    discount: { type: Number, required: false },
    colors: {},

    image: {
      data: Buffer,
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
