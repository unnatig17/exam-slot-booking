import api from "./api";

export const getAllSlots = () => api.get("/admin/slots");
