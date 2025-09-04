import api from "./api";

export async function getExperiences() {
  const res = await api.get("/experiences/");
  return res.data;
}
