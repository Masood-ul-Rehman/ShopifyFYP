const express = require("express");

const {
  loginUser,
  registerUser,
  getMe,
} = require("../controlers/userControler");

const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
