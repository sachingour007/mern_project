const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const contactRoutes = require("./routes/contact.routes");
const serviceRoutes = require("./routes/service.routes.js");
const adminRoutes = require("./routes/admin.routes.js");
const connectDB = require("./db/index.js");
const errorMiddleware = require("./middlewares/error.middlewares.js");

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATCH",
  Credential: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoutes);
app.use("/api/data", serviceRoutes);

//Admin Routes
app.use("/api/admin", adminRoutes);

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
