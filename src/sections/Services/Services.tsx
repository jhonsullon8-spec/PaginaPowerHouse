import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import WeeklyCalendar from "./WeeklyCalendar";

const categories = [
  "Todos",
  "Noches de Oración",
  "Man Church Internacional",
  "Grupos de Conexión",
  "Powerhouse Kids",
  "GEN180",
  "FOCUS",
  "RELEVANT",
] as const;

type FilterCategory = (typeof categories)[number];
type ServiceCategory = Exclude<FilterCategory, "Todos">;

type ServiceIconName = "community" | "purpose" | "family" | "impact";

interface KidsGroup {
  badge: string;
  name: string;
  ageRange: string;
  description: string;
}

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  category: ServiceCategory;
  icon: ServiceIconName;
  actionLabel: string;
  href: string;
  groups?: KidsGroup[];
}

const categoryKeys: Record<FilterCategory, string> = {
  "Todos": "all",
  "Noches de Oración": "prayer",
  "Man Church Internacional": "man-church",
  "Grupos de Conexión": "connection-groups",
  "Powerhouse Kids": "powerhouse-kids",
  "GEN180": "gen180",
  "FOCUS": "focus",
  "RELEVANT": "relevant",
};

const servicesData: Service[] = [
  {
    id: "noches-oracion",
    number: "01",
    title: "Noches de Oración",
    description:
      "Espacio congregacional de intercesión y búsqueda espiritual, donde nos unimos como comunidad para orar por nuestras familias, necesidades y la transformación de la ciudad.",
    details:
      "Un tiempo intencional para profundizar en la comunión con Dios a través de la oración corporativa y la adoración. Está diseñado para toda persona que desee fortalecer su vida espiritual, clamar con fe por propósitos específicos y experimentar el poder transformador de la oración en unidad comunitaria.",
    category: "Noches de Oración",
    icon: "purpose",
    actionLabel: "Unirme a la oración",
    href: "/contacto",
  },
  {
    id: "man-church-internacional",
    number: "02",
    title: "Man Church Internacional",
    description:
      "Comunidad y movimiento enfocado en formar, afirmar y activar el liderazgo de los hombres a través de la fe, el carácter, la hermandad y el propósito en el hogar y la sociedad.",
    details:
      "Espacio diseñado para hombres que buscan fortalecer su identidad en Dios, cultivar principios bíblicos de liderazgo y edificar relaciones fraternales sólidas. A través de encuentros, discipulado práctico y desafíos de crecimiento, impulsamos a cada varón a influir positivamente en su familia, trabajo y comunidad.",
    category: "Man Church Internacional",
    icon: "impact",
    actionLabel: "Conocer Man Church",
    href: "/contacto",
  },
  {
    id: "grupos-de-conexion",
    number: "03",
    title: "Grupos de Conexión",
    description:
      "Reuniones semanales en grupos reducidos para compartir la vida, profundizar en la fe y construir relaciones genuinas de apoyo y crecimiento que van más allá del domingo.",
    details:
      "Los Grupos de Conexión son el corazón relacional de la iglesia. Diseñados para que cada persona y familia encuentre un entorno cercano donde conversar, estudiar la Palabra, apoyarse mutuamente en momentos difíciles y caminar acompañados en cada etapa de la vida cotidiana.",
    category: "Grupos de Conexión",
    icon: "community",
    actionLabel: "Unirme a un grupo",
    href: "/contacto",
  },
  {
    id: "powerhouse-kids",
    number: "04",
    title: "Powerhouse Kids",
    description:
      "Un espacio diseñado con amor para que los niños aprendan, se diviertan y crezcan en su fe en un ambiente seguro, acompañados por un equipo comprometido con su desarrollo espiritual y emocional.",
    details:
      "Nuestro ministerio infantil acompaña a cada niño desde sus primeros meses hasta la etapa previa a la adolescencia. A través de enseñanzas dinámicas, actividades formativas y cuidado personalizado, buscamos sembrar principios bíblicos y valores duraderos en un entorno seguro y alegre mientras las familias participan en la reunión con total tranquilidad.",
    category: "Powerhouse Kids",
    icon: "family",
    actionLabel: "Conocer Powerhouse Kids",
    href: "/contacto",
    groups: [
      {
        badge: "CUNA",
        name: "Powerhouse Kids Cuna",
        ageRange: "0-5 años",
        description:
          "Ambiente cálido y seguro diseñado para la primera infancia. Brinda estimulación temprana, cantos y primeras enseñanzas bíblicas con atención personalizada, cuidando con amor a los más pequeños para que sus familias disfruten del servicio con absoluta tranquilidad.",
      },
      {
        badge: "PÁRVULOS",
        name: "Powerhouse Kids Párvulos",
        ageRange: "1.er a 3.er grado",
        description:
          "Programa dinámico y creativo para niños de primer a tercer grado de primaria. Mediante lecciones interactivas, juegos formativos y manualidades, fomenta la identidad en Jesús, el compañerismo y la vivencia práctica de los valores cristianos en la escuela y el hogar.",
      },
      {
        badge: "4.º A 6.º GRADO",
        name: "Powerhouse Kids",
        ageRange: "4.º a 6.º grado",
        description:
          "Espacio formativo dirigido a estudiantes de cuarto a sexto grado de primaria. Centrado en fortalecer su carácter y toma de decisiones conforme a la fe, promueve el trabajo en equipo, la amistad y una base sólida para afrontar con éxito la transición a la adolescencia.",
      },
    ],
  },
  {
    id: "gen180",
    number: "05",
    title: "GEN180",
    description:
      "Espacio enfocado en estudiantes de secundaria (12 a 17 años), diseñado para acompañarlos en su formación espiritual, fortalecer su fe y brindarles amistades firmes en una etapa clave de su vida.",
    details:
      "GEN180 es una comunidad para adolescentes de 12 a 17 años que cursan la secundaria. Funciona mediante reuniones en grupos pequeños donde pueden conversar con confianza sobre sus inquietudes, profundizar en los principios de Dios y descubrir su propósito, aprendiendo a tomar decisiones sabias y a vivir su fe con convicción en su entorno escolar y familiar.",
    category: "GEN180",
    icon: "purpose",
    actionLabel: "Conocer GEN180",
    href: "/contacto",
  },
  {
    id: "focus",
    number: "06",
    title: "FOCUS",
    description:
      "Comunidad para jóvenes de 17 a 24 años que han culminado la secundaria y cursan estudios superiores o inician su desarrollo personal, orientada a profundizar su relación con Dios.",
    details:
      "FOCUS acompaña a jóvenes de 17 a 24 años que transitan por la etapa universitaria o de crecimiento personal. A través de reuniones en grupos pequeños, ofrece un entorno seguro para abordar los desafíos contemporáneos, consolidar convicciones bíblicas y construir relaciones genuinas de mutuo apoyo mientras desarrollan una vida espiritual profunda y con dirección clara.",
    category: "FOCUS",
    icon: "community",
    actionLabel: "Conocer FOCUS",
    href: "/contacto",
  },
  {
    id: "relevant",
    number: "07",
    title: "RELEVANT",
    description:
      "Espacio diseñado para jóvenes adultos de 25 a 35 años que buscan cimentar fundamentos espirituales sólidos, fortalecer su liderazgo y crecer en comunidad en su etapa profesional y personal.",
    details:
      "RELEVANT está pensado para jóvenes adultos de 25 a 35 años que desean vivir una fe auténtica en medio de sus responsabilidades laborales y proyectos de vida. A través de reuniones en grupos pequeños, fomenta conexiones significativas, mentoría espiritual y principios prácticos para impactar positivamente su entorno, guiados por una relación viva y constante con Dios.",
    category: "RELEVANT",
    icon: "impact",
    actionLabel: "Conocer RELEVANT",
    href: "/contacto",
  },
];

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.333 12.667 12.667 3.333M5.333 3.333h7.334v7.334"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const ServiceIcon = ({ icon }: { icon: ServiceIconName }) => {
  const paths: Record<ServiceIconName, string> = {
    community:
      "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 19a5.5 5.5 0 0 1 11 0M14 14.5a4.5 4.5 0 0 1 7.5 3.3",
    purpose:
      "M12 3.5 14.2 8l4.8.7-3.5 3.5.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8.7 9.8 8 12 3.5Z",
    family:
      "M4 18.5v-1.2a4 4 0 0 1 8 0v1.2M8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6.5-5a2.5 2.5 0 1 1-1.2 4.7M14 14.5a4.5 4.5 0 0 1 5.5 2.8",
    impact: "M12 21V3m0 0 7 4-7 4m0-8L5 7l7 4",
  };

  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path
        d={paths[icon]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const ServiceCard = ({
  service,
  index,
  isFullWidth = false,
  onSelect,
}: {
  service: Service;
  index: number;
  isFullWidth?: boolean;
  onSelect: (service: Service) => void;
}) => {
  const { t } = useTranslation();

  return (
    <motion.article
      className={`group flex flex-col justify-between bg-[#171717] p-7 transition-colors duration-300 hover:bg-[#1D1D1D] sm:p-9 md:p-10 ${
        isFullWidth ? "sm:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <div>
        <div className="flex items-start justify-between gap-5">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#C1121F]">
            {service.number}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-[#C1121F]/60 group-hover:text-[#E3424D]">
            <ServiceIcon icon={service.icon} />
          </span>
        </div>

        <div
          className={
            isFullWidth
              ? "mt-8 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10"
              : ""
          }
        >
          <div>
            <p
              className={
                isFullWidth
                  ? "text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                  : "mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
              }
            >
              {service.category}
            </p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
              {service.description}
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => onSelect(service)}
              className="group inline-flex min-h-11 w-fit items-center gap-3 border-b border-[#C1121F]/50 pb-2 text-sm font-semibold text-white transition-colors hover:border-[#E3424D] hover:text-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171717]"
              aria-label={`Ver detalles de ${service.title}`}
            >
              {t("services.details")} <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) => {
  const { t } = useTranslation();

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
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#111111]/80 p-4 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative my-auto max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[1.75rem] border border-white/10 bg-[#171717] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.97 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("services.close")}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#C1121F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
        >
          <CloseIcon />
        </button>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C1121F]/15 text-[#E3424D]">
          <ServiceIcon icon={service.icon} />
        </span>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#E3424D]">
          {service.category}
        </p>
        <h2
          id="service-modal-title"
          className="mt-3 pr-10 text-3xl font-semibold tracking-tight text-white"
        >
          {service.title}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/60">{service.details}</p>

        {service.groups && (
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            {service.groups.map((group) => (
              <div
                key={group.badge}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E3424D]">
                    {group.badge}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70">
                    {group.ageRange}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                  {group.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <a
          href={service.href}
          onClick={onClose}
          className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171717]"
        >
          {service.actionLabel} <ArrowUpRight />
        </a>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Todos");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = useMemo(
    () =>
      activeCategory === "Todos"
        ? servicesData
        : servicesData.filter((service) => service.category === activeCategory),
    [activeCategory],
  );

  const handleCategoryClick = (category: FilterCategory) => {
    setActiveCategory(category);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-28 text-white md:py-36">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#C1121F]/[0.08] blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.header
            className="mb-10 max-w-3xl md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#E3424D]">
              {t("services.eyebrow")}
            </span>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t("services.title")}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">
              {t("services.description")}
            </p>
          </motion.header>

          <div
            className="mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label={t("services.filter")}
          >
            {categories.map((category) => (
              <button
                key={category}
                id={`filter-${categoryKeys[category]}`}
                type="button"
                onClick={() => handleCategoryClick(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${
                  activeCategory === category
                    ? "border-[#C1121F] bg-[#C1121F] text-white"
                    : "border-white/15 text-white/55 hover:border-white/35 hover:text-white"
                }`}
              >
                {t(`services.${categoryKeys[category]}`)}
              </button>
            ))}
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {filteredServices.map((service, index) => {
              const isLastOdd =
                filteredServices.length % 2 !== 0 &&
                index === filteredServices.length - 1;

              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isFullWidth={isLastOdd}
                  onSelect={setSelectedService}
                />
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-white/45">
              {t("services.nextStep")}
            </p>
            <a
              href="/contacto"
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]"
            >
              {t("services.talk")} <ArrowUpRight />
            </a>
          </div>
        </div>

        <AnimatePresence>
          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </section>
      <WeeklyCalendar />
    </>
  );
};

export default Services;