"use client";

import { motion, useReducedMotion } from "motion/react";

const TASKS = [
  { task: "Spring registration form published", detail: "GotSport" },
  { task: "U12 girls roster submitted to the league", detail: "Sports Connect" },
  { task: "Missing birth certificates chased", detail: "14 families emailed" },
  { task: "Player cards printed for Saturday", detail: "Ready for check-in" },
  { task: "Tournament application filed", detail: "Before the deadline" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        <div>
          <p className="mb-6 text-[0.95rem] font-medium text-ink-soft">
            Admin support for youth soccer clubs on GotSport and Sports Connect
          </p>

          <h1 className="text-[clamp(3.1rem,10.5vw,5.4rem)] font-extrabold sm:whitespace-nowrap">
            <span className="block">We do the admin.</span>
            <span className="turf-stripes mt-2 inline-block -rotate-1 rounded-md px-3 pb-2 pt-1 text-chalk sm:px-4">
              You do the soccer.
            </span>
          </h1>

          <p className="mt-8 max-w-[34rem] text-lg text-ink-soft">
            Registration, rosters, player cards and the paperwork in between, handled by people who
            know club platforms. Your board and coaches get their evenings back.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-pitch px-7 py-4 text-base font-semibold text-white shadow-[0_6px_0_var(--color-pitch-deep)] transition hover:translate-y-0.5 hover:shadow-[0_4px_0_var(--color-pitch-deep)]"
            >
              Book a free 20-minute call
            </a>
            <a href="#services" className="px-2 py-4 font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 hover:decoration-pitch">
              See what we handle
            </a>
          </div>
        </div>

        {/* Team sheet: the one orchestrated motion moment on the page */}
        <div>

          <div className="relative rounded-[var(--radius-sheet)] border border-line bg-white p-6 shadow-[0_24px_60px_-28px_rgb(11_42_74_/_0.35)] sm:p-7">
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <h2 className="text-3xl font-bold">This week&rsquo;s admin</h2>
              <span className="text-sm text-ink-soft">Handled for you</span>
            </div>

            <ul className="mt-2">
              {TASKS.map((t, i) => (
                <li key={t.task} className="flex items-start gap-4 border-b border-line/60 py-3.5 last:border-0">
                  <motion.span
                    aria-hidden
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2"
                    initial={reduce ? false : { backgroundColor: "#ffffff", borderColor: "#c9d4cc" }}
                    animate={{ backgroundColor: "#1e8a4b", borderColor: "#1e8a4b" }}
                    transition={{ delay: 0.6 + i * 0.45, duration: 0.25 }}
                  >
                    <motion.svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M3.5 8.5 6.5 11.5 12.5 4.5"
                        initial={reduce ? false : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.75 + i * 0.45, duration: 0.3 }}
                      />
                    </motion.svg>
                  </motion.span>
                  <span>
                    <span className="block font-semibold leading-snug">{t.task}</span>
                    <span className="block text-sm text-ink-soft">{t.detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 rounded-xl bg-turf px-4 py-3 text-sm text-pitch-deep">
              Example week during spring registration. Your list depends on your club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
