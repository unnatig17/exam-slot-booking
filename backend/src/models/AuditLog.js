const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
    {
        actorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        actorRole: {
            type: String,
            enum: ["admin", "student"],
            required: true
        },
        action: {
            type: String,
            required: true
        },
        details: {
            type: String
        },
        examSlotId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ExamSlot"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("AuditLog", auditLogSchema);
