const asyncHandler = require("express-async-handler");
const UserWebsite = require("../models/templateModal");
const { exec } = require("child_process");
const path = require("path");
const { EventEmitter } = require("events");
let childProcess;

const getUserStores = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const Website = await UserWebsite.find({ User: id });
  res.json({ Website });
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

module.exports = { getUserStores, startStore, stopStore };
