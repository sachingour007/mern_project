const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const authMiddlerware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP, Token not provided" });
  }
  const jwtTokent = token.replace("Bearer", "").trim();
  console.log("token form auth middle", jwtTokent);
  try {
    const isVerified = jwt.verify(jwtTokent, process.env.JET_SECRET_KEY);
    console.log(isVerified);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized. Invalid token" });
  }
};
module.exports = authMiddlerware;
