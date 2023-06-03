const mongoose = require("mongoose");
const templateSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
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
module.exports = mongoose.model("template", templateSchema);
