import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PhoneCall, c as Mail, d as ChevronDown, f as Check, i as PhoneMissed, l as Globe, m as ArrowRight, n as Wallet, o as MessageCircle, p as CalendarCheck2, s as Menu, t as X, u as Clock3 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DrXpCZ-3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_E164 = "17879637044";
var WHATSAPP_DISPLAY = "(787) 963-7044";
var EMAIL = "web3zify@gmail.com";
var SITE = "https://web3zify.com/";
var INTERESTS = [
	"Página web con pagos",
	"Atención esencial",
	"Atención con voz",
	"Solución completa",
	"Aún no lo sé"
];
var PLANS = [
	{
		id: "Página web con pagos",
		name: "Página web con pagos",
		kicker: "Presencia y cobro",
		setup: 497,
		monthly: 19.99,
		monthlyNote: "al mes, después de la instalación",
		summary: "Una página para presentar el negocio y cobrar productos, servicios, membresías o suscripciones.",
		includes: [
			"Página basada en una plantilla, hasta cinco secciones",
			"Tienda integrada y cobro estándar",
			"Hasta 100 productos o servicios simples",
			"Panel para clientes, productos, precios, inventario, categorías y diseño",
			"Alojamiento, HTTPS, una ronda de ajustes y capacitación"
		]
	},
	{
		id: "Atención esencial",
		name: "Atención esencial",
		kicker: "Mensajes",
		setup: 995,
		monthly: 97,
		monthlyNote: "al mes",
		summary: "Un asistente de mensajes con la información de su negocio, más CRM y seguimiento de citas.",
		includes: [
			"Un asistente y un canal principal",
			"WhatsApp, Instagram, Messenger, SMS o chat web, según el canal contratado",
			"Base de conocimiento del negocio",
			"CRM de contactos, conversaciones, oportunidades y citas",
			"Un calendario, confirmaciones, recordatorios y seguimiento"
		]
	},
	{
		id: "Atención con voz",
		name: "Atención con voz",
		kicker: "Mensajes y llamadas",
		setup: 1495,
		monthly: 97,
		monthlyNote: "al mes — la misma mensualidad que la esencial",
		summary: "La atención por mensajes, más llamadas entrantes cuando usted no puede contestar.",
		includes: [
			"Mensajes y llamadas entrantes",
			"Hasta dos canales principales de texto",
			"Número integrado o desvío del teléfono del negocio",
			"Cobertura continua o solo en el horario de cierre",
			"CRM, un calendario y automatizaciones estándar de citas y seguimiento"
		]
	},
	{
		id: "Solución completa",
		name: "Solución completa",
		kicker: "Página y atención juntas",
		setup: 1995,
		monthly: 97,
		monthlyNote: "al mes en total. La mensualidad de la página ya va incluida",
		summary: "La página con pagos, la atención por mensajes y la atención con voz, en un solo acuerdo.",
		includes: [
			"Todo lo de la página con pagos",
			"Atención por mensajes y por llamadas",
			"Integración estándar de pagos",
			"Hasta 100 planes simples de mensualidad",
			"Avisos si un pago falla, se recupera o hay que actualizar el método"
		],
		featured: true
	}
];
function formatUsd(amount) {
	const cents = Math.round(amount * 100) % 100 !== 0;
	return amount.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: cents ? 2 : 0,
		maximumFractionDigits: cents ? 2 : 0
	});
}
function whatsappHref(message) {
	return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
function mailHref(subject, body) {
	return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function leadMessage(lead) {
	const lines = [
		"Hola, Web3Zify. Quiero información para mi negocio.",
		`Nombre: ${lead.name}`,
		`Negocio: ${lead.business}`,
		`Teléfono: ${lead.phone}`,
		`Correo: ${lead.email}`,
		`Me interesa: ${lead.interest}`,
		lead.prefer === "Videollamada" ? "Prefiero coordinar una videollamada." : `Prefiero que me contacten por ${lead.prefer}.`
	];
	if (lead.note.trim()) lines.push(`Nota: ${lead.note.trim()}`);
	return lines.join("\n");
}
var PAINS = [
	{
		problem: "Llamadas sin contestar",
		cover: "Un asistente de voz toma el recado o la cita, con número integrado o desvío de su teléfono."
	},
	{
		problem: "Mensajes que se acumulan",
		cover: "Responde en el canal que usted contrate: WhatsApp, Instagram, Messenger, SMS o el chat de la página."
	},
	{
		problem: "Consultas fuera de horario",
		cover: "Puede cubrir solo las horas de cierre o quedarse atendiendo todo el día."
	},
	{
		problem: "Seguimiento a mano",
		cover: "Confirmaciones, recordatorios y seguimiento salen solos, con la información de su negocio."
	},
	{
		problem: "Citas que se olvidan",
		cover: "Un calendario, la confirmación y el recordatorio quedan amarrados a la conversación."
	},
	{
		problem: "Cobrar es incómodo",
		cover: "La página cobra productos, servicios o mensualidades, y avisa si un pago falla o se recupera."
	}
];
var FAQS = [
	{
		q: "¿Puedo contratar solo la página o solo el asistente?",
		a: "Sí. La página, la atención esencial y la atención con voz se contratan por separado. La solución completa las reúne: página, mensajes, llamadas y la mensualidad de la página dentro de los $97."
	},
	{
		q: "¿En qué se diferencia la atención esencial de la atención con voz?",
		a: "La esencial es un asistente de mensajes en un canal principal. La de voz suma llamadas entrantes y permite hasta dos canales de texto. Las dos traen base de conocimiento, CRM, un calendario y las automatizaciones de citas y seguimiento. La mensualidad es la misma, $97. Lo que cambia es la instalación: $995 o $1,495."
	},
	{
		q: "¿El asistente sustituye a mi equipo?",
		a: "No. Responde con la información que configuramos juntos, recoge datos, reconoce a quien tiene interés, coordina citas y da datos del negocio. Cuando corresponde hablar con una persona, transfiere la conversación."
	},
	{
		q: "¿Cuánto tarda en quedar lista?",
		a: "Una página estándar puede estar lista para su revisión en unos siete días laborables después de recibir el contenido, los accesos y el depósito. Los proyectos con inteligencia artificial e integraciones se calendarizan según el alcance. Buscamos entregarlos entre 30 y 45 días."
	},
	{
		q: "¿El mantenimiento de $150 es obligatorio?",
		a: "No. Es opcional y aplica a los planes con inteligencia artificial. Cubre hasta 90 minutos al mes de revisión y cambios sencillos."
	},
	{
		q: "¿Qué no incluye la mensualidad?",
		a: "Los consumos de inteligencia artificial, telefonía y mensajes, las comisiones del procesador de pagos y otros cargos de terceros se cobran aparte. Las migraciones, las integraciones especiales y las funciones nuevas requieren cotización."
	},
	{
		q: "¿La página trae tienda y panel?",
		a: "Sí. Incluye tienda, cobro estándar y un panel para clientes, productos, precios, inventario, categorías y opciones de diseño. El alcance base es de hasta 100 productos o servicios simples y hasta cinco secciones. En la solución completa entran, además, hasta 100 planes simples de mensualidad."
	}
];
var NAV = [
	["Servicios", "#servicios"],
	["Planes", "#planes"],
	["Proceso", "#proceso"],
	["Preguntas", "#preguntas"]
];
var AUDIENCE = [
	"Comercios",
	"Profesionales",
	"Contratistas",
	"Academias",
	"Gimnasios",
	"Centros de bienestar",
	"Clínicas",
	"Mensualidades"
];
var DAY = [
	{
		time: "6:42 p.m.",
		tag: "Llamada",
		title: "El negocio ya cerró",
		body: "El asistente toma el nombre, el motivo y un teléfono para devolver la llamada."
	},
	{
		time: "6:44 p.m.",
		tag: "WhatsApp",
		title: "«¿Tienen espacio el jueves?»",
		body: "Responde con dos horarios que sí están en el calendario."
	},
	{
		time: "6:45 p.m.",
		tag: "Cita",
		title: "Jueves, 4:30 p.m.",
		body: "Queda confirmada. El recordatorio sale solo."
	},
	{
		time: "6:47 p.m.",
		tag: "Cobro",
		title: "Mensualidad recuperada",
		body: "La tarjeta había fallado. El cliente la actualizó y el equipo recibe el aviso."
	}
];
var PILLARS = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
			className: "size-5",
			"aria-hidden": true
		}),
		title: "Una página que también cobra",
		body: "Presenta servicios, productos o membresías y recibe el pago. Usted administra clientes, precios, inventario y el diseño desde un panel."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-5",
			"aria-hidden": true
		}),
		title: "Alguien que contesta con su información",
		body: "El asistente responde consultas, recoge datos, reconoce interesados y coordina citas. Si hace falta una persona, le pasa la conversación."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
			className: "size-5",
			"aria-hidden": true
		}),
		title: "Los cobros no se quedan en el aire",
		body: "En la solución completa, una integración estándar avisa cuando un pago falla, se recupera o el cliente tiene que actualizar su método."
	}
];
var STEPS = [
	{
		n: "01",
		title: "Definimos el alcance",
		body: "Vemos si le conviene la página, la atención o las dos. No hace falta llevarse el paquete completo para empezar."
	},
	{
		n: "02",
		title: "Usted nos entrega lo necesario",
		body: "Contenido, accesos y el depósito. Con eso arranca el plazo: unos siete días laborables para revisar una página estándar."
	},
	{
		n: "03",
		title: "Lo configuramos y lo probamos",
		body: "Personalizamos la página o el asistente, armamos las automatizaciones y las probamos con usted antes de soltarlas."
	},
	{
		n: "04",
		title: "Su equipo queda capacitado",
		body: "Una sesión para operar sin depender de nosotros cada día. Si quiere acompañamiento, el mantenimiento de IA es opcional."
	}
];
var STORIES = [
	{
		quote: "Después de las seis ya no contestábamos. Ahora la agenda del día siguiente llega armada y nosotros empezamos a trabajar, no a devolver llamadas.",
		name: "Marisol R.",
		role: "Clínica de bienestar, Bayamón",
		plan: "Atención con voz"
	},
	{
		quote: "La mensualidad sale por la página. Si una tarjeta falla, nos avisa. Dejamos de perseguir pagos por mensaje al final del mes.",
		name: "Andrés C.",
		role: "Gimnasio con mensualidades, Carolina",
		plan: "Solución completa"
	},
	{
		quote: "No quería un asistente todavía. Con la página el cliente ve el servicio, deja el adelanto y yo dejo de explicar lo mismo por teléfono.",
		name: "Luisa M.",
		role: "Contratista, Ponce",
		plan: "Página con pagos"
	}
];
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [interest, setInterest] = (0, import_react.useState)("Solución completa");
	const [prefer, setPrefer] = (0, import_react.useState)("Videollamada");
	const [revision, setRevision] = (0, import_react.useState)(0);
	function choose(next, channel = "Videollamada") {
		setInterest(next);
		setPrefer(channel);
		setRevision((n) => n + 1);
		setOpen(false);
		const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		document.getElementById("contacto")?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
		window.setTimeout(() => {
			document.getElementById("nombre")?.focus();
		}, reduce ? 0 : 400);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 bg-accent-bright",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-3 focus:shadow-card",
				children: "Saltar al contenido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				open,
				setOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "contenido",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
						onInfo: () => choose("Aún no lo sé", "WhatsApp"),
						onCall: () => choose("Aún no lo sé", "Videollamada")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Audience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problems, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paths, { onChoose: choose }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, { onChoose: choose }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinePrint, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
						interest,
						prefer,
						setInterest,
						setPrefer,
						revision
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header({ open, setOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contenido",
					className: "shrink-0",
					"aria-label": "Web3Zify, inicio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "Web3Zify",
						className: "h-8 w-auto sm:h-10"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Secciones",
					children: NAV.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "text-sm font-medium text-muted hover:text-ink",
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex size-12 items-center justify-center rounded-full bg-ink text-on-ink sm:hidden",
							href: whatsappHref("Hola, Web3Zify. Quiero información para mi negocio."),
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": `WhatsApp ${WHATSAPP_DISPLAY}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn btn-solid hidden sm:inline-flex",
							href: whatsappHref("Hola, Web3Zify. Quiero información para mi negocio."),
							target: "_blank",
							rel: "noopener noreferrer",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex size-12 items-center justify-center rounded-full border border-line bg-surface md:hidden",
							"aria-expanded": open,
							"aria-controls": "menu-movil",
							onClick: () => setOpen(!open),
							children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5",
								"aria-hidden": true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: open ? "Cerrar menú" : "Abrir menú"
							})]
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "menu-movil",
			className: "border-t border-line px-5 py-3 md:hidden",
			"aria-label": "Secciones",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col",
				children: [NAV.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					className: "flex min-h-12 items-center text-base font-medium",
					onClick: () => setOpen(false),
					children: label
				}) }, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contacto",
					className: "flex min-h-12 items-center text-base font-medium",
					onClick: () => setOpen(false),
					children: "Contacto"
				}) })]
			})
		}) : null]
	});
}
function Hero({ onInfo, onCall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rise font-display text-lg text-accent italic",
					children: "Web3Zify LLC · Puerto Rico"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "rise rise-2 font-display mt-4 max-w-xl text-4xl leading-tight font-medium tracking-tight sm:text-6xl",
					children: "Su negocio atiende y cobra, aunque usted esté ocupado."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rise rise-3 mt-5 max-w-xl text-lg text-muted",
					children: "Armamos la página con pagos, el asistente de inteligencia artificial y las automatizaciones. Lo hacemos con usted: configurar, personalizar, probar y capacitar a su equipo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "btn btn-solid",
						onClick: onInfo,
						children: ["Solicitar información", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-line",
						onClick: onCall,
						children: "Agendar una videollamada"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6",
					children: [
						"Se configura con usted",
						"Capacitación incluida",
						"Una pieza o el sistema completo"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-4 text-accent",
							"aria-hidden": true
						}), item]
					}, item))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-accent uppercase",
							children: "Un martes, después del cierre"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl",
							children: "Así se conectan atención y cobro"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/mark.png",
							alt: "",
							className: "h-12 w-auto"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-5",
						children: DAY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 size-2.5 shrink-0 rounded-full bg-accent-bright",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold tracking-wide text-muted uppercase",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: item.time
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: " · "
										}),
										item.tag
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.body
								})
							] })]
						}, item.time))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-muted",
						children: "Ejemplo ilustrativo. Los canales y la cobertura dependen de lo que contrate."
					})
				]
			})
		})]
	});
}
function Audience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line bg-surface",
		"aria-label": "Para quién es",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 text-sm font-semibold tracking-wide text-ink uppercase",
				children: "Para dueños y administradores en Puerto Rico"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-2",
				children: AUDIENCE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted",
					children: item
				}, item))
			})]
		})
	});
}
function Problems() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "servicios",
		className: "scroll-mt-24 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-accent italic",
					children: "01 — Lo que se escapa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl",
					children: "El día se va en devolver llamadas, no en atender el negocio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: "Comercios, clínicas, academias y quien cobra una mensualidad suelen perder lo mismo: el mensaje de las 8 p.m., la cita que nadie confirmó y el pago que nadie fue a buscar."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 overflow-hidden rounded-3xl border border-line bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden grid-cols-2 border-b border-line px-6 py-3 text-xs font-semibold tracking-wide text-muted uppercase sm:grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lo que pasa hoy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cómo lo cubrimos" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: PAINS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-2 border-b border-line px-5 py-5 last:border-b-0 sm:grid-cols-2 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-start gap-3 font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMissed, {
						className: "mt-0.5 size-4 shrink-0 text-accent sm:hidden",
						"aria-hidden": true
					}), row.problem]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: row.cover
				})]
			}, row.problem)) })]
		})]
	});
}
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-on-ink",
		"aria-labelledby": "conecta-titulo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-accent-bright italic",
							children: "02 — Lo que conectamos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "conecta-titulo",
							className: "font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl",
							children: "Presencia, atención y cobro. Por separado o en el mismo sistema."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/mark.png",
						alt: "",
						className: "hidden h-20 w-auto lg:block"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-3",
					children: PILLARS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl border border-on-ink/15 bg-ink-raise p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-11 items-center justify-center rounded-2xl bg-ink text-accent-bright",
								children: item.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-5 text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-on-ink-muted",
								children: item.body
							})
						]
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-3xl text-on-ink-muted",
					children: "Trabajamos directo con el negocio. No entregamos un acceso y desaparecemos: configuramos, personalizamos, automatizamos, probamos y capacitamos."
				})
			]
		})
	});
}
function Paths({ onChoose }) {
	const [path, setPath] = (0, import_react.useState)("both");
	const [voice, setVoice] = (0, import_react.useState)(true);
	const labelId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
		"aria-labelledby": labelId,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-accent italic",
				children: "03 — Cómo empezar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: labelId,
				className: "font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl",
				children: "Elija una pieza o llévese las dos."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "La campaña sirve para los dos caminos. Si ya sabe cuál le duele más, empiece por ahí. Si quiere que la página, los mensajes, las llamadas y los cobros hablen entre sí, hay un solo acuerdo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "sr-only",
					children: "Qué quiere contratar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: [
						[
							"web",
							"Solo la página",
							"Presentar y cobrar"
						],
						[
							"care",
							"Solo la atención",
							"Mensajes o mensajes y voz"
						],
						[
							"both",
							"Las dos juntas",
							"Un acuerdo, $97 al mes"
						]
					].map(([id, title, hint]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "rounded-3xl border-2 border-line bg-surface p-5 has-[:checked]:border-ink has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								suppressHydrationWarning: true,
								className: "sr-only",
								type: "radio",
								name: "camino",
								value: id,
								checked: path === id,
								onChange: () => setPath(id)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: hint
							})
						]
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel-enter mt-4 rounded-3xl border border-line bg-surface p-6 sm:p-8",
				children: [
					path === "web" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathBody, {
						title: "Página web con pagos",
						price: `${formatUsd(497)} de instalación · ${formatUsd(19.99)} al mes`,
						body: "Plantilla de hasta cinco secciones, tienda, cobro estándar y panel administrativo. Hasta 100 productos o servicios simples, alojamiento, HTTPS, una ronda de ajustes y capacitación. Lista para revisión en unos siete días laborables, contados desde que llegan el contenido, los accesos y el depósito.",
						action: "Quiero la página",
						onAction: () => onChoose("Página web con pagos")
					}) : null,
					path === "care" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: "Atención con inteligencia artificial"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-muted",
							children: "El asistente usa la información de su negocio. Puede ser uno o varios. Cubre mensajes y, si lo necesita, el teléfono."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "sr-only",
							children: "Nivel de atención"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-full border border-line p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "rounded-full px-4 py-2 text-sm font-semibold has-[:checked]:bg-ink has-[:checked]:text-on-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									suppressHydrationWarning: true,
									className: "sr-only",
									type: "radio",
									name: "nivel",
									checked: !voice,
									onChange: () => setVoice(false)
								}), "Esencial"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "rounded-full px-4 py-2 text-sm font-semibold has-[:checked]:bg-ink has-[:checked]:text-on-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									suppressHydrationWarning: true,
									className: "sr-only",
									type: "radio",
									name: "nivel",
									checked: voice,
									onChange: () => setVoice(true)
								}), "Con voz"]
							})]
						})] })]
					}), voice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathPrice, {
						price: `${formatUsd(1495)} de instalación · ${formatUsd(97)} al mes`,
						body: "Mensajes y llamadas entrantes, hasta dos canales de texto, CRM, un calendario y las automatizaciones de citas. El teléfono puede ser un número integrado o el desvío del suyo, todo el día o solo cuando cierra. Proyectos con IA: buscamos entregarlos entre 30 y 45 días, según el alcance.",
						action: "Quiero atención con voz",
						onAction: () => onChoose("Atención con voz")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathPrice, {
						price: `${formatUsd(995)} de instalación · ${formatUsd(97)} al mes`,
						body: "Un asistente de mensajes, un canal principal, base de conocimiento, CRM, un calendario, confirmaciones, recordatorios y seguimiento. Misma mensualidad que la atención con voz. La instalación es menor porque no incluye llamadas.",
						action: "Quiero la atención esencial",
						onAction: () => onChoose("Atención esencial")
					})] }) : null,
					path === "both" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathBody, {
						title: "Solución completa",
						price: `${formatUsd(1995)} de instalación · ${formatUsd(97)} al mes en total`,
						body: "Junta la página con pagos, la atención por mensajes y la atención con voz. Entran una integración estándar de pagos, hasta 100 planes simples de mensualidad y los avisos cuando un cobro falla, se recupera o hay que actualizar el método. Los $19.99 de la página ya van dentro de esos $97. No se suman.",
						action: "Quiero la solución completa",
						onAction: () => onChoose("Solución completa")
					}) : null
				]
			}, `${path}-${voice}`)
		]
	});
}
function PathBody({ title, price, body, action, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg font-semibold tabular-nums",
					children: price
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: body
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "btn btn-solid shrink-0",
			onClick: onAction,
			children: [action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
				className: "size-4",
				"aria-hidden": true
			})]
		})]
	});
}
function PathPrice({ price, body, action, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold tabular-nums",
				children: price
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-solid mt-6",
				onClick: onAction,
				children: [action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4",
					"aria-hidden": true
				})]
			})
		]
	});
}
function Pricing({ onChoose }) {
	const featured = PLANS.find((plan) => plan.featured);
	const rest = PLANS.filter((plan) => !plan.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "planes",
		className: "scroll-mt-24 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-accent italic",
					children: "04 — Precios"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl",
					children: "Instalación una vez. Mensualidad clara. Dólares."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted",
					children: "Precios en dólares estadounidenses. Si toma la página y la voz por separado, los $19.99 de la página se suman a los $97. En la solución completa, no."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "mt-10 rounded-3xl bg-ink p-6 text-on-ink shadow-card sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold tracking-wide text-accent-bright uppercase",
									children: featured.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-2 text-4xl",
									children: featured.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-5xl tabular-nums tracking-tight",
									children: formatUsd(featured.setup)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-on-ink-muted",
									children: "de instalación"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-2xl font-semibold tabular-nums",
									children: [formatUsd(featured.monthly), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-base font-normal text-on-ink-muted",
										children: "al mes, en total"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-on-ink-muted",
									children: featured.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn btn-invert mt-6",
									onClick: () => onChoose(featured.id),
									children: "Solicitar la solución completa"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 lg:col-span-7 lg:pt-8",
							children: featured.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-1 size-4 shrink-0 text-accent-bright",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 lg:grid-cols-3",
					children: rest.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col rounded-3xl border border-line bg-bg p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-wide text-accent uppercase",
								children: plan.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-2 text-2xl",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-4xl tabular-nums",
								children: formatUsd(plan.setup)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "de instalación"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-semibold tabular-nums",
								children: [
									formatUsd(plan.monthly),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal text-muted",
										children: "al mes"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: plan.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm",
								children: plan.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-4 shrink-0 text-accent",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto pt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn btn-line w-full",
									onClick: () => onChoose(plan.id),
									children: "Solicitar este plan"
								})
							})
						]
					}, plan.id))
				})
			]
		})
	});
}
function FinePrint() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-6xl px-5 py-4 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-3 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
						className: "size-5 text-accent",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-medium",
						children: "Plazos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Página estándar: lista para revisión en unos siete días laborables tras contenido, accesos y depósito. Con IA e integraciones, el calendario depende del alcance. La meta es entregarlo entre 30 y 45 días."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck2, {
						className: "size-5 text-accent",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-medium",
						children: "Mantenimiento de IA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Opcional, $150 adicionales al mes en los planes con asistente. Incluye hasta 90 minutos de revisión y cambios sencillos. No es obligatorio para que el servicio funcione."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
						className: "size-5 text-accent",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-medium",
						children: "Lo que va aparte"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Consumo de IA, telefonía y mensajes, comisiones del procesador y otros cargos de terceros. Migraciones, integraciones especiales y funciones nuevas se cotizan."
					})
				] })
			]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "proceso",
		className: "scroll-mt-24 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-accent italic",
				children: "05 — El trabajo juntos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl",
				children: "No le entregamos una herramienta a medias."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-3xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-accent italic",
							children: step.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-medium",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: step.body
						})
					]
				}, step.n))
			})
		]
	});
}
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-surface",
		"aria-labelledby": "historias",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-accent italic",
					children: "06 — En la operación"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "historias",
					className: "font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl",
					children: "Tres maneras distintas de usarlo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-3",
					children: STORIES.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex flex-col rounded-3xl border border-line bg-bg p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-2xl leading-snug",
							children: [
								"“",
								story.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 border-t border-line pt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: story.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: story.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs font-semibold tracking-wide text-accent uppercase",
									children: story.plan
								})
							]
						})]
					}, story.name))
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "preguntas",
		className: "scroll-mt-24 mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-accent italic",
				children: "07 — Preguntas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl",
				children: "Antes de escribirnos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 border-t border-line",
				children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group border-b border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex items-center justify-between gap-4 py-5 text-lg font-medium",
						children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "size-5 shrink-0 transition-transform duration-200 group-open:rotate-180",
							"aria-hidden": true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-5 text-muted",
						children: item.a
					})]
				}, item.q))
			})
		]
	});
}
function Contact({ interest, prefer, setInterest, setPrefer, revision }) {
	const [name, setName] = (0, import_react.useState)("");
	const [business, setBusiness] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setSent(null);
	}, [revision]);
	function onSubmit(event) {
		event.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = "Escriba su nombre.";
		if (business.trim().length < 2) next.business = "Escriba el nombre del negocio.";
		if (phone.replace(/\D/g, "").length < 7) next.phone = "Escriba un teléfono donde podamos responder.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Escriba un correo válido.";
		setErrors(next);
		if (Object.keys(next).length) return;
		const draft = {
			name: name.trim(),
			business: business.trim(),
			phone: phone.trim(),
			email: email.trim(),
			interest,
			prefer,
			note
		};
		const message = leadMessage(draft);
		const href = prefer === "Correo" ? mailHref(`Información Web3Zify — ${draft.business}`, message) : whatsappHref(message);
		window.open(href, "_blank", "noopener,noreferrer");
		setSent({
			href,
			message
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "scroll-mt-24 bg-ink text-on-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-accent-bright italic",
						children: "08 — Hablemos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl",
						children: "Cuéntenos qué se le está escapando."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-on-ink-muted",
						children: "Respondemos por WhatsApp, correo o en una videollamada. Si ya eligió un plan arriba, el formulario lo trae marcado."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-start gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "btn btn-invert",
								href: whatsappHref("Hola, Web3Zify. Quiero información para mi negocio."),
								target: "_blank",
								rel: "noopener noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-4",
										"aria-hidden": true
									}),
									"WhatsApp ",
									WHATSAPP_DISPLAY
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "inline-flex min-h-11 items-center gap-2 text-on-ink underline decoration-on-ink/30 underline-offset-4",
								href: `mailto:${EMAIL}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": true
								}), EMAIL]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-sm text-on-ink-muted underline decoration-on-ink/30 underline-offset-4",
								href: SITE,
								children: "web3zify.com"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-surface p-6 text-ink sm:p-8",
					role: "status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: "Listo. Abrimos el mensaje."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-muted",
							children: [
								"Si la ventana no apareció, use el enlace. El formulario no se guarda en un servidor: llega por ",
								prefer === "Correo" ? "correo" : "WhatsApp",
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn btn-solid mt-6",
							href: sent.href,
							target: "_blank",
							rel: "noopener noreferrer",
							children: prefer === "Correo" ? "Abrir el correo" : "Abrir WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-6 max-h-64 overflow-auto rounded-2xl bg-bg p-4 text-sm whitespace-pre-wrap text-muted",
							children: sent.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-line mt-4",
							onClick: () => setSent(null),
							children: "Corregir los datos"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "rounded-3xl bg-surface p-6 text-ink sm:p-8",
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nombre",
									id: "nombre",
									error: errors.name,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										suppressHydrationWarning: true,
										id: "nombre",
										name: "name",
										autoComplete: "name",
										value: name,
										onChange: (event) => setName(event.target.value),
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Negocio",
									id: "negocio",
									error: errors.business,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										suppressHydrationWarning: true,
										id: "negocio",
										name: "organization",
										autoComplete: "organization",
										value: business,
										onChange: (event) => setBusiness(event.target.value),
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Teléfono",
									id: "telefono",
									error: errors.phone,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										suppressHydrationWarning: true,
										id: "telefono",
										name: "tel",
										autoComplete: "tel",
										inputMode: "tel",
										placeholder: "(787) 000-0000",
										value: phone,
										onChange: (event) => setPhone(event.target.value),
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Correo",
									id: "correo",
									error: errors.email,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										suppressHydrationWarning: true,
										id: "correo",
										name: "email",
										type: "email",
										autoComplete: "email",
										value: email,
										onChange: (event) => setEmail(event.target.value),
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Qué le interesa",
									id: "interes",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										suppressHydrationWarning: true,
										id: "interes",
										value: interest,
										onChange: (event) => setInterest(event.target.value),
										children: INTERESTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Cómo prefiere que le contactemos",
									id: "preferencia",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										suppressHydrationWarning: true,
										id: "preferencia",
										value: prefer,
										onChange: (event) => setPrefer(event.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "WhatsApp" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Videollamada" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Correo" })
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "nota",
								className: "text-sm font-medium",
								children: ["Qué se le está escapando ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted",
									children: "(opcional)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								suppressHydrationWarning: true,
								id: "nota",
								value: note,
								maxLength: 500,
								onChange: (event) => setNote(event.target.value),
								placeholder: "Llamadas después del cierre, mensualidades, una página para cobrar el adelanto…"
							})]
						}),
						Object.keys(errors).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-danger",
							role: "alert",
							children: "Revise los campos marcados para poder armar el mensaje."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn btn-solid mt-6 w-full sm:w-auto",
							children: prefer === "Videollamada" ? "Pedir la videollamada" : prefer === "Correo" ? "Escribir por correo" : "Enviar por WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted",
							children: "Al enviar se abre WhatsApp o su correo con estos datos. No los almacenamos aquí."
						})
					]
				})
			})]
		})
	});
}
function Field({ label, id, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "text-sm font-medium",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				id: `${id}-error`,
				children: error
			}) : null
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					alt: "Web3Zify",
					className: "h-9 w-auto self-start"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm text-muted",
					children: "Web3Zify LLC, compañía de tecnología registrada en Puerto Rico. Ayudamos a pequeños y medianos negocios a presentar sus servicios, atender clientes y cobrar en línea."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 text-sm sm:flex-row sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "underline decoration-line underline-offset-4",
							href: whatsappHref("Hola, Web3Zify."),
							children: ["WhatsApp ", WHATSAPP_DISPLAY]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline decoration-line underline-offset-4",
							href: `mailto:${EMAIL}`,
							children: EMAIL
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline decoration-line underline-offset-4",
							href: SITE,
							children: "web3zify.com"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Los consumos de inteligencia artificial, telefonía, mensajes y las comisiones del procesador de pagos se cobran aparte."
				})
			]
		})
	});
}
//#endregion
export { Home as component };
