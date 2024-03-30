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

const deleteUserByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
};

const deleteContactByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
};

/*Update User*/
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id }, // filter by id
      { $set: updatedUserData } //way of data update
    );
    return res.status(200).json({ updatedData });
  } catch (error) {
    next(error);
  }
};

/* Single User get Logic */

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const singleUserData = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(singleUserData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserByAdmin,
  getUserById,
  updateUserById,
  deleteContactByAdmin,
};
