import Image from "next/image";
import { CONTACT_EMAIL, NAV, SOCIAL } from "@/lib/site";
import { FAQS } from "@/lib/faq";

/* ---------- Platforms (scrolling logo strip) ---------- */
const LOGOS = [
  { src: "/logos/gotsport.png", alt: "GotSport", w: 177, h: 56, cls: "h-10 w-auto rounded-md" },
  { src: "/logos/sports-connect.png", alt: "Sports Connect", w: 678, h: 91, cls: "h-8 w-auto" },
  { src: "/logos/nj-youth-soccer.png", alt: "New Jersey Youth Soccer", w: 263, h: 263, cls: "h-16 w-auto" },
];

export function Platforms() {
  // One "set" repeats the three logos so the strip is wider than the screen; the set is rendered twice for a seamless loop.
  const set = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <section aria-label="Platforms and associations" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-7 sm:px-6">
        <p className="text-ink-soft">Working with the platforms and associations your club relies on</p>
      </div>
      <div className="logo-marquee relative mt-5 overflow-hidden pb-7">
        <div className="logo-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-16 pr-16">
              {set.map((l, i) => (
                <li key={`${copy}-${i}`} className="flex h-16 items-center">
                  <Image src={l.src} alt={copy === 0 && i < LOGOS.length ? l.alt : ""} width={l.w} height={l.h} className={l.cls} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain points ---------- */
const PAINS = [
  "Registration opens and your inbox fills with families who can't find the form.",
  "Rosters are due to the league on Friday and three teams are still short of players.",
  "Saturday check-in stalls because player cards weren't printed.",
  "Your registrar is a volunteer with a full-time job, and it shows by March.",
  "Birth certificates and waivers live across six spreadsheets and two inboxes.",
  "Nobody on the board knows how the platform was set up, or why.",
];

export function Pains() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">Sound familiar?</h2>
          <p className="mt-5 max-w-sm text-lg text-ink-soft">
            Most clubs run on a few generous volunteers. The admin load grows every season. The volunteers don&rsquo;t.
          </p>
        </div>
        <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
          {PAINS.map((p) => (
            <li key={p} className="flex gap-4 border-b border-line py-6">
              <svg aria-hidden viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 text-armband" fill="currentColor">
                <rect x="4" y="2" width="12" height="16" rx="2" />
              </svg>
              <span className="text-[1.05rem] leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  {
    title: "Rosters and team setup",
    body: "Team creation, player placement, roster submissions and late changes, kept in step with your league's rules.",
  },
  {
    title: "Player cards and passes",
    body: "Photos chased, cards generated and printed, and passes ready before the first whistle.",
  },
  {
    title: "Documents and compliance",
    body: "Birth certificates, waivers and coach credentials tracked in one list, with reminders sent to whoever is missing something.",
  },
  {
    title: "Family communication",
    body: "Clear emails for registration windows, deadlines and schedule changes, written in your club's voice.",
  },
  {
    title: "Clean-up and reporting",
    body: "Duplicate accounts merged, old seasons archived, and the numbers your board asks for, pulled on request.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink text-chalk">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <h2 className="max-w-2xl text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">What we take off your plate</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <article className="turf-stripes relative self-start overflow-hidden rounded-[var(--radius-sheet)] p-8 text-white sm:p-10">
            <svg aria-hidden viewBox="0 0 200 120" className="absolute -bottom-14 -right-16 w-64 text-white/10" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="40" y="10" width="160" height="100" />
              <rect x="120" y="35" width="80" height="50" />
              <circle cx="104" cy="60" r="3" fill="currentColor" />
            </svg>
            <h3 className="relative text-4xl font-bold sm:text-5xl">Registration season, run end to end</h3>
            <p className="relative mt-5 max-w-md text-white/90">
              The busiest weeks of the year. We set up the forms, answer family questions, chase incomplete
              registrations and reconcile who&rsquo;s actually paid and placed, so your board isn&rsquo;t doing it
              at midnight.
            </p>
            <ul className="relative mt-7 grid gap-2 text-[0.98rem]">
              {["Form and fee setup", "Family help inbox", "Incomplete registration follow-up", "Payment and placement reconciliation"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span aria-hidden className="size-2 rounded-full bg-armband" />
                  {x}
                </li>
              ))}
            </ul>
          </article>

          <ul className="border-t border-white/15">
            {SERVICES.map((s) => (
              <li key={s.title} className="grid gap-2 border-b border-white/15 py-7 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="text-2xl font-bold sm:text-[1.75rem]">{s.title}</h3>
                <p className="text-chalk/75">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Season calendar ---------- */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PHASES = [
  { start: 1, end: 2, label: "Spring registration", tone: "bg-pitch text-white" },
  { start: 3, end: 4, label: "Spring season and player cards", tone: "bg-turf text-pitch-deep" },
  { start: 5, end: 6, label: "Tryouts and fall registration", tone: "bg-armband text-ink" },
  { start: 7, end: 8, label: "Team formation and coach credentials", tone: "bg-pitch text-white" },
  { start: 9, end: 11, label: "Fall season and tournaments", tone: "bg-turf text-pitch-deep" },
  { start: 12, end: 12, label: "Year-end clean-up", tone: "bg-ink text-chalk" },
];

export function Season() {
  return (
    <section id="season" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">Every peak in your season, covered</h2>
        <p className="mt-5 text-lg text-ink-soft">
          Admin doesn&rsquo;t arrive evenly. Bring us in for the crunch weeks or the whole year. Dates shift by state
          association, so we plan around yours.
        </p>
      </div>

      {/* Desktop: 12-column calendar band */}
      <div className="mt-14 hidden md:block">
        <div className="grid grid-cols-12 border-b-2 border-ink pb-2 text-sm font-semibold text-ink-soft">
          {MONTHS.map((m) => (
            <span key={m} className="pl-2">{m}</span>
          ))}
        </div>
        <ol className="mt-4 grid grid-cols-12 gap-y-3">
          {PHASES.map((p) => (
            <li
              key={p.label}
              style={{ gridColumn: `${p.start} / ${p.end + 1}` }}
              className={`mx-0.5 rounded-lg px-3 py-3 text-[0.95rem] font-semibold leading-tight ${p.tone}`}
            >
              {p.label}
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: stacked list */}
      <ol className="mt-10 border-t border-line md:hidden">
        {PHASES.map((p) => (
          <li key={p.label} className="flex items-center gap-4 border-b border-line py-4">
            <span className="w-20 shrink-0 font-display text-xl font-bold">
              {MONTHS[p.start - 1]}
              {p.end !== p.start ? `–${MONTHS[p.end - 1]}` : ""}
            </span>
            <span className={`rounded-md px-2.5 py-1 text-sm font-semibold ${p.tone}`}>{p.label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- How it works ---------- */
const STEPS = [
  { title: "Talk it through", body: "A free 20-minute call about your club, your platform and where the hours go." },
  { title: "Admin review", body: "We look at your current setup and task list, then send a short plan of what we'd take on." },
  { title: "Handover", body: "Your club grants an admin role on its platform. We agree a checklist, contacts and deadlines." },
  { title: "We run it", body: "We work through the list and send a weekly update. You approve anything that needs a board decision." },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <h2 className="max-w-2xl text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">From first call to first handled week</h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-ink pt-6">
              <span className="font-display text-6xl font-extrabold text-pitch">{i + 1}</span>
              <h3 className="mt-3 text-3xl font-bold">{s.title}</h3>
              <p className="mt-3 text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


/* ---------- Packages ---------- */
const PACKAGES = [
  {
    name: "Starter Support",
    price: 199,
    fit: "For small clubs needing occasional help.",
    items: ["Up to 5 hours of administrative work monthly", "Basic registration and document tracking", "Email support and a monthly status summary"],
  },
  {
    name: "Club Admin Plus",
    price: 449,
    fit: "For clubs that need regular administrative support.",
    items: ["Up to 12 hours monthly", "Player and staff registration support", "Document checks and team assignment support", "Roster and ID card preparation"],
    featured: true,
  },
  {
    name: "Season Operations Partner",
    price: 799,
    fit: "For clubs requiring ongoing support and seasonal coordination.",
    items: ["Up to 24 hours monthly", "Weekly task coordination and tracking", "Registration, roster and staff administration", "Priority scheduling by agreement"],
  },
];

export function Plans() {
  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">Our packages &amp; services</h2>
        <p className="mt-5 text-lg text-ink-soft">Flexible administrative support designed for youth soccer clubs of all sizes.</p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {PACKAGES.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-[var(--radius-sheet)] p-8 ${
              p.featured ? "bg-ink text-chalk ring-2 ring-pitch" : "border border-line bg-white"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3.5 left-8 rounded-full bg-pitch px-4 py-1 text-sm font-semibold text-white">Most popular</span>
            )}
            <h3 className="text-[2.1rem] font-bold lg:min-h-[1.9em]">{p.name}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className={`font-display text-6xl font-extrabold ${p.featured ? "text-white" : "text-pitch"}`}>${p.price}</span>
              <span className={p.featured ? "text-chalk/75" : "text-ink-soft"}>/mo</span>
            </p>
            <p className={`mt-3 ${p.featured ? "text-chalk/80" : "text-ink-soft"}`}>{p.fit}</p>
            <ul className={`mt-6 grid gap-3 border-t pt-6 ${p.featured ? "border-white/15" : "border-line"}`}>
              {p.items.map((x) => (
                <li key={x} className="flex gap-3">
                  <svg aria-hidden viewBox="0 0 16 16" className={`mt-1 size-4 shrink-0 ${p.featured ? "text-armband" : "text-pitch"}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8.5 6.5 12 13 4.5" />
                  </svg>
                  {x}
                </li>
              ))}
            </ul>
            <p className={`mt-auto pt-6 text-sm ${p.featured ? "text-chalk/75" : "text-ink-soft"}`}>
              Additional hours: <span className="font-semibold">$35/hour</span>
            </p>
            <a
              href="#contact"
              aria-label={`Ask about ${p.name}`}
              className={`mt-5 rounded-full py-3.5 text-center font-semibold ${
                p.featured ? "bg-pitch text-white hover:bg-pitch-deep" : "border-2 border-ink hover:bg-ink hover:text-chalk"
              }`}
            >
              Ask about this package
            </a>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-soft">Prices are starting points in USD. Scope, included hours and turnaround are agreed in writing before work begins.</p>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FAQ() {
  return (
    <section id="faq" className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">Questions clubs ask us</h2>
        <div className="border-t border-line">
          {FAQS.filter((f) => f.inSection).map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-semibold">
                {f.q}
                <span aria-hidden className="faq-plus grid size-8 shrink-0 place-items-center rounded-full border border-line text-xl transition-transform">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
const SOCIAL_ICONS: Record<(typeof SOCIAL)[number]["name"], React.ReactNode> = {
  LinkedIn: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6V21h-4v-5c0-1.2-.02-2.73-1.67-2.73-1.67 0-1.93 1.3-1.93 2.64V21h-4V9.75Z" />,
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.2" />
    </>
  ),
  Facebook: <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.25-1.46 1.5-1.46H16.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3Z" />,
  X: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.57L16.67 19.2Z" />,
};

export function Footer() {
  return (
    <footer className="bg-[#0B2A4A] text-chalk">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Image src="/logo-wordmark-light.png" alt="EZ Soccer Admin" width={454} height={234} className="h-14 w-auto" />
        <div className="flex flex-col gap-6 md:items-end">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2 text-chalk/75">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
            ))}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
          </nav>
          <ul className="flex gap-3">
            {SOCIAL.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`EZ Soccer Admin on ${s.name}`}
                  className="grid size-10 place-items-center rounded-full border border-white/20 text-chalk/85 hover:border-pitch hover:bg-pitch hover:text-white"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="size-[18px]" fill="currentColor">
                    {SOCIAL_ICONS[s.name]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-chalk/70 sm:px-6">
          © {new Date().getFullYear()} EZ Soccer Admin. We do the admin. You do the soccer.
        </p>
      </div>
    </footer>
  );
}
