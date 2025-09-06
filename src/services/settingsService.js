// src/services/settingsService.js
import api from "./api";

// export async function getSettings() {
//   const res = await api.get("/settings/");
//   return res.data.results; // returns the list of { key, value }
// }

import settings from "../data/settings.json";

export async function getSettings() {
  return settings; // returns array of {key, value}
}


import settingsFiles from "../data/settingsFiles.json";

export async function getSettingsFiles() {
  return settingsFiles; // [{ key, value }]
}


// export async function getSettingsFiles() {
//   const res = await api.get("/settings/files/");
//   // Convert backend response shape → { key, value }
//   return res.data.results.map(item => ({
//     key: item.name,
//     value: item.file,
//   }));
// }
