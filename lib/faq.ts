import { CONTACT_EMAIL } from "./site";

/* Shared by the FAQ section and the chat widget.
   `keywords` are what the chat widget matches against a visitor's message. */
export type Faq = { q: string; a: string; keywords: string[]; inSection?: boolean };

export const FAQS: Faq[] = [
  {
    q: "Do you need our club's login?",
    a: "No shared passwords. Your club creates an admin role for us on GotSport or Sports Connect, with only the permissions the work needs. You can remove it at any time.",
    keywords: ["login", "password", "access", "account", "credentials", "permission"],
    inSection: true,
  },
  {
    q: "Does this replace our registrar?",
    a: "It supports them. Your registrar and board keep decisions and oversight. We take on the repetitive work so they're not doing it alone.",
    keywords: ["registrar", "replace", "volunteer", "board"],
    inSection: true,
  },
  {
    q: "How do you handle player and family data?",
    a: "We only work inside the access your club grants, and we follow your club's and league's data and safeguarding policies. Nothing is copied to outside tools without your approval.",
    keywords: ["data", "privacy", "safe", "secure", "security", "safeguarding", "gdpr"],
    inSection: true,
  },
  {
    q: "How soon can you start?",
    a: "Usually within a week or two of the call, depending on how close your next deadline is. If registration opens soon, tell us on the call and we'll prioritize setup.",
    keywords: ["start", "soon", "when", "begin", "onboard", "how long"],
    inSection: true,
  },
  {
    q: "We use a different platform. Can you still help?",
    a: "We specialize in GotSport and Sports Connect. If your club uses something else, ask anyway and we'll tell you honestly whether we're a good fit.",
    keywords: ["platform", "gotsport", "sports connect", "software", "system", "different", "other"],
    inSection: true,
  },
  {
    q: "How much does it cost?",
    a: "Starter Support is $199/mo (up to 5 hours), Club Admin Plus is $449/mo (up to 12 hours) and Season Operations Partner is $799/mo (up to 24 hours). Additional hours are $35/hour.",
    keywords: ["price", "pricing", "cost", "fee", "package", "plan", "how much", "$", "rate", "hour"],
  },
  {
    q: "What do you handle?",
    a: "Registration, rosters and team setup, player cards and passes, documents and compliance, family communication, and clean-up and reporting.",
    keywords: ["service", "handle", "do you do", "roster", "card", "registration", "document", "help with"],
  },
  {
    q: "How do I get in touch?",
    a: `Use the form at the bottom of this page to request a free 20-minute call, or email ${CONTACT_EMAIL}.`,
    keywords: ["contact", "email", "call", "talk", "reach", "phone", "book", "touch"],
  },
];

export const CHAT_FALLBACK = `I don't have an answer for that yet. Use the form at the bottom of this page, or email ${CONTACT_EMAIL}, and the team will reply.`;

export function matchFaq(message: string): Faq | null {
  const text = message.toLowerCase();
  let best: Faq | null = null;
  let bestScore = 0;
  for (const f of FAQS) {
    const score = f.keywords.reduce((s, k) => (text.includes(k) ? s + k.length : s), 0);
    if (score > bestScore) {
      best = f;
      bestScore = score;
    }
  }
  return best;
}
