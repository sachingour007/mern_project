const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin.controllers");
const authMillerware = require("../middlewares/auth.middleware");

router.get("/users", authMillerware, getAllUsers);
router.get("/contacts", authMillerware, getAllContacts);

module.exports = router;
