import api from "./api";

export const loginUser = (email, password) =>
  api.post("/auth/login", { email, password });

export const registerUser = (email, password, role) =>
  api.post("/auth/register", { email, password, role });
