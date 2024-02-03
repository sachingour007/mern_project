const Contact = require("../models/contect.models");

const contactForm = async (req, res) => {
  console.log(req.body);
  try {
    const response = req.body;
    await Contact.create(response);
    console.log(response);
    return res.status(200).json({ message: "messages send successfully" });
  } catch (err) {
    return res.status(500).json({ message: "message not delivered", err });
  }
};

module.exports = contactForm;
