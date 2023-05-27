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
const { v4: uuidv4 } = require("uuid");

const { protect } = require("../middleware/authmiddleware");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/addProduct", upload.single("image"), protect, addProduct);
router.post("/upload");
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.put("/wishlist", protect, addToWishlist);
router.put("/rating", protect, rating);

module.exports = router;
