# Eromosele Daniel Otaigbe - Portfolio

Modern, sleek personal portfolio for Eromosele Daniel Otaigbe (Full-Stack Developer | AI/Data-Focused). Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion for a fast, SEO-ready, recruiter-friendly experience.

![Portfolio Preview](./public/og-image.jpg)

## Features
- Dark mode by default with subtle gradients and glass-like cards
- Smooth scroll and section reveal animations
- Mobile-first layout with sticky CTA (desktop) and bottom CTA bar (mobile)
- SEO-ready metadata, OpenGraph, Twitter cards, sitemap, and robots
- Vercel-ready with clean structure and environment variable pattern

## Tech Stack
- Next.js (App Router), TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- shadcn/ui (Radix primitives)

## Project Structure
```
├── app/
│   ├── globals.css          # Global styles and theme tokens
│   ├── layout.tsx           # Metadata and app providers
│   ├── page.tsx             # Main one-page portfolio
│   └── sitemap.ts           # Sitemap generation
├── components/
│   ├── navigation.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── skills-section.tsx
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── ui/
├── public/
│   ├── og-image.jpg
│   ├── robots.txt
│   └── resume.pdf
├── .env.example
├── README.md
└── resume.md
```

## Local Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   pnpm dev
   ```
4. Build and start:
   ```bash
   pnpm build
   pnpm start
   ```

## Deployment (Vercel)
1. Push the repo to GitHub.
2. Import into Vercel (auto-detects Next.js).
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

## Custom Domain (High-Level)
1. Add the domain in Vercel.
2. Update DNS records (Vercel provides them).
3. Update `NEXT_PUBLIC_SITE_URL` to your domain.

## How to Edit Projects Data
Update the `projects` array in `components/projects-section.tsx`:
```ts
{
  title: "Project Name",
  subtitle: "One-line summary",
  description: "Short description",
  problem: "Problem statement",
  impact: "Impact / What I learned",
  tech: ["Tech 1", "Tech 2"],
  github: "#",
  demo: "#",
  icon: YourIcon,
  featured: true,
}
```

## Resume Section (Markdown)
The resume content is located in `resume.md` and mirrors the portfolio sections:
- Professional Summary
- Core Skills
- Featured Projects
- AI/Data Strengths

---
**Eromosele Daniel Otaigbe**  
Full-Stack Developer | AI/Data-Focused  
Nigeria (Remote-Ready)  
Email: eromosele.dev@gmail.com