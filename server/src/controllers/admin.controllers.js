const User = require("../models/user.models");
const Contact = require("../models/contact.models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No User Find" });
    }
  } catch (error) {
    console.log("admin controller", error);
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contact Find" });
    }
  } catch (error) {
    console.log("Admin Contact: ", error);
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts };
