const express = require("express");
const dotenv = require("dotenv").config();
const multer = require("multer");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/erroemiddleware");

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
connectDB();

const app = express();
// const Sessionstore = new MongoDBStore({
//   uri: process.env.MONGO_URI,
//   collection: "sessions",
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(multer({ storage: fileStorage }).single("image"));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/details", require("./routes/detailsRoutes"));
// app.use(
//   session({
//     secret: "my secret",
//     resave: false,
//     saveUninitialized: false,
//     store: Sessionstore,
//   })
// );
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
