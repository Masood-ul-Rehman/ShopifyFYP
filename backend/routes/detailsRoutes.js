const express = require("express");
const router = express.Router();
const { createBusiness } = require("../controlers/detailsControler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/newWebsite", upload.single("image"), createBusiness);
module.exports = router;
