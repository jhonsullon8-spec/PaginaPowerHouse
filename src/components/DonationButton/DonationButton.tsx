import { useState, useEffect, useRef, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

const QR_IMAGE = "https://perupowerhouse.com/wp-content/uploads/2026/03/QR-yape-plin.jpeg";

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DonationButton = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const bankAccounts = [
    {
      currency: t("donate.currencySoles"),
      accountNumber: "001-0667-0100005066",
      cci: "011-667-00010000506634",
    },
    {
      currency: t("donate.currencyDollars"),
      accountNumber: "001-0667-010000507438",
      cci: "011-667-00010000507438",
    },
  ];
  const [imageExpanded, setImageExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <>
      {/* Floating button — positioned above WhatsApp button */}
      <div className="fixed bottom-[88px] right-5 z-50 sm:bottom-[108px] sm:right-7">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          title={t("donate.ariaOpen")}
          aria-label={t("donate.ariaOpen")}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#C1121F] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#8F0D17] hover:shadow-[0_12px_30px_rgba(193,18,31,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:h-16 sm:w-16"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-[#C1121F]/35 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]" />
          <HeartIcon />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-[#101010] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
           {t("donate.tooltipDonate")}
          </span>
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[#111111]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={t("donate.title")}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111111] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111111]/60 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#C1121F]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] sm:right-6 sm:top-6"
                aria-label={t("donate.close")}
              >
                <CloseIcon />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C1121F]/20 bg-[#C1121F]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
                  <HeartIcon />
                  {t("donate.title")}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {t("donate.subtitle")}
                </h3>

                <div className="mt-4 h-px w-12 bg-[#C1121F]" />
              </div>

              {/* QR Image */}
              <div className="px-4 pt-6 sm:px-6">
                <button
                  type="button"
                  onClick={() => setImageExpanded(true)}
                  className="group mx-auto block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/[0.06] bg-white p-3 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] sm:p-4"
                  aria-label={t("donate.ariaExpand")}
                >
                  <img
                    src={QR_IMAGE}
                    alt={t("donate.title")}
                    className="h-auto w-full object-contain"
                  />
                </button>
              </div>

              {/* Bank accounts */}
              <div className="px-8 pb-8 pt-6 sm:px-10 sm:pb-10">
                <p className="mb-6 text-center text-sm leading-6 text-neutral-400">
                  {t("donate.bankTransfer")}
                </p>

                <div className="space-y-4">
                  {bankAccounts.map((account, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5"
                    >
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C1121F]">
                        {t("donate.accountLabel")} {account.currency}
                      </p>

                      <div className="space-y-2 text-sm text-white/80">
                        <div className="flex justify-between gap-4">
                          <span className="shrink-0 text-white/40">
                            {t("donate.accountNumber")}
                          </span>
                          <span className="text-right font-mono">
                            {account.accountNumber}
                          </span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="shrink-0 text-white/40">CCI</span>
                          <span className="text-right font-mono">
                            {account.cci}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Close footer */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold tracking-wide text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                  >
                    {t("donate.close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded QR image overlay */}
      <AnimatePresence>
        {imageExpanded && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setImageExpanded(false)}
          >
            <div className="fixed inset-0 bg-[#111111]/90 backdrop-blur-md" aria-hidden="true" />

            <motion.div
              className="relative z-10 w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setImageExpanded(false)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#C1121F]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] sm:-top-14"
                aria-label={t("donate.closeImage")}
              >
                <CloseIcon />
              </button>

              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white p-4 shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:p-6">
                <img
                  src={QR_IMAGE}
                  alt={t("donate.title")}
                  className="h-auto w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationButton;
