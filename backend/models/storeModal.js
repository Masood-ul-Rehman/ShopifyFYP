const mongoose = require("mongoose");
const storeSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: [true, "Please enter Name of your Business"],
    },
    type: {
      type: String,
      required: [true, "Business type"],
    },
    theme: {
      type: String,
      required: [true, "Please chose the theme"],
    },
    store_id: {
      type: String,
    },
    websiteLocation: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("storeDetails", storeSchema);
