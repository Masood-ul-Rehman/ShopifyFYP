const multer = require("multer");
const util = require("util");

// configure multer storage and file filter
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // specify the directory where you want to save the image
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // generate a unique filename for the image
  },
});
let uploadFile = multer({
  storage: storage,
  // limits: { fileSize: maxSize },
}).single("image");

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: ",
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: `,
    });
  }
};

module.exports = {
  upload,
};
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//     cb(new Error("File type not supported"), false);
//   }
// };
// const upload = multer({ storage, fileFilter });
