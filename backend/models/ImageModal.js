const mongoose = require("mongoose");
const imageSchema = mongoose.Schema(
  {
    image: { filename: String, path: String, originalName: String },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Image", imageSchema);
