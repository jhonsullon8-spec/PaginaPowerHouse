import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const beliefGroups = [
  {
    number: "01",
    title: "Fundamentos de la verdad",
    beliefs: [
      {
        title: "La Santa Biblia",
        description: "Es la Palabra de Dios con autoridad. Única autoridad final para determinar toda verdad doctrinal. Inspirada, infalible e inerrante.",
        references: "2 TIMOTEO 3:16 · 2 PEDRO 1:20-21 · PROVERBIOS 30:5",
      },
      {
        title: "La Trinidad",
        description: "Un solo Dios, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo. Iguales y eternas en poder y gloria.",
        references: "1 JUAN 5:7 · MATEO 28:19 · LUCAS 1:35",
      },
      {
        title: "El Nacimiento Virginal",
        description: "Jesucristo fue concebido por Dios Padre mediante el Espíritu Santo en el vientre de la virgen María; por lo tanto, Él es el Hijo de Dios.",
        references: "MATEO 1:18, 23-25 · ISAÍAS 7:14",
      },
    ],
  },
  {
    number: "02",
    title: "Redención y salvación",
    beliefs: [
      {
        title: "Jesucristo — Señor y Salvador",
        description: "Dios Hijo, 100% Dios y 100% hombre. Vivió sin pecado, realizó milagros y murió en la cruz para expiar nuestros pecados. Resucitó al tercer día, ascendió y volverá con poder.",
        references: "JUAN 1:1, 14 · FILIPENSES 2:5-6 · 1 TIMOTEO 2:5",
      },
      {
        title: "Salvación por Gracia",
        description: "Somos salvos por gracia mediante la fe en Su obra terminada. Es un don de Dios, no resultado de esfuerzos humanos o buenas obras.",
        references: "EFESIOS 2:8-9 · ROMANOS 10:9-10 · TITO 3:5",
      },
      {
        title: "Arrepentimiento y Regeneración",
        description: "Compromiso de apartarnos del pecado para seguir a Cristo. Esencial para recibir redención y ser regenerados por el Espíritu Santo.",
        references: "HECHOS 2:21 · 1 JUAN 1:9 · JUAN 6:44",
      },
      {
        title: "Santificación",
        description: "Proceso continuo de someterse a la Palabra y al Espíritu para desarrollar el carácter de Cristo y vivir una vida piadosa.",
        references: "1 TESALONICENSES 4:3 · ROMANOS 12:1-2",
      },
    ],
  },
  {
    number: "03",
    title: "Espíritu Santo e iglesia",
    beliefs: [
      {
        title: "Bautismo en el Espíritu",
        description: "La promesa del Padre para capacitar a la Iglesia en la predicación del Evangelio con poder por toda la tierra.",
        references: "HECHOS 1:5, 2:1-4 · JOEL 2:28-29",
      },
      {
        title: "Dones del Espíritu",
        description: "Manifestaciones para edificar la iglesia y confirmar el Evangelio. Operan siempre en armonía con las Escrituras.",
        references: "1 CORINTIOS 12:1-31 · HEBREOS 2:4",
      },
      {
        title: "La Iglesia",
        description: "El Cuerpo de Cristo y morada de Dios, unida espiritualmente para cumplir la gran comisión de Jesús.",
        references: "EFESIOS 1:22 · JUAN 17:11, 20-23",
      },
    ],
  },
  {
    number: "04",
    title: "Sacramentos y provisión",
    beliefs: [
      {
        title: "Bautismo y Santa Cena",
        description: "Bautismo por inmersión como ordenanza y la Cena del Señor como comunión única en memoria de Su sacrificio.",
        references: "MATEO 28:19 · 1 CORINTIOS 11:23-25",
      },
      {
        title: "Sanidad Divina",
        description: "La sanación de enfermos forma parte de la obra de Jesús en la cruz y es una señal que acompaña a los creyentes.",
        references: "ISAÍAS 53:5 · SANTIAGO 5:14-16 · MATEO 8:16-17",
      },
      {
        title: "Plenitud y Provisión",
        description: "La voluntad del Padre es que alcancemos salud, éxito y plenitud espiritual, mental y financiera para servir mejor a los demás.",
        references: "3 JUAN 1:2 · 2 CORINTIOS 9:6-10 · JOSUÉ 1:8",
      },
    ],
  },
  {
    number: "05",
    title: "Eternidad y valores",
    beliefs: [
      {
        title: "Resurrección y Eternidad",
        description: "Resurrección física de los salvos para vida eterna (Cielo) y de los incrédulos para condenación eterna (Infierno).",
        references: "JUAN 5:29 · APOCALIPSIS 20:12-15 · MATEO 25:34",
      },
      {
        title: "Segunda Venida",
        description: "Jesucristo regresará física y visiblemente por segunda vez para establecer Su Reino en la tierra.",
        references: "HECHOS 1:9-11 · APOCALIPSIS 1:7",
      },
      {
        title: "Matrimonio y Sexualidad",
        description: "Pacto reservado únicamente para un hombre y una mujer. La expresión sexual se limita exclusivamente al matrimonio.",
        references: "GÉNESIS 2:18-24 · EFESIOS 5:31 · 1 CORINTIOS 6:18",
      },
    ],
  },
];

const Beliefs = () => {
  const { t } = useTranslation();

  return (
  <section className="relative overflow-hidden bg-[#F5F5F3] pb-24 pt-36 text-[#111111] md:pb-32 md:pt-44">
    <div className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#C1121F]/[0.06] blur-[110px]" />
    <div className="relative mx-auto max-w-7xl px-6 md:px-10">
      <motion.header
        className="max-w-3xl border-b border-[#D8D8D3] pb-12 md:pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C1121F]">{t("common.beliefsEyebrow")}</span>
        <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">{t("common.beliefsTitle")}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#737373] md:text-lg">{t("common.beliefsDescription")}</p>
      </motion.header>

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
        {beliefGroups.map((group) => (
          <motion.section
            key={group.number}
            aria-labelledby={`belief-group-${group.number}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mb-8 flex items-start gap-5 border-b border-[#D8D8D3] pb-5 md:mb-10 md:gap-8">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#C1121F]">{group.number}</span>
              <h2 id={`belief-group-${group.number}`} className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{group.title}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {group.beliefs.map((belief, index) => (
                <article key={belief.title} className={`group rounded-[1.25rem] border border-[#DEDED9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/35 hover:shadow-[0_18px_45px_rgba(17,17,17,0.08)] sm:p-8 ${group.beliefs.length === 3 && index === 2 ? "md:col-span-2 md:max-w-[calc(50%-0.625rem)]" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="h-2 w-2 rounded-full bg-[#C1121F] transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                    <span className="text-xs font-medium text-[#A0A0A0]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight sm:text-2xl">{belief.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">{belief.description}</p>
                  <p className="mt-6 border-t border-[#E8E8E4] pt-4 text-[10px] font-semibold leading-5 tracking-[0.14em] text-[#C1121F]">{belief.references}</p>
                </article>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <div className="mt-20 border-t-2 border-[#C1121F] pt-7 md:mt-28 md:flex md:items-center md:justify-between md:gap-10">
        <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">Nuestra pasión es ver a las familias salvadas por Jesús.</p>
        <a href="/contacto" className="group mt-6 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F5F3] md:mt-0">Conversemos <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
  );
};

export default Beliefs;
