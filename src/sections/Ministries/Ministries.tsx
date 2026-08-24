import { motion } from "motion/react";

const ministries = [
  { id: "01", name: "Power Kids" },
  { id: "02", name: "Jóvenes" },
  { id: "03", name: "Comunidad" },
  { id: "04", name: "Servicio" },
];

const Ministries = () => {
  return (
    <section className="bg-[#F5F5F3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#737373]">
            NUESTROS MINISTERIOS
          </span>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
            Hay un lugar para ti.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#737373] md:text-lg">
            Descubre diferentes espacios para conectar, crecer y formar parte de la comunidad.
          </p>
        </motion.header>

        <div className="w-full">
          {ministries.map((ministry, index) => (
            <motion.a
              key={ministry.id}
              href="#"
              className="group flex w-full items-center justify-between gap-4 border-b border-[#D4D4D4] py-6 text-left transition-colors duration-300 hover:text-[#111111] md:py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 md:gap-6">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#C1121F] transition-opacity duration-300 group-hover:opacity-80">
                  {ministry.id}
                </span>

                <span className="text-2xl font-medium tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#1A1A1A] sm:text-3xl md:text-4xl">
                  {ministry.name}
                </span>
              </div>

              <span className="inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#C1121F] md:h-6 md:w-6"
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
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
