import api from "./api";

export async function getLogs() {
  const response = await api.get("/logs");
  return response.data;
}