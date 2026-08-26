# Wahidul Islam — Portfolio

Personal portfolio site for **Wahidul Islam**, Senior Backend Engineer. Built as a single-page React application with a white terminal aesthetic, anchor navigation, project/blog detail routes, and Firebase Hosting deployment.

**Live site:** [https://wahidulislam-site.web.app](https://wahidulislam-site.web.app)

---

## Table of contents

- [Tech stack](#tech-stack)
- [Features](#features)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Updating content](#updating-content)
- [Routes](#routes)
- [Scripts](#scripts)
- [Deploy to Firebase](#deploy-to-firebase)
- [Git workflow](#git-workflow)
- [Troubleshooting](#troubleshooting)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build tool | Vite 7 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React, Font Awesome |
| Contact form | EmailJS + Google reCAPTCHA v3 |
| Hosting | Firebase Hosting |
| Data | Local JSON files (no backend required for content) |

---

## Features

- **One-page home** with scroll sections: Hero, About, Skills, Works, Achievements, Experience, Contact, Blog
- **White terminal UI** — mono typography, terminal cards, grid background, animated loader
- **Anchor navigation** — header links scroll to `#about`, `#works`, etc., with fixed-header offset
- **Detail pages** — `/projects/:id` and `/blog/:slug`
- **NDA-safe enterprise projects** — confidential work listed without company names or public links
- **Contact form** — EmailJS with optional reCAPTCHA verification
- **SPA routing** — Firebase rewrite rules send all paths to `index.html`

---

## Project structure

```
my-portfolio/
├── public/
│   ├── files/              # Logo, CV, OG image (static assets)
│   └── projects/           # Project card images
├── src/
│   ├── assets/             # Bundled images (e.g. hero photo)
│   ├── components/
│   │   ├── common/         # Header, Footer, Loader
│   │   ├── sections/       # Hero, About, Projects, etc.
│   │   └── ui/             # TerminalCard, ProjectCard, etc.
│   ├── context/            # Settings providers
│   ├── data/               # JSON content (edit these to update site)
│   ├── hooks/              # useActiveSection, etc.
│   ├── layouts/            # RootLayout
│   ├── pages/              # Home, detail pages, NotFound
│   ├── routes/             # AppRouter
│   ├── services/           # projectService, contactService, firebase
│   ├── styles/             # index.css, App.css, Loader.css
│   └── utils/              # scrollToTop, motionVariants
├── dist/                   # Production build output (generated)
├── firebase.json           # Firebase Hosting config
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** 9+
- **Firebase CLI** (for deployment): `npm install -g firebase-tools`

### Install

```bash
git clone https://github.com/Wahidu1/my-portfolio.git
cd my-portfolio
npm install
```

### Environment variables

Create a `.env` file in the project root (see [Environment variables](#environment-variables)). The app runs without all vars, but contact form, reCAPTCHA, and Firebase analytics need them.

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production preview (local)

```bash
npm run build
npm run preview
```

Open [http://localhost:4173](http://localhost:4173).

---

## Environment variables

Copy this template into `.env` and fill in your values. **Never commit `.env`** — it is listed in `.gitignore`.

```env
# App
VITE_APP_NAME=Wahidul Islam | Backend Engineer
VITE_SITE_URL=https://wahidulislam-site.web.app

# Firebase (optional — analytics / future features)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=

# Google reCAPTCHA v3 (contact form)
VITE_RECAPTCHA_KEY=

# EmailJS (contact form)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_ADMIN_TEMPLATE_ID=
VITE_EMAILJS_USER_TEMPLATE_ID=

# Backend API (optional — currently uses local JSON)
VITE_API_BASE_URL=http://localhost:5001/api/v1
```

Vite only exposes variables prefixed with `VITE_`.

---

## Updating content

Content is stored in JSON under `src/data/`. After editing, save the file — Vite hot-reloads in dev. Rebuild before deploy.

| File | Purpose |
|------|---------|
| `settings.json` | Social links, about text, hero header, site name |
| `settingsFiles.json` | Logo path, CV download path |
| `projects.json` | Portfolio projects (Works section) |
| `experiences.json` | Job history |
| `skills.json` | Skills list |
| `achievements.json` | Achievements |
| `blogs.json` | Blog posts |

### Projects (`projects.json`)

Each project object:

```json
{
  "id": 5,
  "title": "Employee Attendance System",
  "subtext": "Enterprise Platform · Confidential",
  "description": "Short description for detail page.",
  "image": "/projects/attendance-system.jpg",
  "technologies": ["Django", "DRF", "PostgreSQL"],
  "live_link": "",
  "github_link": ""
}
```

- **Images:** place files in `public/projects/` and reference as `/projects/filename.jpg`
- **Order:** array order controls grid display (IDs can stay fixed for stable URLs)
- **NDA projects:** leave `live_link` and `github_link` empty — UI shows `nda · no public demo`

### Static files

| Path | Usage |
|------|--------|
| `public/files/logo.png` | Header/footer logo |
| `public/files/CV.pdf` | Download CV button |
| `public/files/og-image.png` | Social share preview |
| `public/projects/*` | Project thumbnails |

---

## Routes

| URL | Page |
|-----|------|
| `/` | Home (all sections) |
| `/#about`, `/#works`, … | Home + scroll to section |
| `/projects/:id` | Project detail |
| `/blog/:slug` | Blog detail |
| `*` | 404 |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint |

---

## Deploy to Firebase

Hosting serves the **`dist/`** folder. You must **build before every deploy**.

### First-time setup

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Log in**

   ```bash
   firebase login
   ```

3. **Link project** (creates `.firebaserc` locally — not committed)

   ```bash
   firebase use wahidulislam-site
   ```

   Or initialize if needed:

   ```bash
   firebase init hosting
   ```

   Use these answers:

   - Public directory: **`dist`**
   - Single-page app: **Yes**
   - GitHub Actions: optional

4. **Environment variables for production**

   Create `.env` with production values before `npm run build`. Vite bakes env vars into the build at compile time.

### Deploy (every release)

```bash
# 1. Install dependencies (if needed)
npm install

# 2. Production build
npm run build

# 3. Deploy hosting only
firebase deploy --only hosting
```

Successful deploy output:

```
Hosting URL: https://wahidulislam-site.web.app
```

### Deploy checklist

- [ ] `.env` has correct production keys (especially EmailJS & reCAPTCHA)
- [ ] `npm run build` completes without errors
- [ ] New images added under `public/` (copied into `dist/` on build)
- [ ] `firebase deploy --only hosting` succeeds
- [ ] Hard-refresh live site and test `/#works`, contact form, detail pages

### Firebase config reference

From `firebase.json`:

- **Site:** `wahidulislam-site`
- **Public folder:** `dist`
- **SPA rewrite:** all routes → `/index.html`

---

## Git workflow

Example flow for a feature branch and deploy:

```bash
# Create branch
git checkout -b feature/my-update

# Make changes, then commit
git add .
git commit -m "Describe your change"

# Push branch
git push -u origin feature/my-update

# Build and deploy
npm run build
firebase deploy --only hosting
```

Open a pull request on GitHub before merging to `main` if you use branch protection.

**Current production branch example:** `feature/portfolio-enterprise-works`

---

## Troubleshooting

### Works / projects not showing

- Confirm entries exist in `src/data/projects.json`
- Check browser console for errors
- Rebuild: `npm run build`
- Ensure images exist in `public/projects/`

### Contact form not sending

- Verify all `VITE_EMAILJS_*` and `VITE_RECAPTCHA_KEY` vars in `.env`
- Rebuild after changing env vars
- Check EmailJS dashboard for quota/errors

### 404 on refresh for `/projects/1`

- Firebase Hosting must have SPA rewrite (`**` → `/index.html`) — already in `firebase.json`
- Redeploy if config changed

### Old content after deploy

- Run `npm run build` before `firebase deploy`
- Hard-refresh browser (Ctrl+Shift+R) or clear cache

### Social share preview wrong or missing image

- OG tags require **absolute URLs** — set `VITE_SITE_URL` in `.env` before build
- Image must be at `public/files/og-image.png` (recommended 1200×630 or larger)
- After deploy, clear platform cache:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator) (X)
- LinkedIn/Facebook cache previews for ~24 hours — use debugger to force refresh

### `firebase: command not found`

```bash
npm install -g firebase-tools
```

---

## License

Private portfolio project — © Wahidul Islam.
