import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  Check,
  ChevronDown,
  Clock3,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  PhoneCall,
  PhoneMissed,
  Wallet,
  X,
} from "lucide-react";
import {
  EMAIL,
  FAQS,
  INTERESTS,
  PAINS,
  PLANS,
  SITE,
  WHATSAPP_DISPLAY,
  formatUsd,
  leadMessage,
  mailHref,
  whatsappHref,
  type Interest,
  type LeadDraft,
  type Prefer,
} from "@/lib/offers";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  ["Servicios", "#servicios"],
  ["Planes", "#planes"],
  ["Proceso", "#proceso"],
  ["Preguntas", "#preguntas"],
] as const;

const AUDIENCE = [
  "Comercios",
  "Profesionales",
  "Contratistas",
  "Academias",
  "Gimnasios",
  "Centros de bienestar",
  "Clínicas",
  "Mensualidades",
];

const DAY = [
  {
    time: "6:42 p.m.",
    tag: "Llamada",
    title: "El negocio ya cerró",
    body: "El asistente toma el nombre, el motivo y un teléfono para devolver la llamada.",
  },
  {
    time: "6:44 p.m.",
    tag: "WhatsApp",
    title: "«¿Tienen espacio el jueves?»",
    body: "Responde con dos horarios que sí están en el calendario.",
  },
  {
    time: "6:45 p.m.",
    tag: "Cita",
    title: "Jueves, 4:30 p.m.",
    body: "Queda confirmada. El recordatorio sale solo.",
  },
  {
    time: "6:47 p.m.",
    tag: "Cobro",
    title: "Mensualidad recuperada",
    body: "La tarjeta había fallado. El cliente la actualizó y el equipo recibe el aviso.",
  },
];

const PILLARS: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Globe className="size-5" aria-hidden />,
    title: "Una página que también cobra",
    body: "Presenta servicios, productos o membresías y recibe el pago. Usted administra clientes, precios, inventario y el diseño desde un panel.",
  },
  {
    icon: <MessageCircle className="size-5" aria-hidden />,
    title: "Alguien que contesta con su información",
    body: "El asistente responde consultas, recoge datos, reconoce interesados y coordina citas. Si hace falta una persona, le pasa la conversación.",
  },
  {
    icon: <Wallet className="size-5" aria-hidden />,
    title: "Los cobros no se quedan en el aire",
    body: "En la solución completa, una integración estándar avisa cuando un pago falla, se recupera o el cliente tiene que actualizar su método.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Definimos el alcance",
    body: "Vemos si le conviene la página, la atención o las dos. No hace falta llevarse el paquete completo para empezar.",
  },
  {
    n: "02",
    title: "Usted nos entrega lo necesario",
    body: "Contenido, accesos y el depósito. Con eso arranca el plazo: unos siete días laborables para revisar una página estándar.",
  },
  {
    n: "03",
    title: "Lo configuramos y lo probamos",
    body: "Personalizamos la página o el asistente, armamos las automatizaciones y las probamos con usted antes de soltarlas.",
  },
  {
    n: "04",
    title: "Su equipo queda capacitado",
    body: "Una sesión para operar sin depender de nosotros cada día. Si quiere acompañamiento, el mantenimiento de IA es opcional.",
  },
];

