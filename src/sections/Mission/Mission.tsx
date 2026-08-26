import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getWordPressImageUrl } from "../../data/images";

interface MissionCard {
  number: string;
  title: string;
  shortDescription: string;
  expandedDescription: string;
  coverImage: string;
  gallery: string[];
}

const missions: MissionCard[] = [
  {
    number: "01",
    title: "Conoce a Dios",
    shortDescription:
      "Dios no improvisó contigo. Tienes dones, talentos y una personalidad única creada con intención.",
    expandedDescription:
      "Dios no improvisó contigo. Tienes dones, talentos y una personalidad única creada con intención. Te ayudamos a descubrir cómo usar todo eso para algo que realmente importe, creciendo en propósito, identidad y dirección para tu vida diaria.",
    coverImage: getWordPressImageUrl("2026/01/in1.jpg"),
    gallery: [
      getWordPressImageUrl("2026/01/in1.jpg"),
      getWordPressImageUrl("2026/02/proposito.jpg"),
      getWordPressImageUrl(
        "2022/02/89226359_1819160668217692_3004242886687457280_n.jpg",
      ),
    ],
  },
  {
    number: "02",
    title: "Encuentra Libertad",
    shortDescription:
      "Deja atrás aquello que te limita y descubre la libertad que existe en Cristo.",
    expandedDescription:
      "No tienes que cargar solo con tus miedos, errores o pasado. En Dios puedes encontrar perdón, restauración y una nueva manera de vivir.",
    coverImage: getWordPressImageUrl("2026/02/proposito.jpg"),
    gallery: [
      getWordPressImageUrl("2026/02/proposito.jpg"),
      getWordPressImageUrl("2026/01/in1.jpg"),
      getWordPressImageUrl(
        "2026/02/DOMINGO-13-08645-scaled.jpg",
      ),
    ],
  },
  {
    number: "03",
    title: "Descubre tu Propósito",
    shortDescription:
      "Descubre tus dones, desarrolla tus talentos y encuentra la manera de hacer la diferencia.",
    expandedDescription:
      "Dios te creó con dones, talentos y una personalidad única. Tu historia tiene valor y puedes utilizar aquello que recibiste para impactar positivamente a otras personas y hacer la diferencia.",
    coverImage: getWordPressImageUrl(
      "2026/02/DOMINGO-13-08645-scaled.jpg",
    ),
    gallery: [
      getWordPressImageUrl(
        "2026/02/DOMINGO-13-08645-scaled.jpg",
      ),
      getWordPressImageUrl("2026/02/proposito.jpg"),
      getWordPressImageUrl("2026/01/in1.jpg"),
    ],
  },
  {
    number: "04",
    title: "Haz la Diferencia",
    shortDescription:
      "Pon tus dones al servicio de otros y genera un impacto positivo.",
    expandedDescription:
      "Cada persona tiene algo valioso que ofrecer. Cuando decides usar tus dones, talentos y tiempo para servir a otros, tu vida cobra un significado profundo y transformas el mundo que te rodea.",
    coverImage: getWordPressImageUrl(
      "2022/02/89226359_1819160668217692_3004242886687457280_n.jpg",
    ),
    gallery: [
      getWordPressImageUrl(
        "2022/02/89226359_1819160668217692_3004242886687457280_n.jpg",
      ),
      getWordPressImageUrl("2026/02/DOMINGO-13-08645-scaled.jpg"),
      getWordPressImageUrl("2026/01/in1.jpg"),
    ],
  },
];

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
    aria-hidden="true"
  >
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Mission = () => {
  const [selectedMission, setSelectedMission] = useState<MissionCard | null>(
    null,
  );

  return (
    <section className="bg-[#F5F5F3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#737373]">
              Nuestra misión
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
              Una vida transformada puede transformar otras.
            </h2>
          </div>

          <div className="md:ml-auto md:max-w-md">
            <p className="text-lg font-medium leading-7 text-[#111111] md:text-xl">
              Dios no improvisó contigo.
            </p>
            <p className="mt-3 text-base leading-7 text-[#737373] md:text-lg">
              Tienes dones, talentos y una personalidad única creada con
              intención. Hay un propósito para tu vida, y queremos ayudarte a
              descubrirlo.
            </p>
          </div>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

          {missions.map((mission, index) => (
            <motion.button
              key={mission.number}
              type="button"
              onClick={() => setSelectedMission(mission)}
              className="group relative flex min-h-[380px] cursor-pointer flex-col justify-end overflow-hidden rounded-[2rem] bg-[#111111] p-6 text-left text-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-inset focus-visible:ring-offset-0 md:min-h-[420px] md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Background image */}
                <img
                  src={mission.coverImage}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/40 to-[#111111]/10" />

                {/* Red glow on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[#C1121F]/0 opacity-0 transition-opacity duration-500 group-hover:bg-[#C1121F]/[0.06] group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-sm font-medium text-[#C1121F]/90">
                    {mission.number}
                  </span>

                  <div className="mb-4 mt-2 h-px w-12 bg-[#C1121F] transition-all duration-500 group-hover:w-24" />

                  <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {mission.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/60 md:text-base">
                    {mission.shortDescription}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-all duration-300 group-hover:border-[#C1121F]/30 group-hover:bg-[#C1121F]/10 group-hover:text-[#C1121F]">
                    <PlusIcon />
                    Ver más
                  </div>
                </div>

                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#C1121F]/20 transition-transform duration-700 group-hover:scale-150" />
              </motion.button>
            ))}

        </div>
      </div>

      {/* ─── Modal ─── */}
      <AnimatePresence>
        {selectedMission && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[#111111]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMission(null)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedMission.title}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111111] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedMission(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111111]/60 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#C1121F]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] sm:right-6 sm:top-6"
                aria-label="Cerrar"
              >
                <CloseIcon />
              </button>

              {/* Hero image */}
              <div className="relative h-[240px] w-full overflow-hidden sm:h-[320px]">
                <img
                  src={selectedMission.coverImage}
                  alt={selectedMission.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                {/* Number overlay */}
                <span className="absolute bottom-6 left-8 text-6xl font-semibold leading-none tracking-[-0.06em] text-white/10 sm:text-8xl">
                  {selectedMission.number}
                </span>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 sm:px-10">
                {/* Title */}
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C1121F]/20 bg-[#C1121F]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
                  {selectedMission.number} — Etapa
                </span>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {selectedMission.title}
                </h3>

                <div className="mt-5 h-px w-16 bg-[#C1121F]" />

                <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                  {selectedMission.expandedDescription}
                </p>

                {/* Gallery */}
                {selectedMission.gallery.length > 0 && (
                  <div className="mt-10">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/30">
                      Galería
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {selectedMission.gallery.map((img, imgIndex) => (
                        <motion.div
                          key={`${selectedMission.number}-${imgIndex}`}
                          className="group/img relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06]"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.15 + imgIndex * 0.08,
                            ease: "easeOut",
                          }}
                        >
                          <img
                            src={img}
                            alt={`${selectedMission.title} — imagen ${imgIndex + 1}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-[#111111]/10 transition-colors duration-300 group-hover/img:bg-transparent" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Close footer */}
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedMission(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold tracking-wide text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Mission;
