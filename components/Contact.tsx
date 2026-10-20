"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "club", string>>;

const ROLES = ["Club director or president", "Registrar", "Board member", "Coach or team manager", "Other"];
const PLATFORMS = ["GotSport", "Sports Connect", "Both", "Something else", "Not sure"];
const SIZES = ["Under 150 players", "150 to 500 players", "500 to 1,000 players", "Over 1,000 players"];

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Enter an email address like name@club.org.";
    if (!get("club")) next.club = "Enter your club's name.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Club: ${get("club")}`,
      `Role: ${get("role")}`,
      `Platform: ${get("platform")}`,
      `Club size: ${get("size")}`,
      "",
      "What takes up the most time:",
      get("message") || "(not filled in)",
    ].join("\n");

    const subject = `Call request: ${get("club")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="turf-stripes">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="text-white">
          <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold">Get your evenings back</h2>
          <p className="mt-6 max-w-md text-lg text-white/90">
            Tell us about your club and what eats the most time. We&rsquo;ll set up a free 20-minute call and come
            with ideas specific to your platform.
          </p>
          <p className="mt-8 text-white/90">
            Prefer email?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white underline decoration-armband decoration-2 underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="rounded-[var(--radius-sheet)] bg-white p-6 text-ink shadow-[0_30px_70px_-30px_rgb(0_0_0_/_0.45)] sm:p-9">
          {sent ? (
            <div role="status" className="py-10">
              <h3 className="text-4xl font-bold">Your email is ready to send</h3>
              <p className="mt-4 text-ink-soft">
                Your email app opened with your details filled in. Send it, and we&rsquo;ll reply to set a call time.
                If nothing opened, email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pitch-deep underline">{CONTACT_EMAIL}</a>.
              </p>
              <button type="button" onClick={() => setSent(false)} className="mt-8 font-semibold text-ink underline underline-offset-4">
                Edit my details
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" autoComplete="name" error={errors.name} />
              <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} />
              <Field label="Club name" name="club" autoComplete="organization" error={errors.club} className="sm:col-span-2" />
              <Select label="Your role" name="role" options={ROLES} />
              <Select label="Platform" name="platform" options={PLATFORMS} />
              <Select label="Club size" name="size" options={SIZES} className="sm:col-span-2" />
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">What takes up the most time? <span className="font-normal text-ink-soft">(optional)</span></span>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-line bg-chalk px-4 py-3 outline-none focus:border-pitch focus:ring-2 focus:ring-pitch/25"
                  placeholder="For example: registration questions from families, or getting rosters approved"
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink py-4 text-base font-semibold text-chalk hover:bg-pitch-deep"
                >
                  Request my free call
                </button>
                <p className="mt-3 text-center text-sm text-ink-soft">This opens your email app with your details filled in.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  className?: string;
}) {
  const id = `f-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`w-full rounded-xl border bg-chalk px-4 py-3 outline-none focus:ring-2 ${
          error ? "border-red-600 focus:ring-red-600/25" : "border-line focus:border-pitch focus:ring-pitch/25"
        }`}
      />
      {error && <p id={`${id}-err`} className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  );
}

function Select({ label, name, options, className = "" }: { label: string; name: string; options: string[]; className?: string }) {
  const id = `f-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <select id={id} name={name} defaultValue="" className="w-full appearance-none rounded-xl border border-line bg-chalk bg-[url('/chevron.svg')] bg-[length:14px] bg-[right_1rem_center] bg-no-repeat py-3 pl-4 pr-10 outline-none focus:border-pitch focus:ring-2 focus:ring-pitch/25">
        <option value="" disabled>Choose one</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
