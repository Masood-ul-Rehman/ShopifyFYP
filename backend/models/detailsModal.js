const mongoose = require("mongoose");
const businessSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter Name of your Business"],
    },
    type: {
      type: String,
      required: [true, "Business type"],
    },
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("detailsModal", businessSchema);
