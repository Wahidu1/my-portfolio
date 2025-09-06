// import api from "./api";

// export async function getSkills() {
//   const res = await api.get("/skills/");
//   return res.data;
// }


import skills from "../data/skills.json";

export async function getSkills() {
  return { results: skills }; 
}
