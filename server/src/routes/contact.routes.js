const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contactForm.controllers");

router.route("/contact").post(contactForm);

module.exports = router;
