import api from "./api";

/**
 * Fetch all projects
 * GET /works/
 */
export async function getBlogs() {
  const res = await api.get("/blog/");
  return res.data;
}

/**
 * Fetch a single project by ID
 * GET /works/:id/
 * @param {number|string} slug - Project ID
 */
export async function getBlogBySlug(slug) {
  if (!slug) throw new Error("Blog ID is required");
  const res = await api.get(`/blog/${slug}/`);
  return res.data;
}
