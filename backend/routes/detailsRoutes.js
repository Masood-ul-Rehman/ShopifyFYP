const express = require("express");
const router = express.Router();
const { createBusiness } = require("../controlers/detailsControler");

router.post("/newWebsite", createBusiness);
module.exports = router;
