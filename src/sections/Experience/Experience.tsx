import { motion } from "motion/react";

const gallery = [
  {
    id: "01",
    title: "Imagen PowerHouse",
    className: "lg:row-span-2 lg:min-h-[560px]",
    aspectClass: "aspect-[4/5] lg:aspect-auto lg:h-full",
  },
  {
    id: "02",
    title: "Imagen PowerHouse",
    className: "",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "03",
    title: "Imagen PowerHouse",
    className: "",
    aspectClass: "aspect-[4/3]",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#f5f5f3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500">
            LA EXPERIENCIA
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
            Vive la experiencia PowerHouse
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Un espacio para crecer, conectarte y descubrir tu propósito en comunidad.
          </p>
        </motion.header>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.45fr_0.95fr]">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] bg-neutral-900 shadow-[0_24px_60px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-1 ${item.className}`}
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_42%),linear-gradient(135deg,#171717_0%,#2a2a2a_45%,#1b1b1b_100%)]" />

                <div className="absolute inset-0 scale-105 transition-transform duration-700 ease-out group-hover:scale-100" />

                <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <div className="text-5xl font-semibold leading-none tracking-[-0.08em] text-white/90 md:text-6xl">
                      {item.id}
                    </div>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-white/70">
                      {item.title}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-medium text-white/80">
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
