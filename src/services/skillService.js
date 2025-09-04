import api from "./api";

export async function getSkills() {
  const res = await api.get("/skills/");
  return res.data;
}
