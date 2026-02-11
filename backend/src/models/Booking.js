const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  examId: {
    type: String,
    required: true
  },
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExamSlot",
    required: true
  },
  status: {
    type: String,
    enum: ["CONFIRMED", "CANCELLED"],
    default: "CONFIRMED"
  },
  requestId: {
    type: String,
    required: true,
    unique: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Prevent same student booking same exam twice
bookingSchema.index({ studentId: 1, examId: 1 }, { unique: true });

module.exports = mongoose.model("Booking", bookingSchema);