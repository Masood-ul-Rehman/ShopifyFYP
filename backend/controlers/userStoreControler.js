const asyncHandler = require("express-async-handler");
const UserWebsite = require("../models/templateModal");
const getUserStores = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const Website = await UserWebsite.findOne({ User: id });
  res.json({ Website });
});
module.exports = { getUserStores };
