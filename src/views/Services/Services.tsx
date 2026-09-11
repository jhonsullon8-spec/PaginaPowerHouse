import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import WeeklyAgenda from "./WeeklyAgenda";

type ServiceIconName = "community" | "purpose" | "family" | "impact";
type ServiceCategoryId = "prayer" | "manChurch" | "connectionGroups" | "powerhouseKids" | "gen180" | "focus" | "relevant";

interface Service {
  id: ServiceCategoryId;
  number: string;
  categoryKey: ServiceCategoryId;
  icon: ServiceIconName;
  href: string;
  backgroundImage?: string;
}

const servicesData: Service[] = [
  { id: "prayer", number: "01", categoryKey: "prayer", icon: "purpose", href: "/contacto", backgroundImage: "https://perupowerhouse.com/wp-content/uploads/2022/01/253184222_4855759124448726_4295176513677466460_n.jpg" },
  { id: "manChurch", number: "02", categoryKey: "manChurch", icon: "impact", href: "/contacto", backgroundImage: "https://perupowerhouse.com/wp-content/uploads/2026/02/proposito3.jpg" },
  { id: "connectionGroups", number: "03", categoryKey: "connectionGroups", icon: "community", href: "/contacto", backgroundImage: "https://perupowerhouse.com/wp-content/uploads/2022/02/89226359_1819160668217692_3004242886687457280_n.jpg" },
  { id: "powerhouseKids", number: "04", categoryKey: "powerhouseKids", icon: "family", href: "/contacto", backgroundImage: "https://perupowerhouse.com/wp-content/uploads/2026/01/1b769ac1-b724-4eb4-8506-c0976afc41c2-1.jpg" },
  { id: "gen180", number: "05", categoryKey: "gen180", icon: "purpose", href: "/contacto" },
  { id: "focus", number: "06", categoryKey: "focus", icon: "community", href: "/contacto" },
  { id: "relevant", number: "07", categoryKey: "relevant", icon: "impact", href: "/contacto" },
];

const ArrowUpRight = () => (
  <svg aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
    <path d="M3.333 12.667 12.667 3.333M5.333 3.333h7.334v7.334" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </svg>
);

const ServiceIcon = ({ icon }: { icon: ServiceIconName }) => {
  const paths: Record<ServiceIconName, string> = {
    community: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 19a5.5 5.5 0 0 1 11 0M14 14.5a4.5 4.5 0 0 1 7.5 3.3",
    purpose: "M12 3.5 14.2 8l4.8.7-3.5 3.5.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8.7 9.8 8 12 3.5Z",
    family: "M4 18.5v-1.2a4 4 0 0 1 8 0v1.2M8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6.5-5a2.5 2.5 0 1 1-1.2 4.7M14 14.5a4 4 0 0 1 5.5 2.8",
    impact: "M12 21V3m0 0 7 4-7 4m0-8L5 7l7 4",
  };

  return <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24"><path d={paths[icon]} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>;
};

