import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import DonationButton from "./components/DonationButton/DonationButton";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

const Home = lazy(() => import("./views/Home/Home"));
const About = lazy(() => import("./views/About/About"));
const Beliefs = lazy(() => import("./views/Beliefs/Beliefs"));
const Services = lazy(() => import("./views/Services/Services"));
const GruposDeConexion = lazy(() => import("./views/GruposDeConexion/GruposDeConexion"));
const Contact = lazy(() => import("./views/Contact/Contact"));

type View = "home" | "about" | "beliefs" | "services" | "grupos" | "contact";

const paths: Record<View, string> = {
  home: "/",
  about: "/nosotros",
  beliefs: "/creencias",
  services: "/servicios",
  grupos: "/grupos-de-conexion",
  contact: "/contacto",
};

const getViewFromPath = (): View => {
  const entry = Object.entries(paths).find(([, path]) => path === window.location.pathname);
  return (entry?.[0] as View | undefined) ?? "home";
};

function App() {
  const [view, setView] = useState<View>(getViewFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setView(getViewFromPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleInternalLink = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
      if (!anchor || anchor.origin !== window.location.origin || !anchor.pathname.startsWith("/")) return;
      if (anchor.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (anchor.hash && anchor.pathname === window.location.pathname) return;

      const nextView = Object.values(paths).includes(anchor.pathname);
      if (!nextView) return;

      event.preventDefault();
      window.history.pushState({}, "", anchor.pathname);
      window.dispatchEvent(new PopStateEvent("popstate"));
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleInternalLink);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleInternalLink);
    };
  }, []);

  const views = {
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
        <Suspense fallback={<PageFallback />}>{views[view]}</Suspense>
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
