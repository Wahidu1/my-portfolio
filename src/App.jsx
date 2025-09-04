// App.jsx
import MousePointer from "./components/ui/MousePointer";
import AppRouter from "./routes/AppRouter";
import { SettingsProvider } from "./context/SettingsContext";
import { SettingsFilesProvider } from "./context/settingsFilesContext";

export default function App() {
  return (
    <SettingsProvider>
      <SettingsFilesProvider>
        <MousePointer />
        <AppRouter />
      </SettingsFilesProvider>
    </SettingsProvider>
  );
}
