// src/context/SettingsFilesContext.jsx
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getSettingsFiles } from "../services/settingsService";

const SettingsFilesContext = createContext({
  settingsFiles: {},
  loading: true,
  error: null,
  refetch: async () => {},
});

export function SettingsFilesProvider({ children }) {
  const [settingsFiles, setSettingsFiles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSettingsFiles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSettingsFiles(); // [{ key, value }]
      const mapped = data.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
      setSettingsFiles(mapped);
    } catch (err) {
      setError(err);
      console.error("Failed to load settings files:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettingsFiles();
  }, [fetchSettingsFiles]);

  const value = { settingsFiles, loading, error, refetch: fetchSettingsFiles };

  return (
    <SettingsFilesContext.Provider value={value}>
      {children}
    </SettingsFilesContext.Provider>
  );
}

export function useSettingsFiles() {
  return useContext(SettingsFilesContext);
}
