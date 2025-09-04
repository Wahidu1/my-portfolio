import api from "./api";

export async function getAchievements() {
  const res = await api.get("/achievements/");
  return res.data;
}
