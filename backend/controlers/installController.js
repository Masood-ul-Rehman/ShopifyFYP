const { exec } = require("child_process");
const asyncHandler = require("express-async-handler");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
var shell = require("shelljs");

const template = require("../models/templateModal");

const install = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const userJSON = JSON.stringify(id);
    const completed = "completed";
    const command = `cd ${path.join(
      __dirname,
      "..",
      "..",
      "user_apps",
      id
    )} && npm install `;
    const folderPath =
      path.join(__dirname, "..", "..", "user_apps", id) + "/user.json";
    const install = spawn(command, [], { shell: true, timeout: 80000 });
    install.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    install.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    install.on("error", (error) => {
      console.error(`Error executing command: ${error}`);
      return res.status(500).send("Error completing installation");
    });
    install.on("timeout", () => {
      console.log("npm install command timed out");
      res.status(500).json({ message: "npm install timed out" });
    });
    install.on("close", (code) => {
      console.log("close");

      if (code === 0) {
        res.status(200).json({ message: "npm install completed successfully" });
      } else {
        res.status(500).json({ message: "close npm install failed" });
      }
    });
    install.on("exit", (code) => {
      console.log("exit");
      if (code === 0) {
        res.status(200).json({ message: "npm install completed successfully" });
      } else {
        res.status(500).json({ message: " exit npm install failed" });
      }
    });
    // const install = exec(command, (err, stdout, stderr) => {
    //   if (err) {
    //     res.json(`exec error: ${error}`);
    //     return res.status(500).send("Error completing installation");
    //   }
    //   res.status(200).json({ message: "npm install completed successfully" });

    //   console.log(stdout);
    //   // console.error(stderr);
    // });
    // install.on("close", (code, signal) => {
    //   console.log(`npm install exited with code ${code} and signal ${signal}`);
    // });
    // fs.writeFile(folderPath, userJSON, (err) => {
    //   if (err) console.log(err);
    //   console.log("User ID saved to file.");
    // });
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

  const start = spawn(command2, [], { timeout: 10000 });
  start.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  start.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  start.on("error", (error) => {
    console.error(`Error executing command: ${error}`);
    return res.status(500).json("Error starting app");
  });

  start.on("close", (code) => {
    console.log("close");
    console.log(code);
    // if (code === null) {
    //   res.status(200).json({ message: "App started successfully" });
    // } else {
    //   res.status(500).json({ message: "App start failed" });
    // }
  });
  // start.on("exit", (code) => {
  //   console.log(code);
  //   res.status(200).json({ message: "App started successfully" });
  // });
});

module.exports = {
  install,
  start,
};
