import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Conecta con la comunidad",
    description: "Encuentra un espacio para compartir, crecer y construir vínculos que trascienden el domingo.",
  },
  {
    number: "02",
    title: "Descubre tu propósito",
    description: "Reconoce tus dones y encuentra formas concretas de ponerlos al servicio de algo mayor.",
  },
  {
    number: "03",
    title: "Crece en familia",
    description: "Experiencias pensadas para que cada generación encuentre un lugar donde sentirse parte.",
  },
  {
    number: "04",
    title: "Sirve e impacta",
    description: "Participa en iniciativas que convierten la fe en acciones concretas para nuestra ciudad.",
  },
];

const ArrowUpRight = () => (
  <svg aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
    <path d="M3.333 12.667 12.667 3.333M5.333 3.333h7.334v7.334" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

const Services = () => (
  <section className="relative overflow-hidden bg-[#111111] py-28 text-white md:py-36">
    <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#C1121F]/[0.08] blur-[100px]" />
    <div className="relative mx-auto max-w-7xl px-6 md:px-10">
      <motion.header
        className="mb-14 max-w-3xl md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#E3424D]">LO QUE HACEMOS</span>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Un lugar para crecer, servir y conectar.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">PowerHouse existe para acompañarte en cada etapa y ayudarte a vivir una fe con propósito.</p>
      </motion.header>

      <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.number}
            className="group bg-[#171717] p-7 transition-colors duration-300 hover:bg-[#1D1D1D] sm:p-9 md:p-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-5">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#C1121F]">{service.number}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-[#C1121F]/60 group-hover:text-[#E3424D]"><ArrowUpRight /></span>
            </div>
            <h2 className="mt-14 max-w-xs text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/50 md:text-base">{service.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-6 text-white/45">Da el siguiente paso y conoce cómo puedes ser parte de PowerHouse.</p>
        <a href="/contacto" className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]">Hablemos <ArrowUpRight /></a>
      </div>
    </div>
  </section>
);

export default Services;