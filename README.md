# alexzahrai.com

Personal portfolio and freelance web development site for Alex Zahrai, a web developer in Kalamazoo, MI. Built with Astro, TailwindCSS, and Alpine.js.

Live site: [alexzahrai.com](https://www.alexzahrai.com)

---

## Pages

| Route                              | Description                                            |
| :--------------------------------- | :----------------------------------------------------- |
| `/`                                | Homepage with hero, featured projects, and contact CTA |
| `/projects`                        | Case studies index                                     |
| `/projects/bells-brewery`          | Bell's Brewery case study                              |
| `/projects/bellevue-international` | Bellevue International case study                      |
| `/projects/besa`                   | Besa nonprofit case study                              |
| `/services`                        | Web design, development, and email marketing services  |
| `/work`                            | Agency and freelance work experience                   |
| `/contact`                         | Contact form and project inquiry                       |

---

## Tech stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Interactivity:** [Alpine.js](https://alpinejs.dev)
- **CMS:** Astro content collections (markdown)
- **Hosting:** Vercel
- **Forms:** Netlify Forms / Formspree

---

## Project structure

```
/
├── public/
│   └── og-image.png          # OG image for social sharing (1200x630)
├── src/
│   ├── components/           # Reusable UI components
│   ├── content/
│   │   └── projects/         # Case study markdown files
│   ├── layouts/              # Base page layouts
│   └── pages/
│       ├── index.astro       # Homepage
│       ├── projects/         # Project/case study pages
│       ├── services.astro
│       ├── work.astro
│       └── contact.astro
└── astro.config.mjs
```

---

## Commands

Run from the project root. Swap `npm` for `pnpm`, `yarn`, or `bun` if preferred.

| Command                   | Action                                      |
| :------------------------ | :------------------------------------------ |
| `npm install`             | Install dependencies                        |
| `npm run dev`             | Start dev server at `localhost:4321`        |
| `npm run dev:network`     | Start dev server on local network           |
| `npm run sync`            | Generate TypeScript types for Astro modules |
| `npm run build`           | Build production site to `./dist/`          |
| `npm run preview`         | Preview production build locally            |
| `npm run preview:network` | Preview build on local network              |
| `npm run lint`            | Run ESLint                                  |
| `npm run lint:fix`        | Auto-fix ESLint issues                      |
| `npm run astro ...`       | Run Astro CLI commands                      |
| `npm run astro -- --help` | Astro CLI help                              |

---

## Adding a new case study

1. Create a new markdown file in `src/content/projects/`.
2. Copy the frontmatter structure from an existing case study.
3. Fill in the client, role, contribution, outcome, and tech stack.
4. Add a screenshot to `public/` and reference it in the frontmatter.
5. The projects index page pulls case studies automatically from the content collection.

---

## SEO notes

- `LocalBusiness` JSON-LD schema is set on the homepage targeting Kalamazoo, MI.
- Sitemap is generated via `@astrojs/sitemap` and available at `/sitemap-index.xml`.
- Submit the sitemap to Google Search Console after any major structural changes.
- Each page has a unique title tag and meta description. Edit them in the page frontmatter or in the layout `<head>`.

---

## License

MIT
