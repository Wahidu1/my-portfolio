// src/context/SettingsContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getSettings } from "../services/settingsService";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await getSettings();
        // Convert array → object for easy use
        const mapped = data.reduce((acc, item) => {
          acc[item.key] = item.value;
          return acc;
        }, {});
        setSettings(mapped);
      } catch (err) {
        console.error("Failed to load settings:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
