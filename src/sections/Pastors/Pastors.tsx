import { motion } from "motion/react";

const pastor = {
  number: "01",
  name: "Nombre del pastor",
  info: "Información del pastor",
};

const Pastors = () => {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            NUESTROS PASTORES
          </span>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Personas que acompañan y guían nuestra comunidad.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
            Acompañamos a personas, familias y líderes con una visión de fe, servicio y comunidad.
          </p>
        </motion.header>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <motion.article
            className="overflow-hidden rounded-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#1f1f1f_0%,#2d2d2d_50%,#171717_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_38%)]" />

              <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-white/10 bg-white/5" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-5xl font-semibold leading-none tracking-[-0.08em] text-white/90 md:text-6xl">
                    {pastor.number}
                  </span>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                    Fotografía PowerHouse
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white/80">
                  +
                </div>
              </div>

              <div className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.article>

          <motion.article
            className="flex min-h-full items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-400">
                {pastor.number}
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {pastor.name}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-300 md:text-lg">
                {pastor.info}
              </p>

              <div className="mt-8 h-px w-16 bg-white/30" />

              <p className="mt-6 max-w-md text-sm leading-6 text-neutral-400 md:text-base">
                Liderazgo cercano, acompañamiento espiritual y visión para fortalecer la comunidad.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Pastors;
