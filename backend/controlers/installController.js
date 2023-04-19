const { exec } = require("child_process");
const asyncHandler = require("express-async-handler");
const path = require("path");

const template = require("../models/templateModal");

const install = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const command = `cd ${path.join(
      __dirname,
      "..",
      "..",
      "user_apps",
      id
    )} && npm install `;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        res.json(`exec error: ${error}`);
        return res.status(500).send("Error completing installation");
      }
      res.send("Completed");
      console.log(stdout);
      console.error(stderr);
    });
  } catch (error) {
    throw new Error(error);
  }
});
const start = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const command2 = `cd ${path.join(
    __dirname,
    "..",
    "..",
    "user_apps",
    id
  )} && npm start `;

  exec(command2, (error, stdout, stderr) => {
    if (error) {
      res.json(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});

module.exports = {
  install,
  start,
};
