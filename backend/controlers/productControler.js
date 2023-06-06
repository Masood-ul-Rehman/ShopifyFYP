const User = require("../models/userModal");
const Product = require("../models/productModal");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const Image = require("../models/ImageModal");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const { error } = require("console");

// const addProduct = asyncHandler(async (req, res) => {
//   try {
//     console.log(req.body);
//     const {
//       User,
//       store_id,
//       title,
//       slug,
//       description,
//       shortdesc,
//       price,
//       category,
//       quantity,
//       sold,
//       colors,
//       image,
//     } = req.body;
//     if (req.body.title) {
//       req.body.slug = slugify(req.body.title);
//     }
//     console.log(req.file + "file comming");
//     const createdSlug = slugify(req.body.title);
//     const newProduct = await Product.create({
//       User,
//       store_id,
//       title,
//       slug: createdSlug,
//       description,
//       shortdesc,
//       price,
//       category,
//       quantity,
//       sold,
//       colors,
//       image: { data: req.file.filename, contentType: req.file.mimetype },
//     });

//     res.json("Productuct added");
//   } catch (error) {
//     throw new Error(error);
//   }
// });
const addProduct = asyncHandler(async (req, res) => {
  const form = formidable({ multiples: false, maxFileSize: 10 * 1024 * 1024 });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      // Handle error during form parsing
      return res.status(500).json({ error: "Error parsing form data." });
    }
    console.log("Fields:", fields);
    console.log("Files:", files);

    try {
      const {
        User,
        store_id,
        title,
        description,
        shortdesc,
        price,
        category,
        quantity,
        sold,
        colors,
      } = fields;

      const slug = title.toLowerCase().replace(/\s+/g, "-");

      const { image } = files;
      const imageData = fs.readFileSync(image.filepath);
      const imageFilename = `${Date.now()}-${image.originalFilename}`;
      const imagesDirectory = path.join(__dirname, "..", "images");
      if (!fs.existsSync(imagesDirectory)) {
        fs.mkdirSync(imagesDirectory);
      }
      const imagePath = path.join(__dirname, "..", "images", imageFilename);

      fs.writeFileSync(imagePath, imageData);

      if (!image) {
        return res.status(400).json({ error: "No image uploaded." });
      }

      const newProduct = await Product.create({
        User,
        store_id,
        title,
        slug: slug,
        description,
        shortdesc,
        price,
        category,
        quantity,
        sold,
        colors,
        image: {
          data: imageFilename,
          contentType: image.mimetype,
        },
      });

      return res.json("Product added");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error adding product." });
    }
  });
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
    const { store_id } = req.body;
    if (!store_id) {
      res.status(400).send("Enter store_id");
    }
    console.log(store_id);
    const userProducts = await Product.find({ store_id: store_id });
    res.json(userProducts);
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
