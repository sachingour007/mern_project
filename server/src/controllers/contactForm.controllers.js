const Contact = require("../models/contact.models");

const contactForm = async (req, res, next) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Messages sent successfully" });
  } catch (err) {
    console.error("Error creating contact:", err.message);
    const status = 500;
    const message = "Message not delivered";
    const error = {
      status,
      message,
    };
    next(error);
  }
};

module.exports = contactForm;
