import { useState, useEffect } from "react";
import MousePointer from "./components/ui/MousePointer";
import AppRouter from "./routes/AppRouter";
import { SettingsProvider } from "./context/SettingsContext";
import { SettingsFilesProvider } from "./context/settingsFilesContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Loader from "./components/common/Loader";
import "./styles/App.css"; // We'll create this CSS file

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY}
      scriptProps={{ async: true, defer: true }}
    >
      <SettingsProvider>
        <SettingsFilesProvider>
          <div className="app-wrapper">
            {/* Custom Mouse Pointer */}
            <MousePointer />

            {/* === Left SVG Decoration === */}
            <div className="side-svg left">
              <svg
                viewBox="0 0 200 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0 Q50 400 100 800"
                  stroke="#000000"
                  strokeWidth="4"
                  fill="none"
                />
                <circle cx="100" cy="200" r="20" fill="#000000" opacity="0.5" />
              </svg>
            </div>

            {/* App Router (Main Content) */}
            <div className="main-content">
              <AppRouter />
            </div>

            {/* === Right SVG Decoration === */}
            <div className="side-svg right">
              <svg
                viewBox="0 0 200 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0 Q150 400 100 800"
                  stroke="#000000"
                  strokeWidth="4"
                  fill="none"
                />
                <circle cx="100" cy="600" r="20" fill="#000000" opacity="0.5" />
              </svg>
            </div>
          </div>
        </SettingsFilesProvider>
      </SettingsProvider>
    </GoogleReCaptchaProvider>
  );
}
