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
      getWordPressImageUrl("2026/02/4-1-scaled.jpg"),
      getWordPressImageUrl("2026/02/5-scaled.jpg"),
      getWordPressImageUrl("2026/02/3-scaled.jpg"),
    ],
  },
  {
    number: "02",
    title: "Encuentra Libertad",
    shortDescription:
      "La verdadera libertad no es hacer lo que quieras, sino vivir sin cadenas emocionales...",
    expandedDescription:
      "La verdadera libertad no es hacer lo que quieras, sino vivir sin cadenas emocionales, mentales y espirituales. Aquí aprenderás a soltar el pasado, sanar heridas y caminar con una identidad firme y segura.",
    coverImage: getWordPressImageUrl("2026/02/proposito.jpg"),
    gallery: [
      getWordPressImageUrl("2026/02/libertad5.jpg"),
      getWordPressImageUrl("2026/02/libertad4-scaled.jpg"),
      getWordPressImageUrl("2026/02/libertad3-scaled.jpg"),
    ],
  },
  {
    number: "03",
    title: "Descubre tu Propósito",
    shortDescription:
      "No fuiste creado por accidente. Hay un propósito específico diseñado para tu vida...",
    expandedDescription:
      "No fuiste creado por accidente. Hay un propósito específico diseñado para tu vida. Aquí te ayudamos a identificar tus dones, desarrollar tu liderazgo y caminar con claridad hacia aquello para lo que realmente fuiste llamado.",
    coverImage: getWordPressImageUrl(
      "2026/02/DOMINGO-13-08645-scaled.jpg",
    ),
    gallery: [
      getWordPressImageUrl("2026/02/proposito3.jpg"),
      getWordPressImageUrl("2026/02/proposito2.jpg"),
      getWordPressImageUrl("2026/02/Proposito5-scaled.jpg"),
    ],
  },
  {
    number: "04",
    title: "Haz la Diferencia",
    shortDescription:
      "No solo fuimos llamados a crecer personalmente, sino a impactar el mundo que nos rodea...",
    expandedDescription:
      "No solo fuimos llamados a crecer personalmente, sino a impactar el mundo que nos rodea. Aquí descubrirás cómo servir, liderar y marcar una diferencia real en tu comunidad, usando tus dones para transformar vidas.",
    coverImage: getWordPressImageUrl(
      "2022/02/89226359_1819160668217692_3004242886687457280_n.jpg",
    ),
    gallery: [
      getWordPressImageUrl("2026/02/diferencia3-scaled.jpg"),
      getWordPressImageUrl("2026/02/diferencia4-scaled.jpg"),
      getWordPressImageUrl("2026/02/diferencia5-scaled.jpg"),
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
  const videoUrl = `https://www.youtube.com/embed/NGWDnF3hL-c?feature=oembed&rel=0&origin=${encodeURIComponent(window.location.origin)}`;

  return (
    <section className="bg-[#F5F5F3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          {/* All texts in one box */}
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C1121F]">
              PowerHouse Servolución Perú · Nuestra misión
            </span>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
              Transformamos oportunidades en nuevos caminos.
            </h2>

            <p className="mt-6 text-lg font-medium leading-7 text-[#111111] md:text-xl">
              Una vida transformada puede transformar otras.
            </p>

            <p className="mt-1 text-base leading-7 text-[#737373] md:text-lg">
              Tienes dones, talentos y una personalidad única creada con
              intención. Hay un propósito para tu vida, y queremos ayudarte a
              descubrirlo.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#737373] md:text-base">
              Somos una organización sin fines de lucro vinculada a la
              educación, la inclusión social y el desarrollo de capacidades.
              Creemos que una oportunidad puede cambiar una historia.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#C1121F]">
              <span>Educación</span>
              <span aria-hidden="true">·</span>
              <span>Inclusión social</span>
              <span aria-hidden="true">·</span>
              <span>Desarrollo de capacidades</span>
            </div>
          </div>

          {/* Video */}
          <div className="w-full shrink-0 overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(17,17,17,0.12)] md:w-[42%]">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={videoUrl}
                title="Video introductorio de PowerHouse Church Peru"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=NGWDnF3hL-c"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#111111] px-4 py-2 text-center text-xs font-medium text-white/70 transition-colors hover:text-white"
            >
              Ver video directamente en YouTube
            </a>
          </div>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">

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

        <motion.section
          className="mt-16 overflow-hidden rounded-[2rem] border border-[#D8D8D3] bg-white md:mt-20"
          aria-labelledby="impact-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden bg-[#111111] p-7 text-white sm:p-9 md:p-10">
              <img
                src="https://perupowerhouse.com/wp-content/uploads/2026/03/colegio1.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#111111]/75" />
              <div className="relative">
              <span className="relative text-xs font-semibold uppercase tracking-[0.24em] text-[#E3424D]">
                De las palabras a la acción
              </span>
              <h2 id="impact-title" className="relative mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Power Kids
              </h2>              <p className="relative mt-6 text-sm leading-6 text-white/55">
                Una oportunidad también puede abrir un camino para el futuro.
              </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
                Iniciativa en Piura · 2025
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#111111] sm:text-3xl">
                Power Kids: Aprendiendo, Creciendo y Disfrutando Juntos
              </h3>
              <p className="mt-5 text-base leading-7 text-[#737373]">
                Nuestro objetivo es que cada niño desarrolle valores, identidad y una base sólida desde temprana edad, a través de enseñanzas, juegos y actividades diseñadas especialmente para ellos.

                Contamos con espacios donde podrán aprender, divertirse y crecer en un ambiente seguro y lleno de amor, siendo cuidados y guiados por un equipo preparado, mientras tú disfrutas del servicio con tranquilidad.
              </p>
            </div>
          </div>
        </motion.section>
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
