const express = require("express");
const { createBooking } = require("../controllers/bookingController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("student"),
  createBooking
);

module.exports = router;
