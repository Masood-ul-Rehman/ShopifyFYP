const express = require("express");
const router = express.Router();
const {
  uploadDetails,
  // getDetailsImage,
} = require("../controlers/detailsControler");

router.post("/s", uploadDetails);
// router.get("/details", getDetailsImage);
module.exports = router;
