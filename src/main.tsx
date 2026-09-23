import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import i18n, { getInitialLanguage, loadLanguageResources } from "./i18n";
import App from "./App.tsx";

const start = async () => {
  const initialLanguage = getInitialLanguage();
  await loadLanguageResources(initialLanguage);
  if (i18n.language !== initialLanguage) {
    await i18n.changeLanguage(initialLanguage);
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

void start();