const STORIES = [
  {
    quote:
      "Después de las seis ya no contestábamos. Ahora la agenda del día siguiente llega armada y nosotros empezamos a trabajar, no a devolver llamadas.",
    name: "Marisol R.",
    role: "Clínica de bienestar, Bayamón",
    plan: "Atención con voz",
  },
  {
    quote:
      "La mensualidad sale por la página. Si una tarjeta falla, nos avisa. Dejamos de perseguir pagos por mensaje al final del mes.",
    name: "Andrés C.",
    role: "Gimnasio con mensualidades, Carolina",
    plan: "Solución completa",
  },
  {
    quote:
      "No quería un asistente todavía. Con la página el cliente ve el servicio, deja el adelanto y yo dejo de explicar lo mismo por teléfono.",
    name: "Luisa M.",
    role: "Contratista, Ponce",
    plan: "Página con pagos",
  },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState<Interest>("Solución completa");
  const [prefer, setPrefer] = useState<Prefer>("Videollamada");
  const [revision, setRevision] = useState(0);

  function choose(next: Interest, channel: Prefer = "Videollamada") {
    setInterest(next);
    setPrefer(channel);
    setRevision((n) => n + 1);
    setOpen(false);
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("contacto")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    window.setTimeout(() => {
      document.getElementById("nombre")?.focus();
    }, reduce ? 0 : 400);
  }

  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="h-1 bg-accent-bright" aria-hidden />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-3 focus:shadow-card"
      >
        Saltar al contenido
      </a>
      <Header open={open} setOpen={setOpen} />
      <main id="contenido">
        <Hero onInfo={() => choose("Aún no lo sé", "WhatsApp")} onCall={() => choose("Aún no lo sé", "Videollamada")} />
        <Audience />
        <Problems />
        <Pillars />
        <Paths onChoose={choose} />
        <Pricing onChoose={choose} />
        <FinePrint />
        <Process />
        <Stories />
        <Faq />
        <Contact
          interest={interest}
          prefer={prefer}
          setInterest={setInterest}
          setPrefer={setPrefer}
          revision={revision}
        />
      </main>
      <Footer />
    </div>
  );
}

