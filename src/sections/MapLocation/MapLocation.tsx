import { motion } from "motion/react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/PowerHouse+Church+Peru/@-5.173431,-80.621328,7155m/data=!3m1!1e3!4m6!3m5!1s0x904a1008c1a636fb:0x28a04e6724afb097!8m2!3d-5.1700499!4d-80.628796!16s%2Fg%2F11b_00pw6f?hl=es-PE&entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.06849040459!2d-80.635!3d-5.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1008c1a636fb%3A0x28a04e6724afb097!2sPowerHouse%20Church%20Peru!5e0!3m2!1ses!2spe!4v1";

const infoItems = [
  {
    label: "Dirección",
    value: "[Dirección pendiente de actualizar]",
  },
  {
    label: "Horarios",
    value: "[Horarios pendientes de actualizar]",
  },
  {
    label: "Contacto",
    value: "[Teléfono / Email pendiente de actualizar]",
  },
];

const LocationPin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      fill="currentColor"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
      fill="currentColor"
    />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapLocation = () => {
  return (
    <section className="relative overflow-hidden bg-[#180F10] py-24 md:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C1121F]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#C1121F]/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header — visible on mobile only, hidden on desktop where left column has its own title */}
        <motion.div
          className="mb-12 text-center lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C1121F]/20 bg-[#C1121F]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
            <LocationPin className="h-3.5 w-3.5" />
            Encuéntranos
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
            Estamos más cerca de ti
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">

          {/* ─── LEFT: Info panel ─── */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Desktop-only header inside the card */}
            <div className="mb-8 hidden lg:block">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C1121F]/20 bg-[#C1121F]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
                <LocationPin className="h-3.5 w-3.5" />
                Encuéntranos
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white xl:text-5xl">
                Estamos más cerca de ti
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-neutral-400 md:text-lg">
                Visítanos, comparte con nuestra comunidad y sé parte de lo que
                estamos construyendo juntos.
              </p>
            </div>

            {/* Info card */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#151515] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#C1121F]" aria-hidden="true" />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C1121F]">
                    Tu visita
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Planifica tu visita
                  </h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C1121F]/25 bg-[#C1121F]/10 text-[#C1121F]">
                  <LocationPin className="h-5 w-5" />
                </span>
              </div>

              <ul className="divide-y divide-white/[0.08]" role="list">
                {infoItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0D0D0D] text-[#C1121F]">
                      {index === 0 && (
                        <LocationPin className="h-4 w-4" />
                      )}
                      {index === 1 && (
                        <ClockIcon className="h-4 w-4" />
                      )}
                      {index === 2 && (
                        <PhoneIcon className="h-4 w-4" />
                      )}
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/80 md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="my-7 h-px w-full bg-white/[0.06]" />

              {/* Mobile-only description (shown below info on small screens) */}
              <p className="mb-6 text-sm leading-7 text-neutral-400 lg:hidden">
                Visítanos, comparte con nuestra comunidad y sé parte de lo que
                estamos construyendo juntos.
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C1121F] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#8F0D17] hover:shadow-[0_0_30px_rgba(193,18,31,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                >
                  Cómo llegar
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT: Map ─── */}
          <motion.div
            className="relative rounded-[1.75rem] border border-white/[0.1] bg-[#0A0A0A] p-4 pt-7 sm:p-5 sm:pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C1121F]">
                  Ubicación
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Encuéntranos en el mapa
                </h3>
              </div>
              <LocationPin className="h-5 w-5 shrink-0 text-[#C1121F]" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              {/* Map iframe */}
              <iframe
                src={GOOGLE_MAPS_EMBED_SRC}
                width="100%"
                height="580"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de PowerHouse Church Peru en Google Maps"
                className="h-[400px] w-full md:h-[500px] lg:h-[580px]"
              />

              {/* Floating glassmorphism card */}
              <div className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6">
                <div className="rounded-2xl border border-white/10 bg-[#111111]/70 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C1121F] shadow-[0_0_16px_rgba(193,18,31,0.4)]">
                      <LocationPin className="h-4 w-4 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-tight text-white">
                        PowerHouse Church Peru
                      </p>
                      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                        Nuestra ubicación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative line under map */}
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C1121F]/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
