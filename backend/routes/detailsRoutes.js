const express = require("express");
const router = express.Router();
const { createBusiness } = require("../controlers/detailsControler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { protect } = require("../middleware/authmiddleware");

router.post("/newWebsite", protect, upload.single("image"), createBusiness);
module.exports = router;
