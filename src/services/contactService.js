import api from "./api";


export async function sendMessage(contactData) {
  const res = await api.post("/contact/", contactData);
  return res.data;
}
