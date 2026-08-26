import { getWordPressImageUrl } from "../../data/images";

const primaryLinks = [
	{ label: "Inicio", href: "/" },
	{ label: "Nosotros", href: "/nosotros" },
	{ label: "Creencias", href: "/creencias" },
	{ label: "Servicios", href: "/servicios" },
	{ label: "Ministerios", href: "/ministerios" },
];

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
	{ label: "TikTok", ariaLabel: "Visitar nuestro TikTok", href: "https://www.tiktok.com/@powerhouseperu", icon: TikTokIcon },
	{ label: "Facebook", ariaLabel: "Visitar nuestra página de Facebook", href: "https://www.facebook.com/powerhouselatam", icon: FacebookIcon },
	{ label: "Instagram", ariaLabel: "Visitar nuestro Instagram", href: "https://www.instagram.com/powerhouselatam", icon: InstagramIcon },
	{ label: "YouTube", ariaLabel: "Visitar nuestro canal de YouTube", href: "https://www.youtube.com/@_powerhousechurchperu", icon: YouTubeIcon },
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
	return (
		<footer className="overflow-hidden bg-[#101010] text-white" aria-labelledby="footer-title">
			<div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 md:px-10 md:pt-20 lg:px-12">
				<div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-16 lg:pb-16">
					<div className="max-w-md">
						<a
							href="/"
							aria-label="PowerHouse, volver al inicio"
							className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010]"
						>
							<img
								src={getWordPressImageUrl("2022/01/logo-powerhouse-negro.png")}
								alt="PowerHouse"
								className="h-10 w-auto brightness-0 invert sm:h-12"
							/>
						</a>
						<h2 id="footer-title" className="mt-8 max-w-sm text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
							Un lugar para vivir tu propósito.
						</h2>
						<p className="mt-5 max-w-sm text-sm leading-7 text-white/55 sm:text-base">
							Una comunidad que cree en las personas, la fe y el impacto que podemos generar juntos.
						</p>
						<div className="mt-8">
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Síguenos en nuestras redes</p>
							<ul className="flex flex-wrap gap-3" aria-label="Redes sociales">
								{socialLinks.map((social) => {
									const Icon = social.icon;
									const hasUrl = social.href.length > 0;

									return (
										<li key={social.label}>
											<a
												href={hasUrl ? social.href : undefined}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={social.ariaLabel}
												aria-disabled={!hasUrl}
												className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010] ${
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

					<nav aria-label="Navegación del pie de página">
						<p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#E3424D]">Explora</p>
						<ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-y-3">
							{primaryLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010] sm:text-base"
									>
										<span className="h-px w-0 bg-[#E3424D] transition-all duration-300 group-hover:w-3" />
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#E3424D]">Conversemos</p>
						<p className="max-w-xs text-sm leading-7 text-white/55 sm:text-base">
							¿Tienes alguna consulta? Estamos aquí para recibirte y acompañarte.
						</p>
						<a
							href="/contacto"
							className="group mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E3424D] hover:shadow-[0_10px_25px_rgba(193,18,31,0.25)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010]"
						>
							Contáctanos
							<ArrowUpRight />
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} PowerHouse. Todos los derechos reservados.</p>
					<a
						href="/"
						className="group inline-flex w-fit items-center gap-2 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010]"
					>
						Volver al inicio
						<ArrowUpRight />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
