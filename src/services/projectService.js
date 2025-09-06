// import api from "./api";

// /**
//  * Fetch all projects
//  * GET /works/
//  */
// export async function getProjects() {
//   const res = await api.get("/works/");
//   return res.data;
// }

// /**
//  * Fetch a single project by ID
//  * GET /works/:id/
//  * @param {number|string} id - Project ID
//  */
// export async function getProjectById(id) {
//   if (!id) throw new Error("Project ID is required");
//   const res = await api.get(`/works/${id}/`);
//   return res.data;
// }

// /**
//  * (Optional) Create a new project
//  * POST /works/
//  * @param {Object} projectData
//  */
// export async function createProject(projectData) {
//   const res = await api.post("/works/", projectData);
//   return res.data;
// }

// /**
//  * (Optional) Update an existing project
//  * PUT /works/:id/
//  * @param {number|string} id
//  * @param {Object} projectData
//  */
// export async function updateProject(id, projectData) {
//   const res = await api.put(`/works/${id}/`, projectData);
//   return res.data;
// }

// /**
//  * (Optional) Delete a project
//  * DELETE /works/:id/
//  * @param {number|string} id
//  */
// export async function deleteProject(id) {
//   const res = await api.delete(`/works/${id}/`);
//   return res.data;
// }

import projects from "../data/projects.json";



export async function getProjects() {
  return { results: projects };
}

export async function getProjectById(id) {
  const project = projects.find((p) => String(p.id) === String(id));
  return { results: project || null };
}
