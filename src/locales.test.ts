import { describe, expect, it } from "vitest";
import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import itLang from "./locales/it.json";
import pt from "./locales/pt.json";

type TranslationObject = Record<string, unknown>;

const flatten = (obj: TranslationObject, prefix = ""): string[] =>
  Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    return value && typeof value === "object" ? flatten(value as TranslationObject, fullKey) : [fullKey];
  });

const locales: Record<string, TranslationObject> = { es, en, fr, de, it: itLang, pt };

const get = (data: TranslationObject, path: string): unknown =>
  path.split(".").reduce<unknown>(
    (node, key) => (node && typeof node === "object" ? (node as TranslationObject)[key] : undefined),
    data,
  );

describe("locales", () => {
  it("todos los idiomas tienen exactamente la misma estructura que es.json", () => {
    const esKeys = new Set(flatten(es));
    for (const [lang, data] of Object.entries(locales)) {
      const keys = new Set(flatten(data));
      const missing = [...esKeys].filter((key) => !keys.has(key));
      const extra = [...keys].filter((key) => !esKeys.has(key));
      expect(missing, `${lang} tiene claves faltantes`).toEqual([]);
      expect(extra, `${lang} tiene claves extras`).toEqual([]);
    }
  });

  it("incluye las claves críticas en todos los idiomas", () => {
    for (const [lang, data] of Object.entries(locales)) {
      expect(get(data, "common.sending"), `${lang}.common.sending`).toBeTruthy();
      expect(get(data, "notFound.title"), `${lang}.notFound.title`).toBeTruthy();
      expect(get(data, "seo.home.title"), `${lang}.seo.home.title`).toBeTruthy();
      expect(get(data, "seo.grupos.description"), `${lang}.seo.grupos.description`).toBeTruthy();
    }
  });

  it("no conserva claves muertas eliminadas", () => {
    for (const [lang, data] of Object.entries(locales)) {
      expect("calendar" in data, `${lang}.calendar`).toBe(false);
      expect("map" in data, `${lang}.map`).toBe(false);
      const services = data.services as TranslationObject;
      expect("items" in services, `${lang}.services.items`).toBe(false);
      expect("category" in services, `${lang}.services.category`).toBe(false);
    }
  });
});