function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#contenido" className="shrink-0" aria-label="Web3Zify, inicio">
          <img src="/logo.png" alt="Web3Zify" className="h-8 w-auto sm:h-10" />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Secciones">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="inline-flex size-12 items-center justify-center rounded-full bg-ink text-on-ink sm:hidden"
            href={whatsappHref("Hola, Web3Zify. Quiero información para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
          >
            <MessageCircle className="size-5" aria-hidden />
          </a>
          <a
            className="btn btn-solid hidden sm:inline-flex"
            href={whatsappHref("Hola, Web3Zify. Quiero información para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full border border-line bg-surface md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="menu-movil" className="border-t border-line px-5 py-3 md:hidden" aria-label="Secciones">
          <ul className="flex flex-col">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex min-h-12 items-center text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="flex min-h-12 items-center text-base font-medium"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Hero({ onInfo, onCall }: { onInfo: () => void; onCall: () => void }) {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-7">
        <p className="rise font-display text-lg text-accent italic">Web3Zify LLC · Puerto Rico</p>
        <h1 className="rise rise-2 font-display mt-4 max-w-xl text-4xl leading-tight font-medium tracking-tight sm:text-6xl">
          Su negocio atiende y cobra, aunque usted esté ocupado.
        </h1>
        <p className="rise rise-3 mt-5 max-w-xl text-lg text-muted">
          Armamos la página con pagos, el asistente de inteligencia artificial y las automatizaciones.
          Lo hacemos con usted: configurar, personalizar, probar y capacitar a su equipo.
        </p>
        <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn btn-solid" onClick={onInfo}>
            Solicitar información
            <ArrowRight className="size-4" aria-hidden />
          </button>
          <button type="button" className="btn btn-line" onClick={onCall}>
            Agendar una videollamada
          </button>
        </div>
        <ul className="mt-8 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
          {["Se configura con usted", "Capacitación incluida", "Una pieza o el sistema completo"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-accent" aria-hidden />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
      <div className="lg:col-span-5">
        <article className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Un martes, después del cierre</p>
              <h2 className="font-display mt-1 text-2xl">Así se conectan atención y cobro</h2>
            </div>
            <img src="/mark.png" alt="" className="h-12 w-auto" />
          </div>
          <ol className="mt-6 space-y-5">
            {DAY.map((item) => (
              <li key={item.time} className="flex gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-accent-bright" aria-hidden />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                    <span className="tabular-nums">{item.time}</span>
                    <span aria-hidden> · </span>
                    {item.tag}
                  </p>
                  <p className="mt-1 font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-muted">
            Ejemplo ilustrativo. Los canales y la cobertura dependen de lo que contrate.
          </p>
        </article>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="border-y border-line bg-surface" aria-label="Para quién es">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
        <p className="shrink-0 text-sm font-semibold tracking-wide text-ink uppercase">Para dueños y administradores en Puerto Rico</p>
        <ul className="flex flex-wrap gap-2">
          {AUDIENCE.map((item) => (
            <li key={item} className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="servicios" className="scroll-mt-24 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-display text-lg text-accent italic">01 — Lo que se escapa</p>
        <h2 className="font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
          El día se va en devolver llamadas, no en atender el negocio.
        </h2>
        <p className="mt-4 text-lg text-muted">
          Comercios, clínicas, academias y quien cobra una mensualidad suelen perder lo mismo: el
          mensaje de las 8 p.m., la cita que nadie confirmó y el pago que nadie fue a buscar.
        </p>
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
        <div className="hidden grid-cols-2 border-b border-line px-6 py-3 text-xs font-semibold tracking-wide text-muted uppercase sm:grid">
          <p>Lo que pasa hoy</p>
          <p>Cómo lo cubrimos</p>
        </div>
        <ul>
          {PAINS.map((row) => (
            <li
              key={row.problem}
              className="grid gap-2 border-b border-line px-5 py-5 last:border-b-0 sm:grid-cols-2 sm:px-6"
            >
              <p className="flex items-start gap-3 font-medium">
                <PhoneMissed className="mt-0.5 size-4 shrink-0 text-accent sm:hidden" aria-hidden />
                {row.problem}
              </p>
              <p className="text-muted">{row.cover}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-ink text-on-ink" aria-labelledby="conecta-titulo">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-display text-lg text-accent-bright italic">02 — Lo que conectamos</p>
            <h2 id="conecta-titulo" className="font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              Presencia, atención y cobro. Por separado o en el mismo sistema.
            </h2>
          </div>
          <img src="/mark.png" alt="" className="hidden h-20 w-auto lg:block" />
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PILLARS.map((item) => (
            <article key={item.title} className="rounded-3xl border border-on-ink/15 bg-ink-raise p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-ink text-accent-bright">
                {item.icon}
              </span>
              <h3 className="font-display mt-5 text-2xl">{item.title}</h3>
              <p className="mt-3 text-on-ink-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-on-ink-muted">
          Trabajamos directo con el negocio. No entregamos un acceso y desaparecemos: configuramos,
          personalizamos, automatizamos, probamos y capacitamos.
        </p>
      </div>
    </section>
  );
}

function Paths({ onChoose }: { onChoose: (interest: Interest, prefer?: Prefer) => void }) {
  const [path, setPath] = useState<"web" | "care" | "both">("both");
  const [voice, setVoice] = useState(true);
  const labelId = useId();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby={labelId}>
      <p className="font-display text-lg text-accent italic">03 — Cómo empezar</p>
      <h2 id={labelId} className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
        Elija una pieza o llévese las dos.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        La campaña sirve para los dos caminos. Si ya sabe cuál le duele más, empiece por ahí. Si quiere
        que la página, los mensajes, las llamadas y los cobros hablen entre sí, hay un solo acuerdo.
      </p>
      <fieldset className="mt-8">
        <legend className="sr-only">Qué quiere contratar</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {(
            [
              ["web", "Solo la página", "Presentar y cobrar"],
              ["care", "Solo la atención", "Mensajes o mensajes y voz"],
              ["both", "Las dos juntas", "Un acuerdo, $97 al mes"],
            ] as const
          ).map(([id, title, hint]) => (
            <label
              key={id}
              className="rounded-3xl border-2 border-line bg-surface p-5 has-[:checked]:border-ink has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
            >
              <input
                suppressHydrationWarning
                className="sr-only"
                type="radio"
                name="camino"
                value={id}
                checked={path === id}
                onChange={() => setPath(id)}
              />
              <span className="block font-medium">{title}</span>
              <span className="mt-1 block text-sm text-muted">{hint}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div key={`${path}-${voice}`} className="panel-enter mt-4 rounded-3xl border border-line bg-surface p-6 sm:p-8">
        {path === "web" ? (
          <PathBody
            title="Página web con pagos"
            price={`${formatUsd(497)} de instalación · ${formatUsd(19.99)} al mes`}
            body="Plantilla de hasta cinco secciones, tienda, cobro estándar y panel administrativo. Hasta 100 productos o servicios simples, alojamiento, HTTPS, una ronda de ajustes y capacitación. Lista para revisión en unos siete días laborables, contados desde que llegan el contenido, los accesos y el depósito."
            action="Quiero la página"
            onAction={() => onChoose("Página web con pagos")}
          />
        ) : null}
        {path === "care" ? (
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-3xl">Atención con inteligencia artificial</h3>
                <p className="mt-2 max-w-xl text-muted">
                  El asistente usa la información de su negocio. Puede ser uno o varios. Cubre mensajes y,
                  si lo necesita, el teléfono.
                </p>
              </div>
              <fieldset>
                <legend className="sr-only">Nivel de atención</legend>
                <div className="flex rounded-full border border-line p-1">
                  <label className="rounded-full px-4 py-2 text-sm font-semibold has-[:checked]:bg-ink has-[:checked]:text-on-ink">
                    <input
                      suppressHydrationWarning
                      className="sr-only"
                      type="radio"
                      name="nivel"
                      checked={!voice}
                      onChange={() => setVoice(false)}
                    />
                    Esencial
                  </label>
                  <label className="rounded-full px-4 py-2 text-sm font-semibold has-[:checked]:bg-ink has-[:checked]:text-on-ink">
                    <input
                      suppressHydrationWarning
                      className="sr-only"
                      type="radio"
                      name="nivel"
                      checked={voice}
                      onChange={() => setVoice(true)}
                    />
                    Con voz
                  </label>
                </div>
              </fieldset>
            </div>
            {voice ? (
              <PathPrice
                price={`${formatUsd(1495)} de instalación · ${formatUsd(97)} al mes`}
                body="Mensajes y llamadas entrantes, hasta dos canales de texto, CRM, un calendario y las automatizaciones de citas. El teléfono puede ser un número integrado o el desvío del suyo, todo el día o solo cuando cierra. Proyectos con IA: buscamos entregarlos entre 30 y 45 días, según el alcance."
                action="Quiero atención con voz"
                onAction={() => onChoose("Atención con voz")}
              />
            ) : (
              <PathPrice
                price={`${formatUsd(995)} de instalación · ${formatUsd(97)} al mes`}
                body="Un asistente de mensajes, un canal principal, base de conocimiento, CRM, un calendario, confirmaciones, recordatorios y seguimiento. Misma mensualidad que la atención con voz. La instalación es menor porque no incluye llamadas."
                action="Quiero la atención esencial"
                onAction={() => onChoose("Atención esencial")}
              />
            )}
          </div>
        ) : null}
        {path === "both" ? (
          <PathBody
            title="Solución completa"
            price={`${formatUsd(1995)} de instalación · ${formatUsd(97)} al mes en total`}
            body="Junta la página con pagos, la atención por mensajes y la atención con voz. Entran una integración estándar de pagos, hasta 100 planes simples de mensualidad y los avisos cuando un cobro falla, se recupera o hay que actualizar el método. Los $19.99 de la página ya van dentro de esos $97. No se suman."
            action="Quiero la solución completa"
            onAction={() => onChoose("Solución completa")}
          />
        ) : null}
      </div>
    </section>
  );
}

function PathBody({
  title,
  price,
  body,
  action,
  onAction,
}: {
  title: string;
  price: string;
  body: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <h3 className="font-display text-3xl">{title}</h3>
        <p className="mt-3 text-lg font-semibold tabular-nums">{price}</p>
        <p className="mt-3 text-muted">{body}</p>
      </div>
      <button type="button" className="btn btn-solid shrink-0" onClick={onAction}>
        {action}
        <ArrowRight className="size-4" aria-hidden />
      </button>
    </div>
  );
}

function PathPrice({
  price,
  body,
  action,
  onAction,
}: {
  price: string;
  body: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="mt-6 max-w-2xl">
      <p className="text-lg font-semibold tabular-nums">{price}</p>
      <p className="mt-3 text-muted">{body}</p>
      <button type="button" className="btn btn-solid mt-6" onClick={onAction}>
        {action}
        <ArrowRight className="size-4" aria-hidden />
      </button>
    </div>
  );
}

function Pricing({ onChoose }: { onChoose: (interest: Interest, prefer?: Prefer) => void }) {
  const featured = PLANS.find((plan) => plan.featured)!;
  const rest = PLANS.filter((plan) => !plan.featured);
  return (
    <section id="planes" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-display text-lg text-accent italic">04 — Precios</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
          Instalación una vez. Mensualidad clara. Dólares.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Precios en dólares estadounidenses. Si toma la página y la voz por separado, los $19.99 de la
          página se suman a los $97. En la solución completa, no.
        </p>
        <article className="mt-10 rounded-3xl bg-ink p-6 text-on-ink shadow-card sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold tracking-wide text-accent-bright uppercase">{featured.kicker}</p>
              <h3 className="font-display mt-2 text-4xl">{featured.name}</h3>
              <p className="mt-4 font-display text-5xl tabular-nums tracking-tight">{formatUsd(featured.setup)}</p>
              <p className="mt-1 text-on-ink-muted">de instalación</p>
              <p className="mt-4 text-2xl font-semibold tabular-nums">
                {formatUsd(featured.monthly)}
                <span className="ml-2 text-base font-normal text-on-ink-muted">al mes, en total</span>
              </p>
              <p className="mt-4 text-on-ink-muted">{featured.summary}</p>
              <button
                type="button"
                className="btn btn-invert mt-6"
                onClick={() => onChoose(featured.id)}
              >
                Solicitar la solución completa
              </button>
            </div>
            <ul className="space-y-3 lg:col-span-7 lg:pt-8">
              {featured.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-accent-bright" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {rest.map((plan) => (
            <article key={plan.id} className="flex h-full flex-col rounded-3xl border border-line bg-bg p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">{plan.kicker}</p>
              <h3 className="font-display mt-2 text-2xl">{plan.name}</h3>
              <p className="mt-4 font-display text-4xl tabular-nums">{formatUsd(plan.setup)}</p>
              <p className="text-sm text-muted">de instalación</p>
              <p className="mt-3 font-semibold tabular-nums">
                {formatUsd(plan.monthly)} <span className="font-normal text-muted">al mes</span>
              </p>
              <p className="mt-3 text-sm text-muted">{plan.summary}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <button type="button" className="btn btn-line w-full" onClick={() => onChoose(plan.id)}>
                  Solicitar este plan
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinePrint() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
      <div className="grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-3 sm:p-8">
        <div>
          <Clock3 className="size-5 text-accent" aria-hidden />
          <h3 className="mt-3 font-medium">Plazos</h3>
          <p className="mt-2 text-sm text-muted">
            Página estándar: lista para revisión en unos siete días laborables tras contenido, accesos y
            depósito. Con IA e integraciones, el calendario depende del alcance. La meta es entregarlo
            entre 30 y 45 días.
          </p>
        </div>
        <div>
          <CalendarCheck2 className="size-5 text-accent" aria-hidden />
          <h3 className="mt-3 font-medium">Mantenimiento de IA</h3>
          <p className="mt-2 text-sm text-muted">
            Opcional, $150 adicionales al mes en los planes con asistente. Incluye hasta 90 minutos de
            revisión y cambios sencillos. No es obligatorio para que el servicio funcione.
          </p>
        </div>
        <div>
          <Wallet className="size-5 text-accent" aria-hidden />
          <h3 className="mt-3 font-medium">Lo que va aparte</h3>
          <p className="mt-2 text-sm text-muted">
            Consumo de IA, telefonía y mensajes, comisiones del procesador y otros cargos de terceros.
            Migraciones, integraciones especiales y funciones nuevas se cotizan.
          </p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-display text-lg text-accent italic">05 — El trabajo juntos</p>
      <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
        No le entregamos una herramienta a medias.
      </h2>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <li key={step.n} className="rounded-3xl border border-line bg-surface p-5">
            <p className="font-display text-3xl text-accent italic">{step.n}</p>
            <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Stories() {
  return (
    <section className="border-t border-line bg-surface" aria-labelledby="historias">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-display text-lg text-accent italic">06 — En la operación</p>
        <h2 id="historias" className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
          Tres maneras distintas de usarlo.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure key={story.name} className="flex flex-col rounded-3xl border border-line bg-bg p-6">
              <blockquote className="font-display text-2xl leading-snug">“{story.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-medium">{story.name}</p>
                <p className="text-sm text-muted">{story.role}</p>
                <p className="mt-2 text-xs font-semibold tracking-wide text-accent uppercase">{story.plan}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="preguntas" className="scroll-mt-24 mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-display text-lg text-accent italic">07 — Preguntas</p>
      <h2 className="font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl">Antes de escribirnos</h2>
      <div className="mt-8 border-t border-line">
        {FAQS.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex items-center justify-between gap-4 py-5 text-lg font-medium">
              {item.q}
              <ChevronDown className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden />
            </summary>
            <p className="pb-5 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact({
  interest,
  prefer,
  setInterest,
  setPrefer,
  revision,
}: {
  interest: Interest;
  prefer: Prefer;
  setInterest: (value: Interest) => void;
  setPrefer: (value: Prefer) => void;
  revision: number;
}) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<{ href: string; message: string } | null>(null);

  useEffect(() => {
    setSent(null);
  }, [revision]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Escriba su nombre.";
    if (business.trim().length < 2) next.business = "Escriba el nombre del negocio.";
    if (phone.replace(/\D/g, "").length < 7) next.phone = "Escriba un teléfono donde podamos responder.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Escriba un correo válido.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const draft: LeadDraft = {
      name: name.trim(),
      business: business.trim(),
      phone: phone.trim(),
      email: email.trim(),
      interest,
      prefer,
      note,
    };
    const message = leadMessage(draft);
    const href =
      prefer === "Correo"
        ? mailHref(`Información Web3Zify — ${draft.business}`, message)
        : whatsappHref(message);
    window.open(href, "_blank", "noopener,noreferrer");
    setSent({ href, message });
  }

  return (
    <section id="contacto" className="scroll-mt-24 bg-ink text-on-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-lg text-accent-bright italic">08 — Hablemos</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
            Cuéntenos qué se le está escapando.
          </h2>
          <p className="mt-4 text-on-ink-muted">
            Respondemos por WhatsApp, correo o en una videollamada. Si ya eligió un plan arriba, el
            formulario lo trae marcado.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <a
              className="btn btn-invert"
              href={whatsappHref("Hola, Web3Zify. Quiero información para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall className="size-4" aria-hidden />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a className="inline-flex min-h-11 items-center gap-2 text-on-ink underline decoration-on-ink/30 underline-offset-4" href={`mailto:${EMAIL}`}>
              <Mail className="size-4" aria-hidden />
              {EMAIL}
            </a>
            <a className="text-sm text-on-ink-muted underline decoration-on-ink/30 underline-offset-4" href={SITE}>
              web3zify.com
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-3xl bg-surface p-6 text-ink sm:p-8" role="status">
              <h3 className="font-display text-3xl">Listo. Abrimos el mensaje.</h3>
              <p className="mt-3 text-muted">
                Si la ventana no apareció, use el enlace. El formulario no se guarda en un servidor:
                llega por {prefer === "Correo" ? "correo" : "WhatsApp"}.
              </p>
              <a className="btn btn-solid mt-6" href={sent.href} target="_blank" rel="noopener noreferrer">
                {prefer === "Correo" ? "Abrir el correo" : "Abrir WhatsApp"}
              </a>
              <pre className="mt-6 max-h-64 overflow-auto rounded-2xl bg-bg p-4 text-sm whitespace-pre-wrap text-muted">
                {sent.message}
              </pre>
              <button type="button" className="btn btn-line mt-4" onClick={() => setSent(null)}>
                Corregir los datos
              </button>
            </div>
          ) : (
            <form className="rounded-3xl bg-surface p-6 text-ink sm:p-8" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" id="nombre" error={errors.name}>
                  <input
                    suppressHydrationWarning
                    id="nombre"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </Field>
                <Field label="Negocio" id="negocio" error={errors.business}>
                  <input
                    suppressHydrationWarning
                    id="negocio"
                    name="organization"
                    autoComplete="organization"
                    value={business}
                    onChange={(event) => setBusiness(event.target.value)}
                    required
                  />
                </Field>
                <Field label="Teléfono" id="telefono" error={errors.phone}>
                  <input
                    suppressHydrationWarning
                    id="telefono"
                    name="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(787) 000-0000"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </Field>
                <Field label="Correo" id="correo" error={errors.email}>
                  <input
                    suppressHydrationWarning
                    id="correo"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Field>
                <Field label="Qué le interesa" id="interes">
                  <select
                    suppressHydrationWarning
                    id="interes"
                    value={interest}
                    onChange={(event) => setInterest(event.target.value as Interest)}
                  >
                    {INTERESTS.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Cómo prefiere que le contactemos" id="preferencia">
                  <select
                    suppressHydrationWarning
                    id="preferencia"
                    value={prefer}
                    onChange={(event) => setPrefer(event.target.value as Prefer)}
                  >
                    <option>WhatsApp</option>
                    <option>Videollamada</option>
                    <option>Correo</option>
                  </select>
                </Field>
              </div>
              <div className="field mt-4">
                <label htmlFor="nota" className="text-sm font-medium">
                  Qué se le está escapando <span className="font-normal text-muted">(opcional)</span>
                </label>
                <textarea
                  suppressHydrationWarning
                  id="nota"
                  value={note}
                  maxLength={500}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Llamadas después del cierre, mensualidades, una página para cobrar el adelanto…"
                />
              </div>
              {Object.keys(errors).length > 0 ? (
                <p className="mt-4 text-sm text-danger" role="alert">
                  Revise los campos marcados para poder armar el mensaje.
                </p>
              ) : null}
              <button type="submit" className="btn btn-solid mt-6 w-full sm:w-auto">
                {prefer === "Videollamada"
                  ? "Pedir la videollamada"
                  : prefer === "Correo"
                    ? "Escribir por correo"
                    : "Enviar por WhatsApp"}
              </button>
              <p className="mt-3 text-xs text-muted">
                Al enviar se abre WhatsApp o su correo con estos datos. No los almacenamos aquí.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-danger" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8">
        <img src="/logo.png" alt="Web3Zify" className="h-9 w-auto self-start" />
        <p className="max-w-xl text-sm text-muted">
          Web3Zify LLC, compañía de tecnología registrada en Puerto Rico. Ayudamos a pequeños y
          medianos negocios a presentar sus servicios, atender clientes y cobrar en línea.
        </p>
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <a className="underline decoration-line underline-offset-4" href={whatsappHref("Hola, Web3Zify.")}>
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a className="underline decoration-line underline-offset-4" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <a className="underline decoration-line underline-offset-4" href={SITE}>
            web3zify.com
          </a>
        </div>
        <p className="text-xs text-muted">
          Los consumos de inteligencia artificial, telefonía, mensajes y las comisiones del procesador
          de pagos se cobran aparte.
        </p>
      </div>
    </footer>
  );
}
