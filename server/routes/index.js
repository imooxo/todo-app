const express = require("express");
const router = express.Router();
const controller = require("../controller/CMain");

// GET /api-server
router.get("/", controller.getIndex);
module.exports = router;