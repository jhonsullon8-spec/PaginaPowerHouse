import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import DonationButton from "./components/DonationButton/DonationButton";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import NotFound from "./views/NotFound/NotFound";
import { DOMAIN } from "./data/contact";
import { normalizePath, paths, validPaths, viewFromPath, type View } from "./routes";

const Home = lazy(() => import("./views/Home/Home"));
const About = lazy(() => import("./views/About/About"));
const Beliefs = lazy(() => import("./views/Beliefs/Beliefs"));
const Services = lazy(() => import("./views/Services/Services"));
const GruposDeConexion = lazy(() => import("./views/GruposDeConexion/GruposDeConexion"));
const Contact = lazy(() => import("./views/Contact/Contact"));

function App() {
  const { i18n } = useTranslation();
  const [view, setView] = useState<View>(() => viewFromPath(window.location.pathname));

  useEffect(() => {
    const path = window.location.pathname;
    if (path.length > 1 && path.endsWith("/")) {
      const normalized = path.slice(0, -1);
      if (validPaths.includes(normalized)) {
        window.history.replaceState({}, "", normalized);
      }
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setView(viewFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleInternalLink = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
      if (!anchor || anchor.origin !== window.location.origin || !anchor.pathname.startsWith("/")) return;
      if (anchor.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (anchor.hash && anchor.pathname === window.location.pathname) return;

      const targetPath = normalizePath(anchor.pathname);
      if (!validPaths.includes(targetPath)) return;

      event.preventDefault();
      if (targetPath !== window.location.pathname) {
        window.history.pushState({}, "", targetPath);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setView(viewFromPath(targetPath));
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleInternalLink);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleInternalLink);
    };
  }, []);

  useEffect(() => {
    const title = i18n.t(`seo.${view}.title`);
    const description = i18n.t(`seo.${view}.description`);
    const canonical = `${DOMAIN}${view === "home" ? "/" : paths[view]}`;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
  }, [view, i18n.language, i18n]);

  const views: Record<Exclude<View, "notFound">, ReactNode> = {
    home: <Home />,
    about: <About />,
    beliefs: <Beliefs />,
    services: <Services />,
    grupos: <GruposDeConexion />,
    contact: <Contact />,
  };

  return (
    <>
      <Navbar />
      <main key={view}>
        <Suspense fallback={<PageFallback />}>
          {view === "notFound" ? <NotFound /> : views[view]}
        </Suspense>
      </main>
      <Footer />
      <DonationButton />
      <WhatsAppButton />
      <LanguageSelector />
    </>
  );
}

const PageFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Cargando">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#C1121F]/20 border-t-[#C1121F]" />
  </div>
);

export default App;