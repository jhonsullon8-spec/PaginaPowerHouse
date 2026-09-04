import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { getWordPressImageUrl } from "../../data/images";
import { useTranslation } from "react-i18next";

const navLinks = [
  { number: "01", key: "home", href: "/" },
  { number: "02", key: "about", href: "/nosotros" },
  { number: "03", key: "beliefs", href: "/creencias" },
  { number: "04", key: "services", href: "/servicios" },
  { number: "05", key: "ministries", href: "/ministerios" },
];

const darkPaths = ["/nosotros", "/servicios", "/contacto"];

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkView, setIsDarkView] = useState(() =>
    darkPaths.includes(window.location.pathname),
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsDarkView(darkPaths.includes(window.location.pathname));
    };

    window.addEventListener("popstate", handleHashChange);
    return () => window.removeEventListener("popstate", handleHashChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const useLightHeader = isDarkView && !isScrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4 md:px-6">
      <motion.nav
        aria-label="Navegación principal"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-[#1A1A1A]/10 bg-white/80 shadow-[0_20px_40px_rgba(17,17,17,0.08)] backdrop-blur-md"
            : "border-white/10 bg-[#111111]/20 shadow-[0_10px_30px_rgba(17,17,17,0.06)] backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 md:px-7">
          <a
              href="/"
            className={`flex items-center transition-opacity duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 ${
              useLightHeader ? "focus-visible:ring-offset-[#111111]" : "focus-visible:ring-offset-white"
            }`}
            aria-label="Ir al inicio"
          >
            <img
              src={getWordPressImageUrl("2022/01/logo-powerhouse-negro.png")}
              alt="PowerHouse"
              className={`h-9 w-auto ${useLightHeader ? "brightness-0 invert" : ""}`}
            />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className={`group relative inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#C1121F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 ${
                    useLightHeader ? "text-white/85 focus-visible:ring-offset-[#111111]" : "text-[#111111]/80 focus-visible:ring-offset-white"
                  }`}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C1121F] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  <span>{t(`nav.${link.key}`)}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center md:flex">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-[#C1121F] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {t("nav.visit")}
            </a>
          </div>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full border p-2.5 transition-colors duration-300 hover:border-[#C1121F]/50 hover:text-[#C1121F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 md:hidden ${
              useLightHeader
                ? "border-white/20 bg-[#111111]/60 text-white focus-visible:ring-offset-[#111111]"
                : "border-[#111111]/10 bg-white/80 text-[#111111] focus-visible:ring-offset-white"
            }`}
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Menú</span>
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            id="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-[60] w-full bg-[#111111] shadow-[0_20px_60px_rgba(17,17,17,0.35)] md:hidden"
          >
            <div className="flex min-h-screen flex-col px-5 py-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <a
                  href="/"
                  className="text-base font-black uppercase tracking-[0.22em] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  POWERHOUSE
                </a>

                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-colors duration-300 hover:border-[#C1121F]/60 hover:text-[#C1121F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                  aria-label="Cerrar menú"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between py-8">
                <ul className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.key}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.06 }}
                    >
                      <a
                        href={link.href}
                        className="flex items-center gap-4 rounded-2xl px-2 py-2 text-white transition-colors duration-300 hover:text-[#C1121F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-sm font-medium uppercase tracking-[0.24em] text-[#C1121F]">
                          {link.number}
                        </span>
                        <span className="text-2xl font-medium uppercase tracking-tight">
                          {t(`nav.${link.key}`)}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="/contacto"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#C1121F] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                >
                  {t("nav.visit")}
                </motion.a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
