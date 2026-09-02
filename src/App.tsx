import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Nosotros from "./sections/About/About";
import Ministries from "./sections/Ministries/Ministries";
import Services from "./sections/Services/Services.tsx";
import Contact from "./sections/Contact/Contact";
import Beliefs from "./sections/Beliefs/Beliefs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import DonationButton from "./components/DonationButton/DonationButton";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

type View = "home" | "about" | "beliefs" | "services" | "ministries" | "contact";

const paths: Record<View, string> = {
  home: "/",
  about: "/nosotros",
  beliefs: "/creencias",
  services: "/servicios",
  ministries: "/ministerios",
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
    ministries: <Ministries />,
    contact: <Contact />,
  };

  return (
    <>
      <Navbar />
      <main key={view}>{views[view]}</main>
      <Footer />
      <DonationButton />
      <WhatsAppButton />
      <div className="pointer-events-none fixed inset-x-0 top-[4.5rem] z-50 px-3 sm:top-20 sm:px-4 md:px-6 min-[1400px]:top-4">
        <div className="relative mx-auto h-10 max-w-7xl">
          <div className="pointer-events-auto absolute right-0 top-0 rounded-full bg-white/90 p-1 text-[#111111] shadow-[0_8px_24px_rgba(17,17,17,0.16)] backdrop-blur-md min-[1400px]:right-0 min-[1400px]:translate-x-[calc(100%+0.75rem)]">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
