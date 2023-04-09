const asyncHandler = require("express-async-handler");
// const details = asyncHandler(async (req, res) => {
//   const { name, type, logo } = req.body;
//   if (!name || !type || !logo) {
//     res.status(400);
//     throw new Error("Please add all fields");
//   }
//   const user = await Bdetails.create({
//     name,
//     type,
//     logo,
//   });
// });
const Details = require("../models/detailsModal");
const uploadImage = require("../middleware/upload");

const uploadDetails = asyncHandler(async (req, res) => {
  // Details.name = req.body.name;
  // Details.type = req.body.type;
  const { name, type } = req.body;
  // details.image.data = req.file.buffer;
  // details.image.contentType = req.file.mimetype;
  const create = await Details.create({
    name,
    type,
  });
  if (create) {
    res.status(201).json({
      _id: create.id,
      name: create.name,
      bustype: create.type,
    });
  } else {
    res.status(400).json({ message: " not found" });
  }
});
//   details.save((err) => {
//     // if (err) {
//     //   console.log(err);
//     //   res.sendStatus(500);
//     // } else {
//     //   res.sendStatus(200);
//     // }
//     res.status(400).json({ message: "user not found" });
//   });
// };

// const getDetailsImage = (req, res) => {
//   Details.findOne({}, (err, details) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else if (!details) {
//       res.sendStatus(404);
//     } else {
//       res.contentType(details.image.contentType);
//       res.send(details.image.data);
//     }
//   });
// };

module.exports = { uploadDetails };
