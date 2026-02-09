const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        examSlotId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ExamSlot",
            required: true
        },
        examName: {
            type: String,
            required: true
        },
        requestId: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["SUCCESS", "FAILED"],
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Prevent duplicate booking for same exam by same student (PRD requirement)
bookingSchema.index({ studentId: 1, examName: 1 }, { unique: true });

// Idempotency support (safe retries)
bookingSchema.index({ requestId: 1 }, { unique: true });

module.exports = mongoose.model("Booking", bookingSchema);
