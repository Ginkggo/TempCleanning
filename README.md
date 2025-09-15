# Legacy Cleanning Inc — SPA

React + Vite + MUI single-page site.

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages

- This project is preconfigured for GitHub Pages.
- Vite `base` is set to `./` so assets work at `https://USERNAME.github.io/REPO/`.
- The included workflow `.github/workflows/deploy.yml` builds on pushes to `main` and deploys to Pages.

### Steps
1. Create a new repo on GitHub (e.g., `legacy-cleanning-site`).
2. Push this project to the repo.
3. In the repo: **Settings → Pages → Source = GitHub Actions**.
4. Push to `main` — the workflow will build and publish to Pages.