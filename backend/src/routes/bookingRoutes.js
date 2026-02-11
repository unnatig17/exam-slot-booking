const express = require("express");
const { createBooking, getSlots } = require("../controllers/bookingController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getSlots);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("student"),
  createBooking
);

module.exports = router;
