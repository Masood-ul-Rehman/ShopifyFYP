const express = require("express");

const {
  addProduct,
  updateProduct,
  deleteProduct,
  getaProduct,
  getAllProduct,
  addToWishlist,
  rating,
} = require("../controlers/productControler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.post("/addProduct", protect, upload.single("image"), addProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.put("/wishlist", protect, addToWishlist);
router.put("/rating", protect, rating);

module.exports = router;
