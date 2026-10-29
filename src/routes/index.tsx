import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";

// Configurá acá el número de WhatsApp (formato internacional sin "+" ni espacios, ej: 5493510000000).
// Mientras esté vacío, los botones de WhatsApp muestran un aviso en lugar de un enlace.
const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE = "Hola, quería hacer una consulta sobre un servicio de informática.";

const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : null;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZONA ZERO Computación · Propuesta visual de sitio web" },
      { name: "description", content: "Demo conceptual no oficial de una web para un comercio de informática en Córdoba, Argentina." },
      { property: "og:title", content: "ZONA ZERO Computación · Propuesta visual" },
      { property: "og:description", content: "Ejemplo de diseño web para un negocio de informática en Córdoba." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-consultar", label: "Cómo consultar" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  { icon: "🛠️", title: "Servicio técnico (a confirmar)", text: "Texto provisional: acá iría la descripción del servicio de reparación, una vez confirmado por el negocio." },
  { icon: "💻", title: "Equipos y notebooks (a confirmar)", text: "Texto provisional: espacio para contar qué tipo de equipos se trabajan o se ofrecen." },
  { icon: "🖱️", title: "Accesorios y periféricos (a confirmar)", text: "Texto provisional: lugar para detallar accesorios disponibles, si corresponde." },
  { icon: "🛡️", title: "Mantenimiento y software (a confirmar)", text: "Texto provisional: descripción de tareas de mantenimiento o instalación, a validar." },
];

const steps = [
  { n: "1", title: "Escribinos", text: "Mandá tu consulta por WhatsApp contándonos qué necesitás." },
  { n: "2", title: "Contanos el detalle", text: "Si podés, sumá marca, modelo o una foto del equipo." },
  { n: "3", title: "Te respondemos", text: "Te orientamos sobre los próximos pasos para resolverlo." },
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  const [notice, setNotice] = useState(false);
  const base = "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  if (whatsappUrl) {
    return <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>Consultar por WhatsApp</a>;
  }
  return (
    <div className={className}>
      <button type="button" onClick={() => setNotice(true)} className={base}>Consultar por WhatsApp</button>
      {notice && (
        <p role="status" className="mt-3 max-w-sm rounded-lg bg-warning px-3 py-2 text-sm text-warning-foreground">
          Número de WhatsApp pendiente de configurar en esta demo.
        </p>
      )}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="bg-warning px-4 py-1.5 text-center text-xs text-warning-foreground">
        Propuesta visual no oficial, creada como ejemplo de diseño web
      </div>

      <header className="sticky top-0 z-40 border-b border-navy-foreground/10 bg-navy/95 text-navy-foreground backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
            ZONA <span className="text-accent">ZERO</span> <span className="font-normal text-navy-muted">Computación</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => <a key={n.href} href={n.href} className="text-sm text-navy-muted transition hover:text-accent">{n.label}</a>)}
          </nav>
          <button className="rounded-md p-2 md:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="block h-0.5 w-6 bg-navy-foreground" /><span className="mt-1.5 block h-0.5 w-6 bg-navy-foreground" /><span className="mt-1.5 block h-0.5 w-6 bg-navy-foreground" />
          </button>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-navy-foreground/10 px-4 pb-4 md:hidden">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-navy-muted hover:text-accent">{n.label}</a>)}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative overflow-hidden text-navy-foreground">
        <img src={hero} alt="Mesa de trabajo con notebook y componentes de computadora" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1000} />
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-widest text-accent">Informática en Córdoba</p>
          <h1 className="animate-fade-up mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl" style={{ animationDelay: "0.1s" }}>
            Tu compu, en buenas manos.
          </h1>
          <p className="animate-fade-up mt-5 max-w-xl text-lg text-navy-muted" style={{ animationDelay: "0.2s" }}>
            Contanos qué le pasa a tu equipo o qué estás buscando, y te ayudamos a encontrar la mejor solución.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <a href="#contacto" className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5">Hacer una consulta</a>
            <a href="#servicios" className="inline-flex items-center rounded-full border border-navy-foreground/30 px-6 py-3 font-semibold transition hover:border-accent hover:text-accent">Ver servicios</a>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">Servicios</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">¿En qué te podemos dar una mano?</h2>
        <p className="mt-3 inline-block rounded-md bg-warning px-3 py-1 text-sm text-warning-foreground">Contenido provisional: servicios pendientes de confirmación</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl" aria-hidden>{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-consultar" className="bg-navy py-20 text-navy-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Cómo consultar</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Pedir una consulta es fácil</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-navy-foreground/10 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display font-bold text-accent-foreground">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-navy-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 rounded-3xl border bg-card p-8 shadow-card md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">Contacto</p>
            <h2 className="mt-2 text-3xl font-bold">Escribinos y lo charlamos</h2>
            <p className="mt-3 text-muted-foreground">La forma más rápida de consultar es por WhatsApp.</p>
            <WhatsAppButton className="mt-6" />
          </div>
          <dl className="space-y-4 text-sm">
            <p className="inline-block rounded-md bg-warning px-3 py-1 text-warning-foreground">Datos provisionales, a completar por el negocio</p>
            {[["Teléfono / WhatsApp", "[A confirmar]"], ["Dirección", "[A confirmar] · Córdoba, Argentina"], ["Horarios", "[A confirmar]"], ["Email", "[A confirmar]"]].map(([k, v]) => (
              <div key={k} className="border-b pb-3">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="bg-navy py-10 text-navy-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm md:flex-row md:justify-between">
          <p><span className="font-display font-bold text-navy-foreground">ZONA <span className="text-accent">ZERO</span></span> Computación · Córdoba, Argentina</p>
          <p>Propuesta visual no oficial, creada como ejemplo de diseño web.</p>
        </div>
      </footer>
    </div>
  );
}
