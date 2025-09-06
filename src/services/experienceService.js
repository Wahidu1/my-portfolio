// import api from "./api";

// export async function getExperiences() {
//   const res = await api.get("/experiences/");
//   return res.data;
// }
import experiences from "../data/experiences.json";


export async function getExperiences() {
  return { results: experiences }; // mimic API response
}
