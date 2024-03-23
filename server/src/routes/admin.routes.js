const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin.controllers");
const authMillerware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.get("/users", authMillerware, adminMiddleware, getAllUsers);
router.get("/contacts", authMillerware, getAllContacts);
router.delete("/user/delete/:id");

module.exports = router;
