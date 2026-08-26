import type { MouseEvent } from "react";

const WHATSAPP_NUMBER = "51951690209";
const WHATSAPP_MESSAGE =
	"Hola PowerHouse 😄 Deseo más información sobre ustedes, sus áreas de servicios, cursos, etc. Dios los bendiga.";

const WhatsAppIcon = () => (
	<svg aria-hidden="true" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
		<path d="M12 2.25a9.75 9.75 0 0 0-8.38 14.73L2.25 21.75l4.92-1.34A9.75 9.75 0 1 0 12 2.25Zm0 17.7a7.94 7.94 0 0 1-4.05-1.11l-.29-.17-2.92.8.8-2.84-.19-.3A7.95 7.95 0 1 1 12 19.95Zm4.36-5.96c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
	</svg>
);

const WhatsAppButton = () => {
	const whatsappUrl = WHATSAPP_NUMBER
		? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
		: undefined;

	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		if (!whatsappUrl) {
			event.preventDefault();
		}
	};

	return (
		<div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				title="Contáctanos por WhatsApp"
				aria-label="Contactar con Power House por WhatsApp"
				aria-disabled={!whatsappUrl}
				onClick={handleClick}
				className={`group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:h-16 sm:w-16 ${
					whatsappUrl
						? "bg-[#25D366] hover:scale-105 hover:bg-[#20BD5A] hover:shadow-[0_12px_30px_rgba(37,211,102,0.35)]"
						: "cursor-not-allowed bg-[#25D366]/70"
				}`}
			>
				<span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/35 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]" />
				<WhatsAppIcon />
				<span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-[#101010] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
					Contáctanos por WhatsApp
				</span>
			</a>
		</div>
	);
};

export default WhatsAppButton;
