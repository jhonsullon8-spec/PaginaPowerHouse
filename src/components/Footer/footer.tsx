import { getWordPressImageUrl } from "../../data/images";
import { useTranslation } from "react-i18next";

const TikTokIcon = () => (
	<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M16.7 3c.3 2.4 1.6 3.8 4 4v3.2a9 9 0 0 1-4-.9v6.1a6.6 6.6 0 1 1-5.7-6.5v3.3a3.4 3.4 0 1 0 2.5 3.2V3h3.2Z" />
	</svg>
);

const FacebookIcon = () => (
	<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.8v8h3.4Z" />
	</svg>
);

const InstagramIcon = () => (
	<svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
		<rect height="16" rx="4" stroke="currentColor" strokeWidth="1.8" width="16" x="4" y="4" />
		<circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
		<circle cx="17.4" cy="6.7" fill="currentColor" r="1" />
	</svg>
);

const YouTubeIcon = () => (
	<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
	</svg>
);

const socialLinks = [
	{ label: "TikTok", ariaLabelKey: "common.socialTikTok", href: "https://www.tiktok.com/@powerhouseperu", icon: TikTokIcon },
	{ label: "Facebook", ariaLabelKey: "common.socialFacebook", href: "https://www.facebook.com/powerhouselatam", icon: FacebookIcon },
	{ label: "Instagram", ariaLabelKey: "common.socialInstagram", href: "https://www.instagram.com/powerhouselatam", icon: InstagramIcon },
	{ label: "YouTube", ariaLabelKey: "common.socialYouTube", href: "https://www.youtube.com/@_powerhousechurchperu", icon: YouTubeIcon },
];

const ArrowUpRight = () => (
	<svg
		aria-hidden="true"
		className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path
			d="M3.333 12.667 12.667 3.333M5.333 3.333h7.334v7.334"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
		/>
	</svg>
);

const Footer = () => {
	const { t } = useTranslation();

	const primaryLinks = [
		{ label: t("nav.home"), href: "/" },
		{ label: t("nav.about"), href: "/nosotros" },
		{ label: t("nav.beliefs"), href: "/creencias" },
		{ label: t("nav.services"), href: "/servicios" },
		{ label: t("nav.grupos"), href: "/grupos-de-conexion" },
	];

	return (
		<footer className="relative overflow-hidden bg-[#0D0D0D] text-white" aria-labelledby="footer-title">
			<div className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full border border-[#C1121F]/20 shadow-[0_0_100px_rgba(193,18,31,0.14)]" />
			<div className="mx-auto max-w-7xl px-5 pb-6 pt-10 sm:px-8 md:px-10 md:pt-14 lg:px-12">
				<div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#E3424D]">
					<span className="h-px w-12 bg-[#C1121F]" />
					<span>PowerHouse Servolution</span>
				</div>
				<div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.45fr_0.75fr_0.95fr] lg:gap-12 lg:pb-12">
					<div className="max-w-lg">
						<a
							href="/"
							aria-label={t("common.ariaBackHome")}
							className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D0D]"
						>
							<img
								src={getWordPressImageUrl("2022/01/logo-powerhouse-negro.png")}
								alt="PowerHouse"
								className="h-9 w-auto brightness-0 invert sm:h-10"
							/>
						</a>
						<h2 id="footer-title" className="mt-6 max-w-xl text-2xl font-semibold leading-[1.1] tracking-tight sm:text-3xl lg:text-4xl">
							{t("common.footerTitle")}
						</h2>
						<p className="mt-4 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
							{t("common.footerDescription")}
						</p>
						<div className="mt-6">
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">{t("common.followUs")}</p>
							<ul className="flex flex-wrap gap-3" aria-label={t("common.social")}>
								{socialLinks.map((social) => {
									const Icon = social.icon;
									const hasUrl = social.href.length > 0;

									return (
										<li key={social.label}>
											<a
												href={hasUrl ? social.href : undefined}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={t(social.ariaLabelKey)}
												aria-disabled={!hasUrl}
												className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D0D] ${
													hasUrl
														? "border-white/15 bg-white/[0.03] text-white/70 hover:-translate-y-1 hover:border-[#C1121F] hover:bg-[#C1121F] hover:text-white"
														: "cursor-not-allowed border-white/10 bg-white/[0.02] text-white/35"
												}`}
											>
												<span className="sr-only">{social.label}</span>
												<Icon />
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<nav aria-label={t("common.footerNav")}>
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E3424D]">{t("common.explore")}</p>
						<ul className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-1 lg:gap-y-3">
							{primaryLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:translate-x-1 hover:text-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D0D]"
									>
										<span className="h-px w-0 bg-[#E3424D] transition-all duration-300 group-hover:w-3" />
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="border-l border-[#C1121F]/40 pl-6 sm:pl-8">
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E3424D]">{t("common.talk")}</p>
						<p className="max-w-xs text-sm leading-7 text-white/55 sm:text-base">
							{t("common.contactDescription")}
						</p>
						<a
							href="/contacto"
							className="group mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#C1121F] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E3424D] hover:shadow-[0_10px_25px_rgba(193,18,31,0.25)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D0D]"
						>
							{t("common.contactUs")}
							<ArrowUpRight />
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} PowerHouse. {t("common.copyright")}</p>
					<a
						href="/"
						className="group inline-flex w-fit items-center gap-2 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D0D]"
					>
						{t("common.backHome")}
						<ArrowUpRight />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
