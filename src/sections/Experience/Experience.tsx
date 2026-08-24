import { motion } from "motion/react";
import { getWordPressImageUrl } from "../../data/images";

const gallery = [
  {
    id: "01",
    title: "Imagen PowerHouse",
    className: "lg:row-span-2 lg:min-h-[560px]",
    aspectClass: "aspect-[4/5] lg:aspect-auto lg:h-full",
    image: getWordPressImageUrl("2026/02/diferencia1-scaled.jpg"),
  },
  {
    id: "02",
    title: "Imagen PowerHouse",
    className: "",
    aspectClass: "aspect-[4/3]",
    image: getWordPressImageUrl(
      "2026/01/1b769ac1-b724-4eb4-8506-c0976afc41c2.jpg",
    ),
  },
  {
    id: "03",
    title: "Imagen PowerHouse",
    className: "",
    aspectClass: "aspect-[4/3]",
    image: getWordPressImageUrl(
      "2022/01/189299167_4233682296695495_2672356163720843427_n.jpg",
    ),
  },
];

const Experience = () => {
  return (
    <section className="bg-[#F5F5F3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#737373]">
            LA EXPERIENCIA
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
            Vive la experiencia PowerHouse
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#737373] md:text-lg">
            Un espacio para crecer, conectarte y descubrir tu propósito en comunidad.
          </p>
        </motion.header>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.45fr_0.95fr]">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#111111] shadow-[0_24px_60px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-1 ${item.className}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div
                className={`relative overflow-hidden ${item.aspectClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-[#111111]/10" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <div className="text-5xl font-semibold leading-none tracking-[-0.08em] text-[#FFFFFF]/90 md:text-6xl">
                      {item.id}
                    </div>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-white/70">
                      {item.title}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C1121F]/50 bg-[#C1121F]/10 text-xs font-medium text-[#FFFFFF]/90">
                    +
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
