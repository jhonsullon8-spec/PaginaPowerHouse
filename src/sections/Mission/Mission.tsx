import { motion } from "motion/react";
import { getWordPressImageUrl } from "../../data/images";

interface MissionItem {
  number: string;
  title: string;
  description: string;
  image?: string;
}

const missions: MissionItem[] = [
  {
    number: "01",
    title: "Conoce a Dios",
    description:
      "Descubre una relación con Dios que transforme tu manera de vivir.",
    image: getWordPressImageUrl("2026/01/in1.jpg"),
  },
  {
    number: "02",
    title: "Encuentra Libertad",
    description:
      "Encuentra libertad y aprende a vivir una vida plena.",
    image: getWordPressImageUrl("2026/02/proposito.jpg"),
  },
  {
    number: "03",
    title: "Descubre tu Propósito",
    description:
      "Descubre aquello para lo que fuiste llamado y desarrolla tu potencial.",
    image: getWordPressImageUrl("2026/02/DOMINGO-13-08645-scaled.jpg"),
  },
  {
    number: "04",
    title: "Haz la Diferencia",
    description:
      "Pon tus dones al servicio de otros y genera un impacto positivo.",
    image: getWordPressImageUrl(
      "2022/02/89226359_1819160668217692_3004242886687457280_n.jpg",
    ),
  },
];

const Mission = () => {
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

          <p className="max-w-md text-base leading-7 text-[#737373] md:ml-auto md:text-lg">
            En PowerHouse creemos que cada persona tiene un propósito.
            Queremos acompañarte en cada etapa de ese camino.
          </p>

        </motion.div>

        {/* Missions */}
        <div className="grid gap-4 md:grid-cols-2">

          {missions.map((mission, index) => (
            <motion.article
              key={mission.number}
              className="group relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:min-h-[360px] md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >

              {/* Background image */}
              {mission.image && (
                <>
                  <img
                    src={mission.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/55 to-[#111111]/25" />
                </>
              )}

              {/* Number */}
              <span className="text-sm font-medium text-[#C1121F]/90">
                {mission.number}
              </span>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">

                <div className="mb-4 h-px w-12 bg-[#C1121F] transition-all duration-500 group-hover:w-24" />

                <h3 className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
                  {mission.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/60 md:text-base">
                  {mission.description}
                </p>

              </div>

              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#C1121F]/30 transition-transform duration-700 group-hover:scale-150" />

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Mission;