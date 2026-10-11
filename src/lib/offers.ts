export const WHATSAPP_E164 = "17879637044";
export const WHATSAPP_DISPLAY = "(787) 963-7044";
export const EMAIL = "web3zify@gmail.com";
export const SITE = "https://web3zify.com/";

export const INTERESTS = [
  "Página web con pagos",
  "Atención esencial",
  "Atención con voz",
  "Solución completa",
  "Aún no lo sé",
] as const;

export type Interest = (typeof INTERESTS)[number];
export type Prefer = "WhatsApp" | "Videollamada" | "Correo";

export type Plan = {
  id: Interest;
  name: string;
  kicker: string;
  setup: number;
  monthly: number;
  monthlyNote: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "Página web con pagos",
    name: "Página web con pagos",
    kicker: "Presencia y cobro",
    setup: 497,
    monthly: 19.99,
    monthlyNote: "al mes, después de la instalación",
    summary:
      "Una página para presentar el negocio y cobrar productos, servicios, membresías o suscripciones.",
    includes: [
      "Página basada en una plantilla, hasta cinco secciones",
      "Tienda integrada y cobro estándar",
      "Hasta 100 productos o servicios simples",
      "Panel para clientes, productos, precios, inventario, categorías y diseño",
      "Alojamiento, HTTPS, una ronda de ajustes y capacitación",
    ],
  },
  {
    id: "Atención esencial",
    name: "Atención esencial",
    kicker: "Mensajes",
    setup: 995,
    monthly: 97,
    monthlyNote: "al mes",
    summary:
      "Un asistente de mensajes con la información de su negocio, más CRM y seguimiento de citas.",
    includes: [
      "Un asistente y un canal principal",
      "WhatsApp, Instagram, Messenger, SMS o chat web, según el canal contratado",
      "Base de conocimiento del negocio",
      "CRM de contactos, conversaciones, oportunidades y citas",
      "Un calendario, confirmaciones, recordatorios y seguimiento",
    ],
  },
  {
    id: "Atención con voz",
    name: "Atención con voz",
    kicker: "Mensajes y llamadas",
    setup: 1495,
    monthly: 97,
    monthlyNote: "al mes — la misma mensualidad que la esencial",
    summary:
      "La atención por mensajes, más llamadas entrantes cuando usted no puede contestar.",
    includes: [
      "Mensajes y llamadas entrantes",
      "Hasta dos canales principales de texto",
      "Número integrado o desvío del teléfono del negocio",
      "Cobertura continua o solo en el horario de cierre",
      "CRM, un calendario y automatizaciones estándar de citas y seguimiento",
    ],
  },
  {
    id: "Solución completa",
    name: "Solución completa",
    kicker: "Página y atención juntas",
    setup: 1995,
    monthly: 97,
    monthlyNote: "al mes en total. La mensualidad de la página ya va incluida",
    summary:
      "La página con pagos, la atención por mensajes y la atención con voz, en un solo acuerdo.",
    includes: [
      "Todo lo de la página con pagos",
      "Atención por mensajes y por llamadas",
      "Integración estándar de pagos",
      "Hasta 100 planes simples de mensualidad",
      "Avisos si un pago falla, se recupera o hay que actualizar el método",
    ],
    featured: true,
  },
];

export function formatUsd(amount: number): string {
  const cents = Math.round(amount * 100) % 100 !== 0;
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });
}

export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}

export function mailHref(subject: string, body: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type LeadDraft = {
  name: string;
  business: string;
  phone: string;
  email: string;
  interest: Interest;
  prefer: Prefer;
  note: string;
};

export function leadMessage(lead: LeadDraft): string {
  const lines = [
    "Hola, Web3Zify. Quiero información para mi negocio.",
    `Nombre: ${lead.name}`,
    `Negocio: ${lead.business}`,
    `Teléfono: ${lead.phone}`,
    `Correo: ${lead.email}`,
    `Me interesa: ${lead.interest}`,
    lead.prefer === "Videollamada"
      ? "Prefiero coordinar una videollamada."
      : `Prefiero que me contacten por ${lead.prefer}.`,
  ];
  if (lead.note.trim()) lines.push(`Nota: ${lead.note.trim()}`);
  return lines.join("\n");
}

export const PAINS: { problem: string; cover: string }[] = [
  {
    problem: "Llamadas sin contestar",
    cover: "Un asistente de voz toma el recado o la cita, con número integrado o desvío de su teléfono.",
  },
  {
    problem: "Mensajes que se acumulan",
    cover: "Responde en el canal que usted contrate: WhatsApp, Instagram, Messenger, SMS o el chat de la página.",
  },
  {
    problem: "Consultas fuera de horario",
    cover: "Puede cubrir solo las horas de cierre o quedarse atendiendo todo el día.",
  },
  {
    problem: "Seguimiento a mano",
    cover: "Confirmaciones, recordatorios y seguimiento salen solos, con la información de su negocio.",
  },
  {
    problem: "Citas que se olvidan",
    cover: "Un calendario, la confirmación y el recordatorio quedan amarrados a la conversación.",
  },
  {
    problem: "Cobrar es incómodo",
    cover: "La página cobra productos, servicios o mensualidades, y avisa si un pago falla o se recupera.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Puedo contratar solo la página o solo el asistente?",
    a: "Sí. La página, la atención esencial y la atención con voz se contratan por separado. La solución completa las reúne: página, mensajes, llamadas y la mensualidad de la página dentro de los $97.",
  },
  {
    q: "¿En qué se diferencia la atención esencial de la atención con voz?",
    a: "La esencial es un asistente de mensajes en un canal principal. La de voz suma llamadas entrantes y permite hasta dos canales de texto. Las dos traen base de conocimiento, CRM, un calendario y las automatizaciones de citas y seguimiento. La mensualidad es la misma, $97. Lo que cambia es la instalación: $995 o $1,495.",
  },
  {
    q: "¿El asistente sustituye a mi equipo?",
    a: "No. Responde con la información que configuramos juntos, recoge datos, reconoce a quien tiene interés, coordina citas y da datos del negocio. Cuando corresponde hablar con una persona, transfiere la conversación.",
  },
  {
    q: "¿Cuánto tarda en quedar lista?",
    a: "Una página estándar puede estar lista para su revisión en unos siete días laborables después de recibir el contenido, los accesos y el depósito. Los proyectos con inteligencia artificial e integraciones se calendarizan según el alcance. Buscamos entregarlos entre 30 y 45 días.",
  },
  {
    q: "¿El mantenimiento de $150 es obligatorio?",
    a: "No. Es opcional y aplica a los planes con inteligencia artificial. Cubre hasta 90 minutos al mes de revisión y cambios sencillos.",
  },
  {
    q: "¿Qué no incluye la mensualidad?",
    a: "Los consumos de inteligencia artificial, telefonía y mensajes, las comisiones del procesador de pagos y otros cargos de terceros se cobran aparte. Las migraciones, las integraciones especiales y las funciones nuevas requieren cotización.",
  },
  {
    q: "¿La página trae tienda y panel?",
    a: "Sí. Incluye tienda, cobro estándar y un panel para clientes, productos, precios, inventario, categorías y opciones de diseño. El alcance base es de hasta 100 productos o servicios simples y hasta cinco secciones. En la solución completa entran, además, hasta 100 planes simples de mensualidad.",
  },
];
