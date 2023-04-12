const User = require("../models/userModal");
const Product = require("../models/productModal");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const addProduct = asyncHandler(async (req, res) => {
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
      image: { data: req.file.filename },
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
});
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        returnOriginal: false,
      }
    );
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    if (!deleteProduct) {
      // Product not found
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exists");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getaProduct,
  getAllProduct,
};