const ServiceCard = ({ service, index, isFullWidth = false, onSelect }: { service: Service; index: number; isFullWidth?: boolean; onSelect: (service: Service) => void }) => {
  const { t } = useTranslation();
  const title = t(`services.specific.${service.categoryKey}.title`);
  const description = t(`services.specific.${service.categoryKey}.description`);

  return (
  <motion.article className={`group relative flex flex-col overflow-hidden bg-[#171717] p-7 transition-colors duration-300 hover:bg-[#1D1D1D] sm:p-9 md:p-10 ${isFullWidth ? "sm:col-span-2" : ""}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}>
    {service.backgroundImage && (
      <>
        <img src={service.backgroundImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#111111]/80 transition-colors duration-300 group-hover:bg-[#111111]/60" />
      </>
    )}
    <div className="relative flex items-start justify-between gap-5">
      <span className="text-sm font-semibold tracking-[0.2em] text-[#C1121F]">{service.number}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-[#C1121F]/60 group-hover:text-[#E3424D]"><ServiceIcon icon={service.icon} /></span>
    </div>
    <p className="relative mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{t(`services.categories.${service.categoryKey}`)}</p>
    <h2 className="relative mt-3 max-w-xs text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
    <p className="relative mt-4 max-w-md text-sm leading-7 text-white/50 md:text-base">{description}</p>
    <button type="button" onClick={() => onSelect(service)} className="group relative mt-8 inline-flex min-h-11 w-fit items-center gap-3 border-b border-[#C1121F]/50 pb-2 text-sm font-semibold text-white transition-colors hover:border-[#E3424D] hover:text-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171717]" aria-label={`${t("services.details")} de ${title}`}>
      {t("services.details")} <ArrowUpRight />
    </button>
  </motion.article>
  );
};

const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => {
  const { t } = useTranslation();
  const title = t(`services.specific.${service.categoryKey}.title`);
  const details = t(`services.specific.${service.categoryKey}.details`);
  const actionLabel = t(`services.specific.${service.categoryKey}.action`);
  const kidsStages = service.categoryKey === "powerhouseKids" ? (["cuna", "parvulos", "powerhouseKids"] as const) : null;
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/80 px-4 py-8 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="service-modal-title" className="relative w-full max-w-lg rounded-[1.75rem] border border-white/10 bg-[#171717] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.97 }} onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label={t("services.close")} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#C1121F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"><CloseIcon /></button>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C1121F]/15 text-[#E3424D]"><ServiceIcon icon={service.icon} /></span>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#E3424D]">{t(`services.categories.${service.categoryKey}`)}</p>
        <h2 id="service-modal-title" className="mt-3 pr-10 text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-5 text-base leading-7 text-white/60">{details}</p>
        {kidsStages && (
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            {kidsStages.map((stageKey) => (
              <div key={stageKey} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-white">{t(`services.specific.powerhouseKids.kidsStages.${stageKey}.title`)}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70">{t(`services.specific.powerhouseKids.kidsStages.${stageKey}.ageRange`)}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">{t(`services.specific.powerhouseKids.kidsStages.${stageKey}.description`)}</p>
              </div>
            ))}
          </div>
        )}
        <a href={service.href} onClick={onClose} className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171717]">{actionLabel} <ArrowUpRight /></a>
      </motion.div>
    </motion.div>
  );
};

const categoryIds: ServiceCategoryId[] = ["prayer", "manChurch", "connectionGroups", "powerhouseKids", "gen180", "focus", "relevant"];

const Services = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId | "all">("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const filteredServices = useMemo(() => activeCategory === "all" ? servicesData : servicesData.filter((service) => service.categoryKey === activeCategory), [activeCategory]);

  return (
    <>
    <section className="relative overflow-hidden bg-[#111111] py-28 text-white md:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#C1121F]/[0.08] blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.header className="mb-10 max-w-3xl md:mb-14" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#E3424D]">{t("services.eyebrow")}</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{t("services.title")}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">{t("services.description")}</p>
        </motion.header>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={t("services.ariaFilter")}>
          <button key="all" type="button" onClick={() => setActiveCategory("all")} aria-pressed={activeCategory === "all"} className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${activeCategory === "all" ? "border-[#C1121F] bg-[#C1121F] text-white" : "border-white/15 text-white/55 hover:border-white/35 hover:text-white"}`}>{t("services.categories.all")}</button>
          {categoryIds.map((categoryId) => <button key={categoryId} type="button" onClick={() => setActiveCategory(categoryId)} aria-pressed={activeCategory === categoryId} className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${activeCategory === categoryId ? "border-[#C1121F] bg-[#C1121F] text-white" : "border-white/15 text-white/55 hover:border-white/35 hover:text-white"}`}>{t(`services.categories.${categoryId}`)}</button>)}
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2">
          {filteredServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} isFullWidth={filteredServices.length % 2 !== 0 && index === filteredServices.length - 1} onSelect={setSelectedService} />)}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-white/45">{t("services.nextStep")}</p>
          <a href="/contacto" className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]">{t("services.talk")} <ArrowUpRight /></a>
        </div>
      </div>

      <AnimatePresence>{selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}</AnimatePresence>
    </section>
    <WeeklyAgenda />
    </>
  );
};

export default Services;