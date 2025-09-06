// App.jsx
import MousePointer from "./components/ui/MousePointer";
import AppRouter from "./routes/AppRouter";
import { SettingsProvider } from "./context/SettingsContext";
import { SettingsFilesProvider } from "./context/settingsFilesContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY} scriptProps={{ async: true, defer: true }}>
      <SettingsProvider>
        <SettingsFilesProvider>
          <MousePointer />
          <AppRouter />
        </SettingsFilesProvider>
      </SettingsProvider>
    </GoogleReCaptchaProvider>
  );
}
