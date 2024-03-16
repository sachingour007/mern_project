const Service = require("../models/service.models");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(200).json({ msg: "No Service Found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`service page err: ${error}`);
  }
};

module.exports = services;
