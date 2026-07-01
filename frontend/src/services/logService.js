import api from "./api";

export async function getLogs() {
  const response = await api.get("/logs");
  return response.data;
}
export async function createLog(log) {
  const response = await api.post("/logs", log);
  return response.data;
}