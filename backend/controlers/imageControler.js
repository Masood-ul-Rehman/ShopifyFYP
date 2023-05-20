const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "uploads/" });

const Image = require("../models/ImageModal");
// Handle image upload
const uploadImage = async (req, res) => {
  try {
    const { filename, path, originalname } = req.file;

    // Create a new image record in the database
    const image = new Image({
      path,
      originalName: originalname,
    });
    await image.save();

    // File uploaded successfully
    res.send(filename);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file");
  }
};
const uploadMultipleImages = async (req, res) => {
  try {
    const files = req.files;

    // Create new image records in the database
    const images = files.map((file) => ({
      filename: file.filename,
      path: file.path,
      originalName: file.originalname,
    }));
    await Image.insertMany(images);

    // Files uploaded successfully
    res.send(filename);
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).send("Error uploading files");
  }
};
// Fetch all images
const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error("Error retrieving images:", error);
    res.status(500).send("Error retrieving images");
  }
};

module.exports = {
  uploadImage,
  uploadMultipleImages,
  getImages,
};
