const asyncHandler = require("express-async-handler");
const template = require("../models/templateModal");
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const completeSetup = asyncHandler(async (req, res) => {
  try {
    const { User, theme } = req.body;
    var userId = uuidv4();

    const setup = await template.create({
      User,
      theme,
      user_id: userId,
    });

    const templateDirectory = path.join(__dirname, "..", "themes", theme);
    // console.log(templateDirectory);
    if (!fs.existsSync(templateDirectory)) {
      return res.status(404).json({ error: "Template not found" });
    }

    // Create a directory with the user's unique identifier to store their app
    var userDirectory = path.join(__dirname, "..", "..", "user_apps", userId);

    setup.websiteLocation = userDirectory;
    console.log(userDirectory);
    fse.cp(templateDirectory, userDirectory, { recursive: true }, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    throw new Error(error);
  }

  res.json({ userId });
});

module.exports = {
  completeSetup,
};
