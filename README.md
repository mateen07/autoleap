# AutoLeap AI CRM Case Study — Slide Web App

A lightweight, static web app that presents the 9-slide deck with keyboard navigation, overview grid, and fullscreen mode.

## Files
- `index.html` — app shell
- `styles.css` — theme + layout
- `app.js` — slide data + navigation logic
- `assets/slide1-visual.svg` — simple hero visual for Slide 1 (vector)

## Run locally
Option A (Python built-in server):
```bash
cd autoleap-ai-crm-slides-webapp
python -m http.server 8080
```
Then open: `http://localhost:8080`

Option B (VS Code Live Server):
- Open folder in VS Code
- Right click `index.html` → *Open with Live Server*

## Host it (any static hosting)
- **GitHub Pages**: push this folder to a repo and enable Pages from the main branch.
- **Netlify**: drag-and-drop the folder in Netlify.
- **Vercel**: deploy as a static site.

## Customize
- Update slide text inside `app.js` in the `slides` array.
- Add more visuals by placing images/SVGs in `assets/` and referencing them from the `media` field.

## Keyboard shortcuts
- ← / → : previous / next
- O : overview
- F : fullscreen
- Home / End : first / last
- ? : help
