const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllContacts,
  deleteUserByAdmin,
  getUserById,
} = require("../controllers/admin.controllers");
const authMiddlerware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.get("/users", authMiddlerware, adminMiddleware, getAllUsers);
router.get("/contacts", authMiddlerware, getAllContacts);
router.delete(
  "/user/delete/:id",
  authMiddlerware,
  adminMiddleware,
  deleteUserByAdmin
);
router.get("/user/:id", authMiddlerware, adminMiddleware, getUserById);
module.exports = router;
