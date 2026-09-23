import { describe, expect, it } from "vitest";
import { darkPaths, normalizePath, paths, viewFromPath } from "./routes";

describe("routes", () => {
  it("normaliza trailing slashes", () => {
    expect(normalizePath("/nosotros/")).toBe("/nosotros");
    expect(normalizePath("/servicios")).toBe("/servicios");
    expect(normalizePath("/")).toBe("/");
    expect(normalizePath("/no-existe/")).toBe("/");
  });

  it("resuelve vistas por path", () => {
    expect(viewFromPath("/")).toBe("home");
    expect(viewFromPath("/nosotros")).toBe("about");
    expect(viewFromPath("/creencias")).toBe("beliefs");
    expect(viewFromPath("/servicios/")).toBe("services");
    expect(viewFromPath("/grupos-de-conexion")).toBe("grupos");
    expect(viewFromPath("/contacto")).toBe("contact");
    expect(viewFromPath("/404")).toBe("notFound");
    expect(viewFromPath("/cualquier-cosa")).toBe("notFound");
  });

  it("todas las rutas son únicas y empiezan con /", () => {
    const values = Object.values(paths);
    expect(new Set(values).size).toBe(values.length);
    for (const path of values) expect(path.startsWith("/")).toBe(true);
  });

  it("darkPaths incluye las vistas de portada oscura", () => {
    expect(darkPaths).toContain("/");
    expect(darkPaths).toContain("/nosotros");
    expect(darkPaths).toContain("/servicios");
    expect(darkPaths).toContain("/contacto");
  });
});