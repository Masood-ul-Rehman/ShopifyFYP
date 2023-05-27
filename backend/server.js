const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/erroemiddleware");
var bodyParser = require("body-parser");

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
("");
connectDB();

const app = express();
// const Sessionstore = new MongoDBStore({
//   uri: process.env.MONGO_URI,
//   collection: "sessions",
// });
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("../images", express.static("images"));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/create", require("./routes/detailsRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/complete", require("./routes/completeSetupRoutes"));
app.use("/api/image", require("./routes/imageRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
const port = process.env.port;

app.use(errorHandler);

app.listen(port, () => console.log("started"));
