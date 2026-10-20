import Image from "next/image";
import { CONTACT_EMAIL, NAV } from "@/lib/site";

/* ---------- Platforms ---------- */
export function Platforms() {
  return (
    <section aria-label="Platforms we support" className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-ink-soft">Working inside the platforms your club already pays for</p>
        <div className="flex flex-wrap gap-3">
          <PlatformMark short="GS" name="GotSport" />
          <PlatformMark short="SC" name="Sports Connect" />
        </div>
      </div>
    </section>
  );
}

function PlatformMark({ short, name }: { short: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-line bg-chalk py-1.5 pl-1.5 pr-5 font-semibold">
      <span className="grid size-9 place-items-center rounded-full bg-ink font-display text-lg font-bold text-chalk">{short}</span>
      {name}
    </span>
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

/* ---------- Ways to work together ---------- */
const PLANS = [
  {
    name: "Season surge",
    fit: "For clubs that cope most of the year but drown during registration and tryouts.",
    items: ["Registration and tryout windows", "Family help inbox", "Roster and card deadlines"],
  },
  {
    name: "Ongoing admin",
    fit: "For clubs that want one steady pair of hands, every month of the year.",
    items: ["A set number of hours each month", "Weekly update to the board", "Priority during peak weeks"],
    featured: true,
  },
  {
    name: "One-off project",
    fit: "For a specific job that keeps getting pushed to next season.",
    items: ["Data clean-up and archiving", "Platform setup for a new season", "Document audit"],
  },
];

export function Plans() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">Pick the kind of help you need</h2>
        <p className="mt-5 text-lg text-ink-soft">Pricing depends on club size and scope. We quote after the call, with no long contract.</p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-[var(--radius-sheet)] p-8 ${
              p.featured ? "bg-ink text-chalk" : "border border-line bg-white"
            }`}
          >
            <h3 className="text-4xl font-bold">{p.name}</h3>
            <p className={`mt-4 ${p.featured ? "text-chalk/80" : "text-ink-soft"}`}>{p.fit}</p>
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
            <a
              href="#contact"
              className={`mt-8 rounded-full py-3.5 text-center font-semibold ${
                p.featured ? "bg-pitch text-white hover:bg-pitch-deep" : "border-2 border-ink hover:bg-ink hover:text-chalk"
              }`}
            >
              Ask about {p.name.toLowerCase()}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "Do you need our club's login?",
    a: "No shared passwords. Your club creates an admin role for us on GotSport or Sports Connect, with only the permissions the work needs. You can remove it at any time.",
  },
  {
    q: "Does this replace our registrar?",
    a: "It supports them. Your registrar and board keep decisions and oversight. We take on the repetitive work so they're not doing it alone.",
  },
  {
    q: "How do you handle player and family data?",
    a: "We only work inside the access your club grants, and we follow your club's and league's data and safeguarding policies. Nothing is copied to outside tools without your approval.",
  },
  {
    q: "How soon can you start?",
    a: "Usually within a week or two of the call, depending on how close your next deadline is. If registration opens soon, tell us on the call and we'll prioritize setup.",
  },
  {
    q: "We use a different platform. Can you still help?",
    a: "We specialize in GotSport and Sports Connect. If your club uses something else, ask anyway and we'll tell you honestly whether we're a good fit.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold">Questions clubs ask us</h2>
        <div className="border-t border-line">
          {FAQS.map((f) => (
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
export function Footer() {
  return (
    <footer className="bg-chalk">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Image src="/logo-wordmark.png" alt="EZ Soccer Admin" width={454} height={234} className="h-14 w-auto" />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2 text-ink-soft">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-ink">{n.label}</a>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">{CONTACT_EMAIL}</a>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-ink-soft sm:px-6">
          © {new Date().getFullYear()} EZ Soccer Admin. We do the admin. You do the soccer.
        </p>
      </div>
    </footer>
  );
}
