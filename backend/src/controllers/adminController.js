const ExamSlot = require("../models/ExamSlot");
const AuditLog = require("../models/AuditLog");

//create slot - admin only
const createSlot = async (req, res) => {
  try {
    const {
      examName,
      date,
      startTime,
      endTime,
      maxCapacity
    } = req.body;

    const slot = await ExamSlot.create({
      examName,
      date,
      startTime,
      endTime,
      maxCapacity,
      remainingCapacity: maxCapacity,
      isEnabled: true
    });

    await AuditLog.create({
    actorId: req.user.userId,
    actorRole: req.user.role,
    action: "SLOT_CREATED",
    reason: `Slot created for ${examName}`
    });


    res.status(201).json({ message: "Slot created", slot });
  } catch (err) {
  console.error("CREATE SLOT ERROR:", err);
  res.status(500).json({ message: "Failed to create slot" });
}
};

//update slot - admin only
const updateSlot = async (req, res) => {
  try {
    const slotId = req.params.id;
    const updates = req.body;

    const slot = await ExamSlot.findByIdAndUpdate(
      slotId,
      updates,
      { new: true }
    );

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }

    await AuditLog.create({
      actorId: req.user.userId,
      actorRole: req.user.role,
      action: "SLOT_UPDATED",
      reason: `Slot updated: ${slot.examName}`
    });

    res.json({
      message: "Slot updated successfully",
      slot
    });
  } catch (err) {
    console.error("UPDATE SLOT ERROR:", err);
    res.status(500).json({ message: "Failed to update slot" });
  }
};

module.exports = { createSlot, updateSlot };