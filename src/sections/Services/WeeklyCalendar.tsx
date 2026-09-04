import { motion } from "motion/react";

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

const weekDays: Day[] = [
  {
    day: "Lunes",
    date: "LUN",
    events: [
      { time: "07:00 PM", title: "Oración Familiar", description: "Un espacio para orar por nuestras familias y comunidad." },
    ],
  },
  {
    day: "Martes",
    date: "MAR",
    events: [
      { time: "07:00 PM", title: "Estudio Bíblico", description: "Profundizamos en la Palabra de una manera práctica." },
      { time: "08:30 PM", title: "Ensayos de Adoración", description: "Practicamos las canciones para el fin de semana." },
    ],
  },
  {
    day: "Miércoles",
    date: "MIÉ",
    events: [
      { time: "06:30 PM", title: "Power Kids", description: "Los más pequeños aprenden y se divierten." },
      { time: "08:00 PM", title: "Reunión de Líderes", description: "Formación y seguimiento del equipo de ministerios." },
    ],
  },
  {
    day: "Jueves",
    date: "JUE",
    events: [
      { time: "07:00 PM", title: "Jóvenes", description: "Conectamos, crecemos y compartimos la fe." },
    ],
  },
  {
    day: "Viernes",
    date: "VIE",
    events: [
      { time: "07:30 PM", title: "Grupos de Conexión", description: "Pequeños grupos en casas para crecer juntos." },
    ],
  },
  {
    day: "Sábado",
    date: "SÁB",
    events: [
      { time: "09:00 AM", title: "Servicio Comunitario", description: "Impactamos nuestra comunidad con acciones concretas." },
      { time: "04:00 PM", title: "Ensayo General", description: "Preparación final para la celebración." },
    ],
  },
  {
    day: "Domingo",
    date: "DOM",
    events: [
      { time: "09:00 AM", title: "Primer Servicio", description: "Celebración con la comunidad." },
      { time: "11:15 AM", title: "Segundo Servicio", description: "Celebración en vivo para todos." },
      { time: "05:00 PM", title: "Servicio de la Tarde", description: "Cierre de la semana con adoración." },
    ],
  },
];

const WeeklyCalendar = () => {
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
            NUESTRA SEMANA
          </span>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
            Calendario Semanal de Actividades.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#737373] md:text-lg">
            Hay un espacio para cada etapa y momento de tu semana. Míralo, agenda y acompáñanos.
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
          Los horarios pueden variar por temporada. Te esperamos, ¡hay un lugar para ti!
        </motion.p>
      </div>
    </section>
  );
};

export default WeeklyCalendar;