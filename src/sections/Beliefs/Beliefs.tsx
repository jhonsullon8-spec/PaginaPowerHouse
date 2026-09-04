import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Beliefs = () => {
  const { t } = useTranslation();

  const beliefGroups = [
    {
      number: "01",
      title: t("beliefs.group1"),
      beliefs: [
        { title: t("beliefs.belief1_1_title"), description: t("beliefs.belief1_1_desc"), references: t("beliefs.belief1_1_ref") },
        { title: t("beliefs.belief1_2_title"), description: t("beliefs.belief1_2_desc"), references: t("beliefs.belief1_2_ref") },
        { title: t("beliefs.belief1_3_title"), description: t("beliefs.belief1_3_desc"), references: t("beliefs.belief1_3_ref") },
      ],
    },
    {
      number: "02",
      title: t("beliefs.group2"),
      beliefs: [
        { title: t("beliefs.belief2_1_title"), description: t("beliefs.belief2_1_desc"), references: t("beliefs.belief2_1_ref") },
        { title: t("beliefs.belief2_2_title"), description: t("beliefs.belief2_2_desc"), references: t("beliefs.belief2_2_ref") },
        { title: t("beliefs.belief2_3_title"), description: t("beliefs.belief2_3_desc"), references: t("beliefs.belief2_3_ref") },
        { title: t("beliefs.belief2_4_title"), description: t("beliefs.belief2_4_desc"), references: t("beliefs.belief2_4_ref") },
      ],
    },
    {
      number: "03",
      title: t("beliefs.group3"),
      beliefs: [
        { title: t("beliefs.belief3_1_title"), description: t("beliefs.belief3_1_desc"), references: t("beliefs.belief3_1_ref") },
        { title: t("beliefs.belief3_2_title"), description: t("beliefs.belief3_2_desc"), references: t("beliefs.belief3_2_ref") },
        { title: t("beliefs.belief3_3_title"), description: t("beliefs.belief3_3_desc"), references: t("beliefs.belief3_3_ref") },
      ],
    },
    {
      number: "04",
      title: t("beliefs.group4"),
      beliefs: [
        { title: t("beliefs.belief4_1_title"), description: t("beliefs.belief4_1_desc"), references: t("beliefs.belief4_1_ref") },
        { title: t("beliefs.belief4_2_title"), description: t("beliefs.belief4_2_desc"), references: t("beliefs.belief4_2_ref") },
        { title: t("beliefs.belief4_3_title"), description: t("beliefs.belief4_3_desc"), references: t("beliefs.belief4_3_ref") },
      ],
    },
    {
      number: "05",
      title: t("beliefs.group5"),
      beliefs: [
        { title: t("beliefs.belief5_1_title"), description: t("beliefs.belief5_1_desc"), references: t("beliefs.belief5_1_ref") },
        { title: t("beliefs.belief5_2_title"), description: t("beliefs.belief5_2_desc"), references: t("beliefs.belief5_2_ref") },
        { title: t("beliefs.belief5_3_title"), description: t("beliefs.belief5_3_desc"), references: t("beliefs.belief5_3_ref") },
      ],
    },
  ];

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
        <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{t("beliefs.beliefPassion")}</p>
        <a href="/contacto" className="group mt-6 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F5F3] md:mt-0">{t("common.talk")} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
  );
};

export default Beliefs;
