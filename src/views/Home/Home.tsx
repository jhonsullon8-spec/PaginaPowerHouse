import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { getWordPressImageUrl } from "../../data/images";

interface Metric {
	value: number;
	suffix: string;
	label: string;
}

interface Front {
	number: string;
	title: string;
	description: string;
	expandedDescription: string;
	image: string;
	gallery: string[];
}

const ArrowUpRight = () => (
	<svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
		<path d="M3.333 12.667 12.667 3.333M5.333 3.333h7.334v7.334" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
	</svg>
);

const AnimatedMetric = ({ metric }: { metric: Metric }) => {
	const [count, setCount] = useState(() => {
		if (typeof window === "undefined") return 0;
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? metric.value : 0;
	});
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.disconnect();
			}
		}, { threshold: 0.35 });

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) return;
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduceMotion) {
			return;
		}

		const duration = 1200;
		const startedAt = performance.now();
		let frame = 0;
		const update = (now: number) => {
			const progress = Math.min((now - startedAt) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.round(metric.value * eased));
			if (progress < 1) frame = requestAnimationFrame(update);
		};

		frame = requestAnimationFrame(update);
		return () => cancelAnimationFrame(frame);
	}, [isVisible, metric.value]);

	return (
		<div ref={ref} className="border-l border-white/15 pl-5">
			<p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{count.toLocaleString("es-PE")}{metric.suffix}</p>
			<p className="mt-2 max-w-[12rem] text-sm leading-6 text-white/55">{metric.label}</p>
		</div>
	);
};

