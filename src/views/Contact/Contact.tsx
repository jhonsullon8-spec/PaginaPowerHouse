import { useState, type FormEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.06849040459!2d-80.635!3d-5.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1008c1a636fb%3A0x28a04e6724afb097!2sPowerHouse%20Church%20Peru!5e0!3m2!1ses!2spe!4v1";

const COMPANY_EMAIL = "";

const fieldControlClasses = "mt-1 w-full rounded-xl border border-[#DADAD6] bg-[#FAFAF8] px-4 py-3 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#A0A0A0] focus:border-[#C1121F] focus:ring-2 focus:ring-[#C1121F]/10";

const Contact = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const discoveryOptions = [
    t("contact.discoveryOption1"),
    t("contact.discoveryOption2"),
    t("contact.discoveryOption3"),
    t("contact.discoveryOption4"),
    t("contact.discoveryOption5"),
    t("contact.discoveryOption6"),
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(false);
    setError("");

    if (!COMPANY_EMAIL) {
      setError(t("contact.emailNotConfig"));
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = t("contact.emailSubject");
    const body = [
      `${t("contact.firstVisit")}: ${formData.get("firstVisit")}`,
      `${t("contact.discovery")}: ${formData.get("discovery")}`,
      `${t("contact.fullName")}: ${formData.get("name")}`,
      `${t("contact.faithDecision")}: ${formData.get("faithDecision")}`,
      `${t("contact.age")}: ${formData.get("age")}`,
      `${t("contact.maritalStatus")}: ${formData.get("maritalStatus")}`,
      `${t("contact.phone")}: ${formData.get("phone")}`,
      `${t("contact.address")}: ${formData.get("address")}`,
      `${t("contact.growCourse")}: ${formData.get("growCourse")}`,
      `${t("contact.volunteer")}: ${formData.get("volunteer")}`,
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
            {t("contact.greeting")}
          </div>
        </header>

        <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-[#E2E2DF] bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] sm:p-8 md:p-10">
          <div className="mb-9 border-b border-[#E5E5E2] pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#737373]">{t("common.formTitle")}</p>
            <p className="mt-2 text-sm text-[#A0A0A0]">{t("common.required")}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label={t("contact.firstVisit")} name="firstVisit" required>
              <select name="firstVisit" required className={fieldControlClasses}>
                <option value="">{t("contact.selectOption")}</option>
                <option>{t("contact.yes")}</option>
                <option>{t("contact.no")}</option>
              </select>
            </Field>
            <Field label={t("contact.discovery")} name="discovery" required>
              <select name="discovery" required className={fieldControlClasses}>
                <option value="">{t("contact.selectOption")}</option>
                {discoveryOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </Field>
            <Field label={t("contact.fullName")} name="name" required>
              <input name="name" required className={fieldControlClasses} placeholder={t("contact.placeholder")} />
            </Field>
            <Field label={t("contact.faithDecision")} name="faithDecision" required>
              <select name="faithDecision" required className={fieldControlClasses}>
                <option value="">{t("contact.selectOption")}</option>
                <option>{t("contact.yes")}</option>
                <option>{t("contact.no")}</option>
                <option>{t("contact.iamChristian")}</option>
              </select>
            </Field>
            <Field label={t("contact.age")} name="age" required>
              <input name="age" type="number" min="1" max="120" required className={fieldControlClasses} placeholder={t("contact.placeholder")} />
            </Field>
            <Field label={t("contact.maritalStatus")} name="maritalStatus" required>
              <select name="maritalStatus" required className={fieldControlClasses}>
                <option value="">{t("contact.selectOption")}</option>
                <option>{t("contact.single")}</option>
                <option>{t("contact.married")}</option>
                <option>{t("contact.other")}</option>
              </select>
            </Field>
            <Field label={t("contact.phone")} name="phone" required>
              <input name="phone" type="tel" required className={fieldControlClasses} placeholder={t("contact.placeholder")} />
            </Field>
            <Field label={t("contact.address")} name="address" required>
              <input name="address" required className={fieldControlClasses} placeholder={t("contact.placeholder")} />
            </Field>
            <Field label={t("contact.growCourse")} name="growCourse" required>
              <select name="growCourse" required className={fieldControlClasses}>
                <option value="">{t("contact.selectOption")}</option>
                <option>{t("contact.yes")}</option>
                <option>{t("contact.no")}</option>
                <option>{t("contact.later")}</option>
              </select>
            </Field>
            <Field label={t("contact.volunteer")} name="volunteer" required>
              <input name="volunteer" required className={fieldControlClasses} placeholder={t("contact.placeholder")} />
            </Field>
          </div>

          {error && <p className="mt-6 rounded-xl border border-[#C1121F]/20 bg-[#C1121F]/5 p-4 text-sm text-[#8F0D17]" role="alert">{error}</p>}
          {sent && <p className="mt-6 rounded-xl border border-[#18864B]/20 bg-[#18864B]/5 p-4 text-sm text-[#126A3B]" role="status">{t("contact.emailReady")}</p>}

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
        title={t("contact.ariaMaps")}
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
