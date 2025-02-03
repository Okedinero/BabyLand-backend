const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const productRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");

const newsletterRoutes = require("./routes/newsletterRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/sub", newsletterRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);

  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
