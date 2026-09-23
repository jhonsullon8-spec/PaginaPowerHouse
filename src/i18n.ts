import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";

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

const STORAGE_KEY = "powerhouse:lang";

const isSupportedLanguage = (language: string): language is SupportedLanguage =>
  (supportedLanguages as readonly string[]).includes(language);

export const getInitialLanguage = (): SupportedLanguage => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && isSupportedLanguage(stored) ? stored : "es";
};

export const persistLanguage = (language: SupportedLanguage) => {
  localStorage.setItem(STORAGE_KEY, language);
};

const loaders: Record<Exclude<SupportedLanguage, "es">, () => Promise<{ default: typeof es }>> = {
  en: () => import("./locales/en.json"),
  fr: () => import("./locales/fr.json"),
  de: () => import("./locales/de.json"),
  it: () => import("./locales/it.json"),
  pt: () => import("./locales/pt.json"),
};

export const loadLanguageResources = async (language: SupportedLanguage) => {
  if (language === "es" || i18n.hasResourceBundle(language, "translation")) return;
  const module = await loaders[language]();
  i18n.addResourceBundle(language, "translation", module.default);
};

export const setLanguage = async (language: SupportedLanguage) => {
  await loadLanguageResources(language);
  await i18n.changeLanguage(language);
  persistLanguage(language);
};

void i18n.use(initReactI18next).init({
  resources: { es: { translation: es } },
  lng: "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language: string) => {
  if (isSupportedLanguage(language)) {
    document.documentElement.lang = language;
  }
});

document.documentElement.lang = getInitialLanguage();

export default i18n;