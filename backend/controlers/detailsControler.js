const asyncHandler = require("express-async-handler");

const Details = require("../models/detailsModal");

const createBusiness = async (req, res) => {
  try {
    // create a new business object using the request body
    const newBusiness = new Details({
      User: req.body.User,
      name: req.body.name,
      type: req.body.type,
    });
    if (req.file) {
      newBusiness.image = {
        data: req.file.filename,
      };
    }
    // save the new business object to the database
    const savedBusiness = await newBusiness.save();

    // return a success response to the client
    return res.status(201).json({ success: true, data: savedBusiness });
  } catch (error) {
    // if there is an error, return an error response to the client
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createBusiness };
