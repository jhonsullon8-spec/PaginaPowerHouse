import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import pt from "./locales/pt.json";

export const supportedLanguages = ["es", "en", "fr", "de", "it", "pt"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageOptions: Array<{ code: SupportedLanguage; label: string; flag: string; flagSrc: string }> = [
  { code: "es", label: "Español", flag: "ES", flagSrc: "https://flagcdn.com/w40/es.png" },
  { code: "en", label: "English", flag: "EN", flagSrc: "https://flagcdn.com/w40/gb.png" },
  { code: "fr", label: "Français", flag: "FR", flagSrc: "https://flagcdn.com/w40/fr.png" },
  { code: "de", label: "Deutsch", flag: "DE", flagSrc: "https://flagcdn.com/w40/de.png" },
  { code: "it", label: "Italiano", flag: "IT", flagSrc: "https://flagcdn.com/w40/it.png" },
  { code: "pt", label: "Português", flag: "PT", flagSrc: "https://flagcdn.com/w40/pt.png" },
];

const savedLanguage = localStorage.getItem("powerhouse-language");
const initialLanguage: SupportedLanguage = supportedLanguages.includes(savedLanguage as SupportedLanguage)
  ? (savedLanguage as SupportedLanguage)
  : "es";

void i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en }, fr: { translation: fr }, de: { translation: de }, it: { translation: it }, pt: { translation: pt } },
  lng: initialLanguage,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language) => {
  if (supportedLanguages.includes(language as SupportedLanguage)) {
    localStorage.setItem("powerhouse-language", language);
    document.documentElement.lang = language;
  }
});

document.documentElement.lang = initialLanguage;

export default i18n;
