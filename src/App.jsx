import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { SettingsProvider } from "./context/SettingsContext";
import { SettingsFilesProvider } from "./context/settingsFilesContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Loader from "./components/common/Loader";
import "./styles/App.css";

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app-wrapper">
      <div className="grid-bg-layer grid-bg" aria-hidden="true" />
      <div className="main-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY}
      scriptProps={{ async: true, defer: true }}
    >
      <SettingsProvider>
        <SettingsFilesProvider>
          <AppContent />
        </SettingsFilesProvider>
      </SettingsProvider>
    </GoogleReCaptchaProvider>
  );
}
