import api from "./api";

export const bookSlot = (examId, slotId) =>
  api.post("/bookings", {
    examId,
    slotId,
    requestId: crypto.randomUUID()
  });
