# Adebayo Muis' Portfolio

The personal portfolio of Adebayo Muis, a frontend engineer focused on fast, optimized user interfaces. The site brings together a short introduction, selected tools and projects, a markdown-powered blog, a downloadable resume, and links to social profiles.

## What is included

- **Homepage (`/`)**: Introduction, current project, technology stack, selected projects, recent music activity, resume download, and social links.
- **Blog (`/blog`)**: Published posts loaded from Markdown files in `content/blog`, with individual article pages at `/blog/[slug]`.
- **Projects (`/projects`)**: A list of projects with descriptions and links to their live sites or package pages. Project data lives in `src/lib/data/projects-list.ts`.
- **Theme switching**: A light/dark theme toggle that persists the visitor's choice and uses the system preference when no choice has been saved.
- **Now playing**: The homepage can show the latest Last.fm track through `/api/now-playing`. Without Last.fm credentials, it displays a placeholder instead.

The project detail route (`/projects/[slug]`) exists but currently displays an “in progress” placeholder rather than a full project case study.

## Running locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

Useful commands:

```bash
npm run check    # Svelte and TypeScript checks
npm run lint     # Prettier and ESLint checks
npm run build    # Production build
npm run preview  # Preview the production build
```

## Content and configuration

Add blog posts as Markdown files in `content/blog`. Posts use frontmatter for their title, description, date, order, and optional tags.

Update the portfolio's projects, tools, links, and current project in `src/lib/data/site-data.ts` and `src/lib/data/projects-list.ts`.

To enable the now-playing card, provide these private environment variables:

```bash
LASTFM_API_KEY=your_lastfm_api_key
LASTFM_USERNAME=your_lastfm_username
```

The resume is served from `static/resume.pdf`. Static images are stored in `static/images`.

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) and [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Skriplet](https://www.npmjs.com/package/skriplet) for Markdown content
- [Hugeicons](https://hugeicons.com/) for interface icons
- [Svelte Motion](https://www.npmjs.com/package/svelte-motion) for animation utilities
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality

## Author

- GitHub: [Charmingdc](https://github.com/Charmingdc)
- X: [@charmingdc01](https://x.com/charmingdc01)
- LinkedIn: [Adebayo Muis](https://linkedin.com/in/adebayo-muis)
- Email: [charmingdc002@gmail.com](mailto:charmingdc002@gmail.com)
