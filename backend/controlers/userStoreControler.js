const asyncHandler = require("express-async-handler");
const UserWebsite = require("../models/templateModal");
const { exec } = require("child_process");
const path = require("path");

const getUserStores = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const Website = await UserWebsite.find({ User: id });
  res.json({ Website });
});

const startStore = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const folderPath = path.join(__dirname, "..", "..", "user_apps", id);
  const command = `http-server --cors -c-1`;
  const options = { cwd: folderPath };

  const childProcess = exec(command, options);
  childProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  childProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    const portMatch = data.match(/http:\/\/localhost:(\d+)/);
    if (portMatch && portMatch[1]) {
      const port = portMatch[1];
      res.json(`${port}`);
    }
  });

  // Handle the stderr output
  childProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  // Handle the process exit event
  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  res.send(`Starting http-server for folder ID: ${id}`);
});
module.exports = { getUserStores, startStore };
