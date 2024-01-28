const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth.controllers.js");
const validate = require("../middlewares/validate.middlewares.js");
const signupSchema = require("../validators/auth.validators.js");

router.get("/", home);
router.post("/register", validate(signupSchema), register);
router.post("/login", login);

module.exports = router;
