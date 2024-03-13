const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});
/**
 * Here we can also use Password hasing when user save in db this below function work and hash the password user*/

userSchema.pre("save", async function (next) {
  // console.log(this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  console.log(password, this, this.password);
  return bcrypt.compare(password, this.password);
};

//JSON web token
/** 
Tokens, such as JWTs(JSON web Tonken), are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and then strored on the client-side (e.g, in cookies or local storage) for later use
*/

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JET_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
