const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  user,
} = require("../controllers/auth.controllers.js");
const validate = require("../middlewares/validate.middlewares.js");
const {
  signupSchema,
  loginSchema,
} = require("../validators/auth.validators.js");
const authMillerware = require("../middlewares/auth.middleware.js");

router.get("/", home);
router.post("/register", validate(signupSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/user", authMillerware, user);

module.exports = router;
