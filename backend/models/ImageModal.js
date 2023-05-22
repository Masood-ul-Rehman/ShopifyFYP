const mongoose = require("mongoose");
const imageSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    image: { filename: String, path: String, originalName: String },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Image", imageSchema);
