import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-6 pt-24 text-center text-white">
      <div className="pointer-events-none absolute -left-40 -top-24 h-96 w-96 rounded-full border border-[#C1121F]/35 shadow-[0_0_100px_rgba(193,18,31,0.2)]" />
      <div className="relative mx-auto w-full max-w-3xl py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E3424D]"
        >
          {t("notFound.eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-8xl"
        >
          {t("notFound.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/60 md:text-lg"
        >
          {t("notFound.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C1121F] px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]"
          >
            {t("notFound.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;