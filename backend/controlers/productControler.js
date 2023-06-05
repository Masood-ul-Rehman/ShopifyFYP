const User = require("../models/userModal");
const Product = require("../models/productModal");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const Image = require("../models/ImageModal");

const addProduct = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const {
      User,
      store,
      title,
      slug,
      description,
      shortdesc,
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
    console.log(req.file);
    const createdSlug = slugify(req.body.title);
    const newProduct = await Product.create({
      User,
      store,
      title,
      slug: createdSlug,
      description,
      shortdesc,
      price,
      category,
      quantity,
      sold,
      colors,
      image: { data: req.file.filename, contentType: req.file.mimetype },
    });

    res.json("Productuct added");
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
    res.json("Product deleted ");
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
    // const queryObj = { ...req.query };
    // const excludeFields = ["page", "sort", "limit", "fields"];
    // excludeFields.forEach((el) => delete queryObj[el]);
    // let queryStr = JSON.stringify(queryObj);
    // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // let query = Product.find(JSON.parse(queryStr));
    const userProducts = await Product.find(req.body.store_id);
    res.json(userProducts);

    // // Sorting
    // if (req.query.sort) {
    //   const sortBy = req.query.sort.split(",").join(" ");
    //   query = query.sort(sortBy);
    // } else {
    //   query = query.sort("-createdAt");
    // }

    // // limiting the fields

    // if (req.query.fields) {
    //   const fields = req.query.fields.split(",").join(" ");
    //   query = query.select(fields);
    // } else {
    //   query = query.select("-__v");
    // }

    // // pagination

    // const page = req.query.page;
    // const limit = req.query.limit;
    // const skip = (page - 1) * limit;
    // query = query.skip(skip).limit(limit);
    // if (req.query.page) {
    //   const productCount = await Product.countDocuments();
    //   if (skip >= productCount) throw new Error("This Page does not exists");
    // }
    // const product = await query;
  } catch (error) {
    throw new Error(error);
  }
});
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(finalproduct);
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
  addToWishlist,
  rating,
};
