const asyncHandler = require("express-async-handler");
const { exec } = require("child_process");
const path = require("path");
const storeSchema = require("../models/storeModal");
const fs = require("fs");
const fse = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
let childProcess;

const getUserStores = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const Website = await storeSchema.find({ User: id });
  res.json(Website);
});
const createStore = asyncHandler(async (req, res) => {
  try {
    const { User, name, type, theme } = req.body;
    var storeId = uuidv4();

    if (!User | !name | !type | !theme) {
      res.status(400);
      throw new Error("Please add all fields");
    }
    if ((!User, !theme)) {
      throw new Error(" Please fill all fields");
    }
    var storeId = uuidv4();
    const templateDirectory = path.join(__dirname, "..", "themes", theme);
    if (!fs.existsSync(templateDirectory)) {
      return res.status(404).json({ error: "Template not found" });
    }
    const setup = await storeSchema.create({
      User,
      name,
      type,
      theme,
      store_id: storeId,
    });
    const UserData = {
      User: User,
      storeId: storeId,
    };
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

    res.json(storeId);
  } catch (error) {
    throw new Error(error);
  }
});

const startStore = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const folderPath = path.join(__dirname, "..", "..", "user_apps", id);
  const command = `http-server -p 3010 --cors -c-1`;
  const options = { cwd: folderPath };
  childProcess = exec(command, options);

  childProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  // Handle the stderr output
  childProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  // Handle the process exit event
  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
  res.json("server started");
});
const stopStore = asyncHandler(async (req, res) => {
  if (childProcess) {
    childProcess.kill(); // Kill the child process
    res.send("Server stopped successfully");
  } else {
    res.send("Server is not running");
  }
});

module.exports = {
  getUserStores,
  createStore,
  startStore,
  stopStore,
};
