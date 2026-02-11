const Booking = require("../models/Booking");
const ExamSlot = require("../models/ExamSlot");
const AuditLog = require("../models/AuditLog");

const createBooking = async (req, res) => {
  const studentId = req.user.userId;
  const { examId, slotId, requestId } = req.body;

  try {
    console.log("Booking attempt:", { studentId, examId, slotId, requestId });

    // 1 Idempotency check
    const existingRequest = await Booking.findOne({ requestId });
    if (existingRequest) {
      console.log("Idempotent request found");
      return res.json(existingRequest);
    }

    // 2 Prevent duplicate exam booking
    const alreadyBooked = await Booking.findOne({
      studentId,
      examId
    });
    if (alreadyBooked) {
      console.log("User already booked this exam");
      await AuditLog.create({
        actorId: studentId,
        actorRole: req.user.role,
        action: "BOOK_FAILED",
        reason: "Duplicate exam booking attempt"
      });

      return res.status(400).json({
        message: "You have already booked this exam"
      });
    }

    // 3 Atomic capacity decrement
    const slot = await ExamSlot.findOneAndUpdate(
      {
        _id: slotId,
        remainingCapacity: { $gt: 0 },
        isEnabled: true
      },
      { $inc: { remainingCapacity: -1 } },
      { new: true }
    );

    if (!slot) {
      console.log("Slot not found, full, or disabled");
      await AuditLog.create({
        actorId: studentId,
        actorRole: req.user.role,
        action: "BOOK_FAILED",
        reason: "Slot full or disabled"
      });

      return res.status(400).json({
        message: "Slot is full or unavailable"
      });
    }

    // 4 Create booking
    const booking = await Booking.create({
      studentId,
      examId,
      slotId,
      requestId,
      status: "CONFIRMED"
    });

    // 5 Audit success
    await AuditLog.create({
      actorId: studentId,
      actorRole: req.user.role,
      action: "BOOK_SUCCESS",
      reason: "Slot booked successfully"
    });

    console.log("Booking successful:", booking);
    res.status(201).json(booking);
  } catch (err) {
    console.error("BOOKING ERROR:", err.message, err.stack);
    res.status(500).json({ message: "Booking failed: " + err.message });
  }
};

const getSlots = async (req, res) => {
  try {
    const slots = await ExamSlot.find({ isEnabled: true });
    res.json(slots);
  } catch (err) {
    console.error("GET SLOTS ERROR:", err);
    res.status(500).json({ message: "Failed to load slots" });
  }
};

module.exports = { createBooking, getSlots };