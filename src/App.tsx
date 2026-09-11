import { useEffect, useState } from "react";
import Home from "./views/Home/Home";
import Nosotros from "./views/About/About";
import GruposDeConexion from "./views/GruposDeConexion/GruposDeConexion";
import Services from "./views/Services/Services.tsx";
import Contact from "./views/Contact/Contact";
import Beliefs from "./views/Beliefs/Beliefs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import DonationButton from "./components/DonationButton/DonationButton";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

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
    about: <Nosotros />,
    beliefs: <Beliefs />,
    services: <Services />,
    grupos: <GruposDeConexion />,
    contact: <Contact />,
  };

  return (
    <>
      <Navbar />
      <main key={view}>{views[view]}</main>
      <Footer />
      <DonationButton />
      <WhatsAppButton />
      <LanguageSelector />
    </>
  );
}

export default App;
