import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { languageOptions, type SupportedLanguage } from "../../i18n";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const selectedLanguage = languageOptions.find((language) => language.code === i18n.language) ?? languageOptions[0];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(event.target.value as SupportedLanguage);
  };

  return (
    <label className="fixed left-4 top-4 z-[70] inline-flex h-10 min-w-[5.75rem] items-center rounded-full bg-white/90 p-1 text-left text-[#111111] shadow-[0_8px_24px_rgba(17,17,17,0.16)] backdrop-blur-md sm:left-6 md:left-8 md:top-5">
      <span className="sr-only">{t("nav.language")}</span>
      <span aria-hidden="true" className="pointer-events-none flex w-full items-center justify-start gap-2 px-2 text-left text-xs font-semibold">
        <img src={selectedLanguage.flagSrc} alt="" className="h-4 w-6 rounded-[2px] object-cover shadow-sm" />
        <span>{selectedLanguage.code.toUpperCase()}</span>
        <span className="text-[10px] text-current/60">⌄</span>
      </span>
      <select
        value={i18n.language}
        onChange={handleChange}
        aria-label={t("nav.language")}
        className="absolute inset-1 h-auto w-auto cursor-pointer appearance-none rounded-full border border-current/15 bg-transparent text-xs font-semibold text-transparent outline-none transition-colors hover:border-[#C1121F]/50 focus-visible:ring-2 focus-visible:ring-[#C1121F]"
      >
        {languageOptions.map((language) => (
          <option key={language.code} value={language.code} className="bg-white text-[#111111]">
            {language.flag} - {language.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
