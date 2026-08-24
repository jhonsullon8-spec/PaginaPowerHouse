import { motion } from "motion/react";

const missions = [
  {
    number: "01",
    title: "Conoce a Dios",
    description:
      "Descubre una relación con Dios que transforme tu manera de vivir.",
  },
  {
    number: "02",
    title: "Encuentra Libertad",
    description:
      "Encuentra libertad y aprende a vivir una vida plena.",
  },
  {
    number: "03",
    title: "Descubre tu Propósito",
    description:
      "Descubre aquello para lo que fuiste llamado y desarrolla tu potencial.",
  },
  {
    number: "04",
    title: "Haz la Diferencia",
    description:
      "Pon tus dones al servicio de otros y genera un impacto positivo.",
  },
];

const Mission = () => {
  return (
    <section className="bg-[#f5f5f3] py-24 md:py-32">
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
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Nuestra misión
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
              Una vida transformada puede transformar otras.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-neutral-600 md:ml-auto md:text-lg">
            En PowerHouse creemos que cada persona tiene un propósito.
            Queremos acompañarte en cada etapa de ese camino.
          </p>

        </motion.div>

        {/* Missions */}
        <div className="grid gap-4 md:grid-cols-2">

          {missions.map((mission, index) => (
            <motion.article
              key={mission.number}
              className="group relative min-h-[320px] overflow-hidden rounded-[2rem] bg-neutral-950 p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:min-h-[360px] md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >

              {/* Number */}
              <span className="text-sm font-medium text-white/40">
                {mission.number}
              </span>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">

                <div className="mb-4 h-px w-12 bg-white/30 transition-all duration-500 group-hover:w-24" />

                <h3 className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
                  {mission.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/60 md:text-base">
                  {mission.description}
                </p>

              </div>

              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-150" />

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Mission;