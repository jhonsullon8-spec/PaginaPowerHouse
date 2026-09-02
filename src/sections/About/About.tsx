import { motion } from "motion/react";
import { getWordPressImageUrl } from "../../data/images";

const pastorImageUrl = getWordPressImageUrl(
  "2026/03/Gemini_Generated_Image_emh38temh38temh3-processedlightpdf.com_.png",
);

const pastor = {
  number: "01",
  name: "Nombre del pastor",
  info: "Información del pastor",
};

const Nosotros = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#111111] bg-cover bg-[position:50%_35%] py-24 md:bg-center md:py-32"
      style={{ backgroundImage: `url(${pastorImageUrl})` }}
    >
      <div className="absolute inset-0 bg-[#111111]/90" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C1121F]">
            NOSOTROS
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
              <img
                src={pastorImageUrl}
                alt="Fotografía PowerHouse"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_42%] transition-transform duration-700 ease-out group-hover:scale-105 md:object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-5xl font-semibold leading-none tracking-[-0.08em] text-[#C1121F] md:text-6xl">
                    {pastor.number}
                  </span>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                    Fotografía PowerHouse
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C1121F]/50 bg-[#C1121F]/10 text-sm text-white/80">
                  +
                </div>
              </div>

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
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#C1121F]">
                {pastor.number}
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {pastor.name}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-300 md:text-lg">
                {pastor.info}
              </p>

              <div className="mt-8 h-px w-16 bg-[#C1121F]" />

              <div className="mt-6 max-w-md space-y-4 text-sm leading-6 text-neutral-400 md:text-base">
                <p>
                  Pastores principales de la Iglesia PowerHouse en
                  Latinoamérica. Hijos espirituales de G.F. Watkins y el Equipo
                  Génesis. Líderes de la iglesia en Perú durante 14 años, han
                  alcanzado a más de 500,000 personas en su región.
                </p>

                <p>
                  En 2020, lanzaron Hombres Alfa Internacional, un ministerio
                  de hombres enfocado en tres pilares principales: Identidad,
                  Afirmación y Autoridad. Esto los ha impulsado a capacitar y
                  discipular a más de 1,000 pastores y líderes hombres en
                  Latinoamérica.
                </p>

                <p>
                  Fundaron el modelo internacional de Hombres Alfa y lo han
                  difundido por Latinoamérica, Europa y Sudáfrica.
                </p>
              </div>

              <a
                href="https://phckatytx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C1121F] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                Conoce más
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
