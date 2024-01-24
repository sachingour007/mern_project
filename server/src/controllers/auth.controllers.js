const User = require("../models/user.models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome User !!");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    /* 
    Note-> its a one way to hash the password or one other way also.
    Hash the Password 
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound)
    password: hash_password
    * */

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({ massage: userCreated });
  } catch (error) {
    res.status(500).json({ message: "internal server erro" });
  }
};

module.exports = { home, register };
