const express = require("express");
const {
  uploadImage,
  uploadMultipleImages,
  getImages,
} = require("../controlers/imageControler");
const multer = require("multer");
const { protect } = require("../middleware/authmiddleware");
const upload = multer({
  dest: "uploads/",
  limits: {
    fieldNameSize: 100,
    fieldSize: 1000000, // 1MB
  },
});
const router = express.Router();

router.post("/upload", protect, upload.single("image"), uploadImage);
router.post(
  "/upload-multiple",
  protect,
  upload.array("images"),
  uploadMultipleImages
);
router.get("/get-image", protect, getImages);
module.exports = router;
