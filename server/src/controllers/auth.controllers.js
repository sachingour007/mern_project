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

    res.status(201).json({
      massage: "Resgistration Successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "internal server erro" });
  }
};

// *----------------
//* User Login Logic
// *-----------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    
    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(201).json({
        massage: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or Password" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server erro" });
  }
};

module.exports = { home, register, login };
