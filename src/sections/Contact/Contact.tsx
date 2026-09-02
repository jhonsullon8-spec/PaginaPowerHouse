import { useState, type FormEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.06849040459!2d-80.635!3d-5.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1008c1a636fb%3A0x28a04e6724afb097!2sPowerHouse%20Church%20Peru!5e0!3m2!1ses!2spe!4v1";

const COMPANY_EMAIL = "";

const discoveryOptions = [
  "Amig@s",
  "Redes Sociales",
  "Familiares",
  "Volante (Tarjeta de invitación)",
  "Grupo de Conexión",
  "Otro",
];

const fieldControlClasses = "mt-1 w-full rounded-xl border border-[#DADAD6] bg-[#FAFAF8] px-4 py-3 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#A0A0A0] focus:border-[#C1121F] focus:ring-2 focus:ring-[#C1121F]/10";

const Contact = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(false);
    setError("");

    if (!COMPANY_EMAIL) {
      setError("El formulario está listo. Configura el correo empresarial para poder enviarlo.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = "Nueva bienvenida a PowerHouse";
    const body = [
      `¿Nos visita por primera vez?: ${formData.get("firstVisit")}`,
      `¿Cómo se enteró de PowerHouse o quién le invitó?: ${formData.get("discovery")}`,
      `Nombre y apellidos: ${formData.get("name")}`,
      `¿Decidió seguir a Jesús?: ${formData.get("faithDecision")}`,
      `Edad: ${formData.get("age")}`,
      `Estado civil: ${formData.get("maritalStatus")}`,
      `Número celular: ${formData.get("phone")}`,
      `Dirección de domicilio: ${formData.get("address")}`,
      `¿Desea llevar CRECER?: ${formData.get("growCourse")}`,
      `Voluntario que registró: ${formData.get("volunteer")}`,
    ].join("\n");

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <>
    <section className="min-h-screen bg-[#F5F5F3] px-6 pb-24 pt-36 text-[#111111] md:px-10 md:pb-32 md:pt-44">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <header className="max-w-md">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C1121F]">{t("common.contactEyebrow")}</span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{t("common.contactTitle")}</h1>
          <p className="mt-6 text-base leading-7 text-[#737373] md:text-lg">
            {t("common.contactDescription")}
          </p>
          <div className="mt-10 border-l-2 border-[#C1121F] pl-5 text-sm leading-7 text-[#737373]">
            Dios te bendiga grandemente.
          </div>
        </header>

        <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-[#E2E2DF] bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] sm:p-8 md:p-10">
          <div className="mb-9 border-b border-[#E5E5E2] pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#737373]">{t("common.formTitle")}</p>
            <p className="mt-2 text-sm text-[#A0A0A0]">{t("common.required")}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="¿Nos visitas por primera vez?" name="firstVisit" required>
              <select name="firstVisit" required className={fieldControlClasses}>
                <option value="">Selecciona una opción</option>
                <option>Sí</option>
                <option>No</option>
              </select>
            </Field>
            <Field label="¿Cómo te enteraste de PowerHouse o quién te invitó?" name="discovery" required>
              <select name="discovery" required className={fieldControlClasses}>
                <option value="">Selecciona una opción</option>
                {discoveryOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </Field>
            <Field label="Nombre y apellidos" name="name" required>
              <input name="name" required className={fieldControlClasses} placeholder="Tu respuesta" />
            </Field>
            <Field label="¿Decidiste hoy seguir a Jesús?" name="faithDecision" required>
              <select name="faithDecision" required className={fieldControlClasses}>
                <option value="">Selecciona una opción</option>
                <option>Sí</option>
                <option>No</option>
                <option>Soy Cristiano</option>
              </select>
            </Field>
            <Field label="Edad" name="age" required>
              <input name="age" type="number" min="1" max="120" required className={fieldControlClasses} placeholder="Tu respuesta" />
            </Field>
            <Field label="Estado civil" name="maritalStatus" required>
              <select name="maritalStatus" required className={fieldControlClasses}>
                <option value="">Selecciona una opción</option>
                <option>Soltero(a)</option>
                <option>Casado(a)</option>
                <option>Otro</option>
              </select>
            </Field>
            <Field label="Número celular" name="phone" required>
              <input name="phone" type="tel" required className={fieldControlClasses} placeholder="Tu respuesta" />
            </Field>
            <Field label="Dirección de domicilio" name="address" required>
              <input name="address" required className={fieldControlClasses} placeholder="Tu respuesta" />
            </Field>
            <Field label="¿Te gustaría llevar CRECER?" name="growCourse" required>
              <select name="growCourse" required className={fieldControlClasses}>
                <option value="">Selecciona una opción</option>
                <option>Sí</option>
                <option>No</option>
                <option>Más adelante</option>
              </select>
            </Field>
            <Field label="Voluntario que registró" name="volunteer" required>
              <input name="volunteer" required className={fieldControlClasses} placeholder="Tu respuesta" />
            </Field>
          </div>

          {error && <p className="mt-6 rounded-xl border border-[#C1121F]/20 bg-[#C1121F]/5 p-4 text-sm text-[#8F0D17]" role="alert">{error}</p>}
          {sent && <p className="mt-6 rounded-xl border border-[#18864B]/20 bg-[#18864B]/5 p-4 text-sm text-[#126A3B]" role="status">Tu correo está listo para enviarse.</p>}

          <button type="submit" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F0D17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 sm:w-auto">
            {t("common.send")}
          </button>
        </form>
      </div>
    </section>
    <div className="w-full">
      <iframe
        src={GOOGLE_MAPS_EMBED_SRC}
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de PowerHouse Church Peru en Google Maps"
        className="h-[400px] w-full md:h-[500px]"
      />
    </div>
  </>
  );
};

type FieldProps = { label: string; name: string; required?: boolean; children: ReactNode };

const Field = ({ label, name, required = false, children }: FieldProps) => (
  <label htmlFor={name} className="block">
    <span className="mb-2 block text-sm font-medium text-[#333333]">{label}{required && <span className="ml-1 text-[#C1121F]">*</span>}</span>
    {children}
  </label>
);

export default Contact;
