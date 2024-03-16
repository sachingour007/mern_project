const express = require("express");
const router = express.Router();
const services = require("../controllers/service.controllers");

router.get("/service", services);

module.exports = router;
