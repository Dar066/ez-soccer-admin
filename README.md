# EZ Soccer Admin — landing page

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Motion · TypeScript

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub, then import the repo in Vercel. No environment variables needed.

## Where to edit

| What | File |
| --- | --- |
| Contact email, nav links | `lib/site.ts` |
| Colors and fonts | `app/globals.css` (`@theme` block) |
| Hero and "This week's admin" sheet | `components/Hero.tsx` |
| All other sections | `components/Sections.tsx` |
| Contact form | `components/Contact.tsx` |
| Page title and SEO | `app/layout.tsx` |

The contact form opens the visitor's email app with their details filled in.
To store leads instead (for example in Supabase), replace `onSubmit` in `components/Contact.tsx`.
