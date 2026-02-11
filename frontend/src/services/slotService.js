import api from "./api";

export const getSlots = async () => {
  const res = await api.get("/bookings");
  return res.data;
};

export const bookSlot = async (examId, slotId, requestId) => {
  const res = await api.post("/bookings", {
    examId,
    slotId,
    requestId,
  });
  return res.data;
};
