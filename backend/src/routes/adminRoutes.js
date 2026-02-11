const express = require("express");
const { createSlot } = require("../controllers/adminController");
const { updateSlot } = require("../controllers/adminController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/slots",
  authMiddleware,
  roleMiddleware("admin"),
  createSlot
);

router.put(
  "/slots/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateSlot
);

module.exports = router;