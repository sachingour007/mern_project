const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const contactRoutes = require("./routes/contact.routes");
const connectDB = require("./db/index.js");
const errorMiddleware = require("./middlewares/error.middlewares.js");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoutes);

app.use(errorMiddleware);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    "MONGO DB connection failed !!!", err;
  });
