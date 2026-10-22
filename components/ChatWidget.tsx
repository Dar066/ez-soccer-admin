"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_FALLBACK, FAQS, matchFaq } from "@/lib/faq";

type Msg = { from: "bot" | "user"; text: string };

const GREETING: Msg = {
  from: "bot",
  text: "Hi! Ask about our packages, platforms, getting started or anything in the FAQ. Or tap a question below.",
};

const QUICK = ["How much does it cost?", "How soon can you start?", "Do you need our club's login?", "How do I get in touch?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [msgs, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function ask(text: string) {
    const t = text.trim();
    if (!t) return;
    const exact = FAQS.find((f) => f.q === t);
    const hit = exact ?? matchFaq(t);
    setMsgs((m) => [...m, { from: "user", text: t }, { from: "bot", text: hit ? hit.a : CHAT_FALLBACK }]);
    setInput("");
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Questions about EZ Soccer Admin"
          className="fixed bottom-40 right-4 z-[70] flex h-[min(30rem,calc(100dvh-12rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-20px_rgb(11_42_74_/_0.45)] sm:right-6"
        >
          <div className="flex items-center justify-between bg-[#0B2A4A] px-5 py-4 text-chalk">
            <div>
              <p className="font-display text-2xl font-bold leading-none">Questions?</p>
              <p className="mt-1 text-sm text-chalk/75">Instant answers from our FAQ</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="grid size-9 place-items-center rounded-full hover:bg-white/10">
              <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
              </svg>
            </button>
          </div>

          <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto bg-chalk px-4 py-4">
            {msgs.map((m, i) => (
              <p
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.95rem] leading-snug ${
                  m.from === "bot" ? "rounded-bl-md bg-white text-ink shadow-sm" : "ml-auto rounded-br-md bg-pitch text-white"
                }`}
              >
                {m.text}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  className="rounded-full border border-pitch/40 bg-white px-3 py-1.5 text-sm text-pitch-deep hover:bg-turf"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex gap-2 border-t border-line bg-white p-3"
          >
            <label htmlFor="chat-input" className="sr-only">Type your question</label>
            <input
              ref={inputRef}
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-line bg-chalk px-4 py-2.5 text-[0.95rem] outline-none focus:border-pitch"
            />
            <button type="submit" className="rounded-full bg-[#0B2A4A] px-4 font-semibold text-chalk hover:bg-pitch-deep">
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with questions"}
        className="fixed bottom-6 right-4 z-[70] grid size-14 place-items-center rounded-full bg-[#0B2A4A] text-chalk shadow-lg ring-2 ring-white hover:bg-pitch-deep sm:right-6"
      >
        {open ? (
          <svg aria-hidden viewBox="0 0 16 16" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
          </svg>
        ) : (
          <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5v-9Z" />
            <path d="M8.5 9.5h7M8.5 12.5h4" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </>
  );
}
