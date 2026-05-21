# Portfolio

Personal portfolio site — React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion.

## Setup

```bash
cd Desktop/portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

## Editing content

**All content lives in one file: `src/data/portfolio.json`**

| Field | What to change |
|---|---|
| `profile.name` / `shortName` | Your display name |
| `profile.tagline` | One-line pitch |
| `profile.bio` | About paragraph |
| `profile.social.github/linkedin/email` | Your links — leave empty `""` to hide the pill |
| `certifications[]` | Add/remove cert badges |
| `skills.categories[]` | Skill groups and pill items |
| `experience[]` | Work history rows |
| `projects[]` | Project cards — set `highlight: true` for the featured card |

### Hiding social links

Set the value to `""` — the pill will not render.

### Adding a project image

Set `"image": "/your-screenshot.png"` and place the file in the `public/` folder.

### Featured project

Set `"highlight": true` on exactly one project to render it in the full-width featured section above the grid.
