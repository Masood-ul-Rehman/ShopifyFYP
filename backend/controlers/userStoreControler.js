const asyncHandler = require("express-async-handler");
const UserWebsite = require("../models/templateModal");
const getUserStores = asyncHandler(async (req, res) => {
  const { User } = req.body;
  if (!User) {
    throw new Error("User Id needed");
  }
  const Website = await UserWebsite.findOne({ User });
  return Website;
});
module.exports = { getUserStores };
