import { useTranslation } from "react-i18next";

const EventCard = ({ name, time, description, imageSrc, timeBelowImage }: { name: string; time?: string; description?: string; imageSrc?: string; timeBelowImage?: boolean }) => (
  <div className="flex flex-col gap-2">
    <h4 className="font-semibold leading-snug text-white/90">{name}</h4>
    {description && <p className="text-xs leading-5 text-white/45">{description}</p>}
    {!timeBelowImage && time && <span className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">{time}</span>}
    {imageSrc && <img src={imageSrc} alt="" className="w-full rounded-xl object-cover" />}
    {timeBelowImage && time && <span className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">{time}</span>}
  </div>
);

const DayColumn = ({ shortLabel, label, children }: { shortLabel: string; label: string; children?: React.ReactNode }) => (
  <div className="flex flex-col border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
    <div className="mb-6 border-b border-[#2563EB]/25 pb-5">
      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8]">{shortLabel}</span>
      <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{label}</h3>
    </div>
    <div className="flex flex-1 flex-col justify-end gap-7">{children}</div>
  </div>
);

const WeeklyAgenda = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 translate-x-1/3 rounded-full bg-[#2563EB]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        <header className="mb-14 md:mb-20">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-14">
            <div className="flex-1 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#38BDF8]">{t("agenda.eyebrow")}</span>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">{t("agenda.title")}</span>
                <span className="mt-2 block text-2xl font-medium text-white/80 sm:text-3xl md:text-4xl">{t("agenda.title2")}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/50 md:text-lg">{t("agenda.description")}</p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-1.5">
              <img src="https://perupowerhouse.com/wp-content/uploads/2021/05/cropped-POWERH-BLANC.png" alt="PowerHouse" className="w-10 object-contain md:w-12" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">PowerHouse</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Church Peru</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-5">

          <DayColumn shortLabel={t("agenda.tuesday_short")} label={t("agenda.tuesday_full")}>
            <EventCard name="Reunión de chicas" imageSrc="https://perupowerhouse.com/wp-content/uploads/2022/01/Sin-titulo-1.png" timeBelowImage time="8 PM" />
          </DayColumn>

          <DayColumn shortLabel={t("agenda.wednesday_short")} label={t("agenda.wednesday_full")}>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold uppercase leading-snug text-white/90">{t("agenda.wed_men")}</h4>
              <img src="https://perupowerhouse.com/wp-content/uploads/2022/01/manchurch.jpg" alt="Manchurch" className="w-full rounded-xl object-cover" />
              <img src="https://perupowerhouse.com/wp-content/uploads/2026/01/descarga-4.jpg" alt="" className="mt-2 w-full rounded-xl object-cover" />
              <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">7 PM</span>
            </div>
          </DayColumn>

          <DayColumn shortLabel={t("agenda.thursday_short")} label={t("agenda.thursday_full")}>
          </DayColumn>

          <DayColumn shortLabel={t("agenda.saturday_short")} label={t("agenda.saturday_full")}>
          </DayColumn>

          <DayColumn shortLabel={t("agenda.sunday_short")} label={t("agenda.sunday_full")}>
          </DayColumn>

        </div>
      </div>
    </section>
  );
};

export default WeeklyAgenda;
