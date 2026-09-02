export type ServiceCategory = "Comunidad" | "Formación" | "Familias" | "Impacto";

export type ServiceIcon = "community" | "purpose" | "family" | "impact";

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  category: ServiceCategory;
  icon: ServiceIcon;
  actionLabel: string;
  href: string;
}

export const servicesData: Service[] = [
  {
    id: "comunidad",
    number: "01",
    title: "Conecta con la comunidad",
    description: "Encuentra un espacio para compartir, crecer y construir vínculos que trascienden el domingo.",
    details: "Participa en grupos y encuentros donde puedes conocer personas, compartir tu historia y caminar acompañado durante la semana.",
    category: "Comunidad",
    icon: "community",
    actionLabel: "Conocer la comunidad",
    href: "/contacto",
  },
  {
    id: "proposito",
    number: "02",
    title: "Descubre tu propósito",
    description: "Reconoce tus dones y encuentra formas concretas de ponerlos al servicio de algo mayor.",
    details: "Te ayudamos a identificar tus talentos y a darles dirección mediante espacios de orientación, formación y acompañamiento.",
    category: "Formación",
    icon: "purpose",
    actionLabel: "Hablar sobre mi propósito",
    href: "/contacto",
  },
  {
    id: "familia",
    number: "03",
    title: "Crece en familia",
    description: "Experiencias pensadas para que cada generación encuentre un lugar donde sentirse parte.",
    details: "Hay espacios para niños, jóvenes, adultos y familias, diseñados para que cada persona pueda crecer a su ritmo y relacionarse con otros.",
    category: "Familias",
    icon: "family",
    actionLabel: "Encontrar mi espacio",
    href: "/ministerios",
  },
  {
    id: "impacto",
    number: "04",
    title: "Sirve e impacta",
    description: "Participa en iniciativas que convierten la fe en acciones concretas para nuestra ciudad.",
    details: "Súmate a iniciativas de servicio y voluntariado que responden a necesidades reales y generan cambios concretos en nuestra ciudad.",
    category: "Impacto",
    icon: "impact",
    actionLabel: "Quiero servir",
    href: "/contacto",
  },
];