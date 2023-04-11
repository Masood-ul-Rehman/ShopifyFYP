const express = require("express");

const { addProduct } = require("../controlers/productControler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.post("/addProduct", protect, upload.single("image"), addProduct);

module.exports = router;