const Home = () => {
	const { t } = useTranslation();
	const metrics: Metric[] = [
		{ value: 14, suffix: "+", label: t("home.metrics.years") },
		{ value: 500000, suffix: "+", label: t("home.metrics.people") },
		{ value: 1000, suffix: "+", label: t("home.metrics.leaders") },
	];
	const fronts: Front[] = [
		{ number: "01", title: t("mission.missionCard1Title"), description: t("mission.missionCard1Short"), expandedDescription: t("mission.missionCard1Expanded"), image: getWordPressImageUrl("2026/01/in1.jpg"), gallery: [getWordPressImageUrl("2026/02/4-1-scaled.jpg"), getWordPressImageUrl("2026/02/5-scaled.jpg"), getWordPressImageUrl("2026/02/3-scaled.jpg")] },
		{ number: "02", title: t("mission.missionCard2Title"), description: t("mission.missionCard2Short"), expandedDescription: t("mission.missionCard2Expanded"), image: getWordPressImageUrl("2026/02/proposito.jpg"), gallery: [getWordPressImageUrl("2026/02/libertad5.jpg"), getWordPressImageUrl("2026/02/libertad4-scaled.jpg"), getWordPressImageUrl("2026/02/libertad3-scaled.jpg")] },
		{ number: "03", title: t("mission.missionCard3Title"), description: t("mission.missionCard3Short"), expandedDescription: t("mission.missionCard3Expanded"), image: getWordPressImageUrl("2026/02/DOMINGO-13-08645-scaled.jpg"), gallery: [getWordPressImageUrl("2026/02/proposito3.jpg"), getWordPressImageUrl("2026/02/proposito2.jpg"), getWordPressImageUrl("2026/02/Proposito5-scaled.jpg")] },
		{ number: "04", title: t("mission.missionCard4Title"), description: t("mission.missionCard4Short"), expandedDescription: t("mission.missionCard4Expanded"), image: getWordPressImageUrl("2022/02/89226359_1819160668217692_3004242886687457280_n.jpg"), gallery: [getWordPressImageUrl("2026/02/diferencia3-scaled.jpg"), getWordPressImageUrl("2026/02/diferencia4-scaled.jpg"), getWordPressImageUrl("2026/02/diferencia5-scaled.jpg")] },
	];
	const [selectedFront, setSelectedFront] = useState<Front | null>(null);

	return (
		<div className="overflow-hidden bg-[#F5F5F3] text-[#111111]">
			<section className="relative flex min-h-[min(820px,100svh)] items-end overflow-hidden bg-[#111111] pb-16 pt-36 text-white sm:pb-20 md:pb-28">
				<img src={getWordPressImageUrl("2026/02/diferencia1-scaled.jpg")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
				<div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-[#111111]/35" />
				<div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full border border-[#C1121F]/35 shadow-[0_0_100px_rgba(193,18,31,0.2)]" />
				<div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
					<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-4xl">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E3424D]">PowerHouse Servolución Perú</p>
						<h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">{t("home.heroTitle")}</h1>
						<p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{t("home.heroDescription")}</p>
						<div className="mt-9 flex flex-wrap gap-3">
							<a href="/contacto" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#C1121F] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]">{t("home.volunteer")} <ArrowUpRight /></a>
							<a href="#programas" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]">{t("home.discover")}</a>
						</div>
					</motion.div>
					<p className="mt-20 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">01 / {t("home.scroll")}</p>
				</div>
			</section>

			<section id="programas" className="bg-[#F5F5F3] py-24 text-[#111111] md:py-32">
				<div className="mx-auto max-w-7xl px-6 md:px-10">
					<div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
						<motion.header initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
							<span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E3424D]">{t("home.programsEyebrow")}</span>
							<h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{t("home.programsTitle")}</h2>
							<p className="mt-6 max-w-xl text-lg leading-8 text-[#737373]">{t("common.missionOrganization")}</p>
						</motion.header>
						<motion.div className="w-full overflow-hidden rounded-[1.5rem] bg-[#111111] shadow-[0_18px_50px_rgba(17,17,17,0.16)]" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
							<div className="relative w-full pt-[56.25%]">
								<iframe
									src={`https://www.youtube.com/embed/NGWDnF3hL-c?feature=oembed&rel=0&origin=${encodeURIComponent(window.location.origin)}`}
									title={t("mission.videoTitle")}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									className="absolute inset-0 h-full w-full"
								/>
							</div>
							<a href="https://www.youtube.com/watch?v=NGWDnF3hL-c" target="_blank" rel="noopener noreferrer" className="block bg-[#111111] px-4 py-3 text-center text-xs font-medium text-white/70 transition-colors hover:text-white">{t("mission.viewYouTube")}</a>
						</motion.div>
					</div>

					<div className="mt-16 grid gap-6 sm:grid-cols-2">
						{fronts.map((front, index) => (
							<motion.button key={front.number} type="button" onClick={() => setSelectedFront(front)} className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-4 text-left text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(193,18,31,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F5F3]" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
								<div className="relative min-h-[220px] overflow-hidden rounded-[1.25rem] bg-[#0a0a0a]">
									<img src={front.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
									<div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
									<div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#C1121F]/90 text-sm font-bold text-white backdrop-blur-sm">{front.number}</div>
								</div>
								<div className="flex flex-1 flex-col px-3 pb-4 pt-6">
									<h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{front.title}</h3>
									<p className="mt-3 text-sm leading-6 text-white/60">{front.description}</p>
									<span className="mt-auto inline-flex w-fit items-center gap-2 border-b-2 border-[#C1121F] pb-2 pt-6 text-sm font-semibold text-[#E3424D] transition-colors group-hover:border-[#E3424D]">{t("services.details")} <ArrowUpRight /></span>
								</div>
							</motion.button>
						))}
					</div>
				</div>
			</section>

		<AnimatePresence>
				{selectedFront && (
					<motion.div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-8 sm:px-6 sm:py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedFront(null)}>
						<div className="fixed inset-0 bg-[#0a0a0a]/90 backdrop-blur-md" aria-hidden="true" />
						<motion.div role="dialog" aria-modal="true" aria-label={selectedFront.title} className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#111111] to-[#1a1a1a] shadow-[0_40px_100px_rgba(0,0,0,0.7)]" initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} onClick={(event) => event.stopPropagation()}>
							<button type="button" onClick={() => setSelectedFront(null)} aria-label={t("common.close")} className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]/80 text-xl text-white backdrop-blur-sm transition-colors hover:bg-[#C1121F]">×</button>
							<div className="relative min-h-[350px] sm:min-h-[420px]">
								<img src={selectedFront.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-[#111111]" />
								<div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
									<span className="text-sm font-bold tracking-[0.2em] text-[#E3424D]">{selectedFront.number}</span>
									<h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{selectedFront.title}</h2>
								</div>
							</div>
							<div className="p-8 sm:p-10">
								<p className="text-base leading-8 text-white/70">{selectedFront.expandedDescription}</p>
								<div className="mt-8 grid grid-cols-3 gap-3">
									{selectedFront.gallery.map((image) => (
										<img key={image} src={image} alt="" loading="lazy" className="aspect-square w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105" />
									))}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<section className="bg-[#171717] py-24 text-white md:py-28">
				<div className="mx-auto max-w-7xl px-6 md:px-10">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
						<div>
							<span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E3424D]">{t("home.impactEyebrow")}</span>
							<h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{t("home.impactTitle")}</h2>
						</div>
						<div className="grid gap-8 sm:grid-cols-3">{metrics.map((metric) => <AnimatedMetric key={metric.label} metric={metric} />)}</div>
					</div>
				</div>
			</section>

			<section className="bg-[#F5F5F3] px-6 py-24 md:px-10 md:py-32">
				<div className="mx-auto max-w-4xl text-center">
					<span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C1121F]">{t("home.testimonialEyebrow")}</span>
					<blockquote className="mt-7 font-serif text-3xl leading-tight text-[#111111] sm:text-5xl">“{t("home.testimonialText")}”</blockquote>
					<p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#737373]">{t("home.testimonialAttribution")}</p>
				</div>
			</section>

			<section className="grid md:grid-cols-2">
				<div className="bg-[#C1121F] px-6 py-16 text-white sm:px-10 md:px-14 md:py-24">
					<span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{t("home.volunteerEyebrow")}</span>
					<h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{t("home.volunteerTitle")}</h2>
					<a href="/contacto" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-colors hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#C1121F]">{t("home.volunteerButton")} <ArrowUpRight /></a>
				</div>
				<div className="bg-[#111111] px-6 py-16 text-white sm:px-10 md:px-14 md:py-24">
					<span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E3424D]">{t("home.donationEyebrow")}</span>
					<h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{t("home.donationTitle")}</h2>
					<p className="mt-5 max-w-md text-base leading-7 text-white/55">{t("home.donationDescription")}</p>
					<button type="button" onClick={() => window.dispatchEvent(new Event("powerhouse:open-donation"))} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-[#E3424D] hover:text-[#E3424D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3424D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]">{t("home.donationButton")} <ArrowUpRight /></button>
				</div>
			</section>
		</div>
	);
};

export default Home;