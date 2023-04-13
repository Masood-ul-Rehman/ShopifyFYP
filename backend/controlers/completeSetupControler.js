const asyncHandler = require("express-async-handler");
const template = require("../models/templateModal");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const completeSetup = asyncHandler(async (req, res) => {
  try {
    const { User, theme } = req.body;
    const setup = await template.create({
      User,
      theme,
    });
    const templateDirectory = path.resolve(__dirname, "..", "themes", theme);
    // console.log(templateDirectory);
    if (!fs.existsSync(templateDirectory)) {
      return res.status(404).json({ error: "Template not found" });
    }
    res.json(setup);
    const userId = uuidv4();
    // Create a directory with the user's unique identifier to store their app
    const userDirectory = path.resolve(__dirname, "..", "user_apps", userId);
    fs.mkdirSync(userDirectory);
    console.log(userDirectory);
    // Copy the template directory to the user's directory
    const copyTemplate = (src, dest) => {
      fs.mkdirSync(dest);
      try {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach((file) => {
          fs.copyFileSync(path.join(src, file), path.join(dest, file));
          console.log(path.join(src, file) + path.join(dest, file));
        });
      } catch (err) {
        console.error(`Failed to copy template: ${err.message}`);
        // Handle the error as needed, e.g., logging, sending response to client, etc.
      }
    };
    console.log(templateDirectory + userDirectory);
    copyTemplate(templateDirectory, userDirectory);

    // Start the template in the user's directory (You can implement your own logic here)
    // For example, if the template is an Express app, you can use require() to load and start it

    // Return a response to the frontend with the user's unique identifier
    res.json({ userId });
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  completeSetup,
};
