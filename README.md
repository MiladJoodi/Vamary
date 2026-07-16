# Vamary

Modern clinic website for plastic surgery and aesthetic care. Built with Next.js 16.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Swiper
- React Hook Form + Zod

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home (hero, services, gallery, team, blog, …) |
| `/about` | Clinic story and milestones |
| `/services` | Service list |
| `/services/[slug]` | Service detail |
| `/cases` | Case studies |
| `/cases/[slug]` | Case detail + before/after |
| `/team` | Doctors |
| `/team/[slug]` | Doctor profile |
| `/pricing` | Packages |
| `/faq` | FAQ |
| `/appointment` | Booking form |
| `/blog` | Articles |
| `/blog/[slug]` | Article detail |
| `/contact` | Contact form + map |

## Run

```bash
npm install
npm run dev
```

```bash
npm run build
npm start
```

## Structure

```
app/           pages and layout
components/    UI, layout, sections
data/          content (services, team, blog, …)
public/images/ assets
```
