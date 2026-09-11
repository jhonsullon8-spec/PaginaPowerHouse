import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const ClockIcon = () => (
  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
    <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

interface CalendarEvent {
  time: string;
  title: string;
  description?: string;
}

interface Day {
  day: string;
  date: string;
  events: CalendarEvent[];
}

const WeeklyCalendar = () => {
  const { t } = useTranslation();

  const weekDays: Day[] = [
    {
      day: t("calendar.monday"),
      date: t("calendar.mon"),
      events: [
        { time: "07:00 PM", title: t("calendar.event_prayer"), description: t("calendar.event_prayer_desc") },
      ],
    },
    {
      day: t("calendar.tuesday"),
      date: t("calendar.tue"),
      events: [
        { time: "07:00 PM", title: t("calendar.event_bible"), description: t("calendar.event_bible_desc") },
        { time: "08:30 PM", title: t("calendar.event_worship"), description: t("calendar.event_worship_desc") },
      ],
    },
    {
      day: t("calendar.wednesday"),
      date: t("calendar.wed"),
      events: [
        { time: "06:30 PM", title: t("calendar.event_kids"), description: t("calendar.event_kids_desc") },
        { time: "08:00 PM", title: t("calendar.event_leaders"), description: t("calendar.event_leaders_desc") },
      ],
    },
    {
      day: t("calendar.thursday"),
      date: t("calendar.thu"),
      events: [
        { time: "07:00 PM", title: t("calendar.event_youth"), description: t("calendar.event_youth_desc") },
      ],
    },
    {
      day: t("calendar.friday"),
      date: t("calendar.fri"),
      events: [
        { time: "07:30 PM", title: t("calendar.event_groups"), description: t("calendar.event_groups_desc") },
      ],
    },
    {
      day: t("calendar.saturday"),
      date: t("calendar.sat"),
      events: [
        { time: "09:00 AM", title: t("calendar.event_community"), description: t("calendar.event_community_desc") },
        { time: "04:00 PM", title: t("calendar.event_rehearsal"), description: t("calendar.event_rehearsal_desc") },
      ],
    },
    {
      day: t("calendar.sunday"),
      date: t("calendar.sun"),
      events: [
        { time: "09:00 AM", title: t("calendar.event_service1"), description: t("calendar.event_service1_desc") },
        { time: "11:15 AM", title: t("calendar.event_service2"), description: t("calendar.event_service2_desc") },
        { time: "05:00 PM", title: t("calendar.event_service3"), description: t("calendar.event_service3_desc") },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F5F3] py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C1121F]/[0.06] blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C1121F]">
            {t("calendar.eyebrow")}
          </span>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
            {t("calendar.title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#737373] md:text-lg">
            {t("calendar.description")}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {weekDays.map((day, index) => {
            const isLong = day.events.length > 1;
            return (
              <motion.article
                key={day.day}
                className={`flex flex-col rounded-[1.5rem] border p-6 ${isLong ? "border-[#C1121F]/25 bg-white shadow-[0_24px_60px_rgba(17,17,17,0.07)]" : "border-[#E5E5E2] bg-white/80"}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <header className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737373]">
                      {day.date}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#111111]">
                      {day.day}
                    </h3>
                  </div>
                  <span
                    className={`flex h-9 shrink-0 items-center justify-center rounded-full px-3 text-xs font-bold tabular-nums ${isLong ? "bg-[#C1121F] text-white" : "bg-[#111111]/5 text-[#111111]"}`}
                  >
                    {day.events.length}
                  </span>
                </header>

                <ul className={`flex flex-col gap-3 ${isLong ? "max-h-64 overflow-y-auto pr-1 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#C1121F]/30" : ""}`}>
                  {day.events.map((event) => (
                    <li
                      key={`${day.day}-${event.title}`}
                      className="group rounded-xl border border-[#EDEDEA] bg-[#FAFAF8] p-4 transition-colors duration-300 hover:border-[#C1121F]/30 hover:bg-white"
                    >
                      <div className="flex items-center gap-2 text-[#C1121F]">
                        <ClockIcon />
                        <span className="text-xs font-semibold tracking-wide tabular-nums">
                          {event.time}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-semibold leading-tight text-[#111111]">
                        {event.title}
                      </p>
                      {event.description && (
                        <p className="mt-1 text-xs leading-5 text-[#737373]">
                          {event.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-xl text-center text-sm leading-6 text-[#737373]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("calendar.notice")}
        </motion.p>
      </div>
    </section>
  );
};

export default WeeklyCalendar;