export type View = "home" | "about" | "beliefs" | "services" | "grupos" | "contact" | "notFound";

export const paths: Record<View, string> = {
  home: "/",
  about: "/nosotros",
  beliefs: "/creencias",
  services: "/servicios",
  grupos: "/grupos-de-conexion",
  contact: "/contacto",
  notFound: "/404",
};

export const validPaths = Object.values(paths);

export const darkPaths = ["/", "/nosotros", "/servicios", "/contacto"];

export const normalizePath = (pathname: string) => {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return validPaths.includes(path) ? path : "/";
};

export const viewFromPath = (pathname: string): View => {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const entry = Object.entries(paths).find(([, value]) => value === path);
  return (entry?.[0] as View | undefined) ?? "notFound";
};