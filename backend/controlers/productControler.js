const User = require("../models/userModal");
const Product = require("../models/productModal");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const addProduct = async (req, res) => {
  try {
    const {
      User,
      title,
      slug,
      description,
      price,
      category,
      quantity,
      sold,
      colors,
      image,
    } = req.body;
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const createdSlug = slugify(req.body.title);
    const newProduct = await Product.create({
      User,
      title,
      slug: createdSlug,
      description,
      price,
      category,
      quantity,
      sold,
      colors,
    });
    if (req.file) {
      newProduct.image = {
        data: req.file.filename,
      };
    }
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  addProduct,
};
