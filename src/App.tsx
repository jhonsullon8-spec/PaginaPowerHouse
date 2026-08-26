import { useEffect, useState } from "react";
import Mission from "./sections/Mission/Mission";
import Pastors from "./sections/Pastors/Pastors";
import Ministries from "./sections/Ministries/Ministries";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";
import Beliefs from "./sections/Beliefs/Beliefs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import DonationButton from "./components/DonationButton/DonationButton";

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
    home: <Mission />,
    about: <Pastors />,
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
    </>
  );
}

export default App;
