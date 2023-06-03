const asyncHandler = require("express-async-handler");
const template = require("../models/templateModal");
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const completeSetup = asyncHandler(async (req, res) => {
  try {
    const { User, theme } = req.body;
    var storeId = uuidv4();

    const setup = await template.create({
      User,
      theme,
      store_id: storeId,
    });
    const UserData = {
      User: User,
      storeId: storeId,
    };

    const templateDirectory = path.join(__dirname, "..", "themes", theme);
    // console.log(templateDirectory);
    if (!fs.existsSync(templateDirectory)) {
      return res.status(404).json({ error: "Template not found" });
    }

    // Create a directory with the user's unique identifier to store their app
    var userDirectory = path.join(__dirname, "..", "..", "user_apps", storeId);
    var fileName = "storeData.json";
    var filePath = `${userDirectory}/${fileName}`;
    setup.websiteLocation = userDirectory;
    console.log(userDirectory);
    fse.cp(templateDirectory, userDirectory, { recursive: true }, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        fs.writeFile(filePath, JSON.stringify(UserData), (err) => {
          if (err) {
            console.error("An error occurred while creating the file:", err);
            throw new Error(err);
          } else {
            console.log("File created successfully!");
          }
        });
      }
    });
  } catch (error) {
    throw new Error(error);
  }

  res.json({ storeId });
});

module.exports = {
  completeSetup,
};
