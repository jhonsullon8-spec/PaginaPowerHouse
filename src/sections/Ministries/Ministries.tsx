import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const ministries = [
  {
    id: "01",
    name: "Power Kids",
    description:
      "Los más pequeños aprenden, se divierten y crecen en un ambiente seguro y lleno de amor.",
  },
  {
    id: "02",
    name: "Jóvenes",
    description:
      "Conecta, descubre tu propósito y desarrolla liderazgo junto a otros jóvenes.",
  },
  {
    id: "03",
    name: "Comunidad",
    description:
      "Grupos de conexión para caminar juntos, compartir la vida y apoyarnos.",
  },
  {
    id: "04",
    name: "Servicio",
    description:
      "Descubre cómo servir y marcar una diferencia real usando tus dones.",
  },
];

const cardStyles: {
  card: string;
  number: string;
  name: string;
  description: string;
  accent: string;
  button: string;
}[] = [
  {
    card: "bg-[#C1121F]",
    number: "text-white/60",
    name: "text-white",
    description: "text-white/70",
    accent: "bg-white/30",
    button: "border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#C1121F]",
  },
  {
    card: "bg-[#111111]",
    number: "text-white/40",
    name: "text-white",
    description: "text-white/60",
    accent: "bg-[#C1121F]",
    button: "border-white/20 bg-white/10 text-white hover:bg-white hover:text-[#111111]",
  },
  {
    card: "bg-white",
    number: "text-[#C1121F]/50",
    name: "text-[#111111]",
    description: "text-[#737373]",
    accent: "bg-[#C1121F]",
    button: "border-[#111111]/15 bg-[#111111]/5 text-[#111111] hover:bg-[#C1121F] hover:text-white",
  },
  {
    card: "bg-[#FAE7E9]",
    number: "text-[#C1121F]/50",
    name: "text-[#111111]",
    description: "text-[#8A5558]",
    accent: "bg-[#C1121F]",
    button: "border-[#C1121F]/25 bg-[#C1121F]/10 text-[#C1121F] hover:bg-[#C1121F] hover:text-white",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M9 7h8v8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Duplicamos el set de tarjetas 4 veces para tener buffer infinito en ambos sentidos
const carouselItems = [
  ...ministries,
  ...ministries,
  ...ministries,
  ...ministries,
];

const Ministries = () => {
<<<<<<< HEAD
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pauseTimer = useRef<number | null>(null);
  const singleSetWidth = useRef(0);
  const lastRef = useRef(0);

  const setCounter = useRef(2);

  const firstItem = () =>
    scrollerRef.current?.firstElementChild?.firstElementChild as HTMLElement | null;

  const calculateStep = () => {
    const first = firstItem();
    return first ? first.offsetWidth + 20 : 260;
  };

  const advance = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const setWidth = singleSetWidth.current;

    // Cuando estamos a un set del final, saltamos un set hacia atrás (idéntico visualmente)
    if (scroller.scrollLeft > maxScroll - setWidth) {
      setCounter.current -= 1;
      scroller.scrollLeft -= setWidth;
    }
    // Cuando estamos en el inicio, saltamos un set hacia delante (idéntico visualmente)
    if (scroller.scrollLeft < setWidth) {
      setCounter.current += 1;
      scroller.scrollLeft += setWidth;
    }
  };

  // Inicialización y recálculo en resize (solo una vez + resize)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const doReset = () => {
      singleSetWidth.current = calculateStep() * ministries.length;
      setCounter.current = 2;
      scroller.scrollLeft = singleSetWidth.current * 2;
      lastRef.current = performance.now();
    };
    doReset();

    window.addEventListener("resize", doReset);
    return () => window.removeEventListener("resize", doReset);
  }, []);

  // Loop de animación continua. Se pausa/reanuda según `paused`.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId: number;
    const speed = 45; // px por segundo

    // Al entrar aquí (montaje o reanudación), marcamos el instante actual
    // para que el primer delta sea ~0 y no haya salto al retomar el movimiento.
    lastRef.current = performance.now();

    const step = (now: number) => {
      if (!paused) {
        const delta = now - lastRef.current;
        lastRef.current = now;
        if (delta > 0) {
          scroller.scrollLeft += (speed * delta) / 1000;
        }
        advance();
        animationId = requestAnimationFrame(step);
      }
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const step = calculateStep();

    if (direction === "right") {
      scroller.scrollLeft += step;
    } else {
      scroller.scrollLeft -= step;
    }

    // Reajustamos para nunca quedar en blanco al llegar a los extremos
    advance();
  };

  const handleMouseEnter = () => {
    setPaused(true);
    if (pauseTimer.current) window.clearTimeout(pauseTimer.current);
  };

  const handleMouseLeave = () => {
    pauseTimer.current = window.setTimeout(() => setPaused(false), 300);
  };

=======
  const { t } = useTranslation();
>>>>>>> d53e3962eeca8061e31bfe332838cbc590b3f632
  return (
    <section className="overflow-hidden bg-[#F5F5F3] py-24 md:py-32">
      <div className="mx-auto mb-12 max-w-7xl px-6 md:mb-16 md:px-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#737373]">
            {t("common.ministriesEyebrow")}
          </span>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
            {t("common.ministriesTitle")}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#737373] md:text-lg">
            {t("common.ministriesDescription")}
          </p>
        </motion.header>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => {
          setPaused(true);
        }}
        onTouchEnd={() => {
          pauseTimer.current = window.setTimeout(() => setPaused(false), 500);
        }}
      >
        <div
          ref={scrollerRef}
          className="flex w-full touch-pan-x overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max shrink-0 gap-5 px-4 will-change-scroll sm:px-6 md:px-10">
            {carouselItems.map((ministry, index) => {
              const style = cardStyles[index % ministries.length];
              return (
                <a
                  key={`${ministry.id}-${index}`}
                  href="#"
                  className={`group relative flex h-[340px] w-[240px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-2 sm:w-[280px] sm:h-[380px] md:h-[420px] md:w-[340px] md:p-8 ${style.card}`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`text-sm font-semibold tracking-[0.22em] ${style.number}`}>
                      {ministry.id}
                    </span>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 ${style.button}`}
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <div>
                    <div className={`mb-5 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20 ${style.accent}`} />
                    <h3 className={`text-3xl font-semibold leading-tight tracking-tight ${style.name}`}>
                      {ministry.name}
                    </h3>
                    <p className={`mt-3 max-w-xs text-sm leading-6 ${style.description}`}>
                      {ministry.description}
                    </p>
                  </div>

                  <div
                    className={`pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full border transition-transform duration-700 group-hover:scale-150 ${
                      index % 2 === 0 ? "border-[#C1121F]/20" : "border-black/10"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Manual controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 md:pl-8">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#111111]/10 bg-white/90 text-[#111111] shadow-[0_8px_30px_rgba(17,17,17,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#C1121F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F]"
          >
            <ArrowLeftIcon />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 md:pr-8">
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#111111]/10 bg-white/90 text-[#111111] shadow-[0_8px_30px_rgba(17,17,17,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#C1121F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F]"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ministries;