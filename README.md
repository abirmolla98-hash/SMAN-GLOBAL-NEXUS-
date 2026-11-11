# Md. Mobaeid Mollah Abir

Editorial portfolio for an AI engineer and agricultural dealership proprietor in Bangladesh. The site presents working software separately from pre-launch frameworks and named concepts.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. No API key is required.

## Deploy

Any static host can serve `dist/`.

- **Vercel or Netlify:** `netlify.toml` sets `npm run build` and publishes `dist/`. If a Deploy Preview fails with `plugin_state: failed_build`, open the deploy log in the Netlify dashboard; site-level build plugins are not visible from the repository alone.
- **Cloudflare Pages:** same build command and output directory.
- **GitHub Pages:** upload `dist`, or use an action that runs the build. If the site lives on a project subpath, set `base` in `vite.config.ts` to that path before building. Portrait and favicon paths use Vite’s `BASE_URL`, so they follow that setting.

The contact form is a demonstration. It validates in the browser and then offers a `mailto:` link. It does not store or send messages. To receive submissions, replace that step with a form endpoint you control (for example a serverless function or a form service) and keep the same fields: name, email, subject, and message.

## Photographs

- `public/portrait-studio.jpg` is the hero portrait.
- `public/portrait-field.jpg` is the environmental portrait in About.

Replace either file with a new JPEG of the same name to update the site.

## How the work is labeled

| Status | Meaning |
| --- | --- |
| Working build | Public repository with application code. KrishiPOS. |
| Partial | A dashboard exists; the marketing side is practice. |
| Pre-launch | SmartChar, described from 2023–2025 field research. |
| Concept | MIRA V4.1 and GIII. Named directions, without a public build. |

Professional links on the page: GitHub `abirmolla98-hash`, the public LinkedIn profile, X `@abir_molla`, and the link page at `mdmobaeidmollahabir.link`. Direct email is `abir.molla98@gmail.com`. The dealership address on file is `mssamadmollah@gmail.com`.
