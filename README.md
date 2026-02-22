# Portfolio site

This is a minimal static portfolio website intended for GitHub Pages. It uses plain HTML/CSS/JS and loads project metadata from `projects.json`.

Files added:
- `index.html` — main page
- `styles.css` — styles and responsive grid
- `scripts.js` — loads `projects.json` and renders project cards
- `projects.json` — sample project entries

How to preview locally (PowerShell):

```powershell
# from repository root
cd c:\Users\user\Documents\coding\aderemi.co.uk
# start a simple static server (Python 3)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy to GitHub Pages:
1. Create a repo on GitHub and push this code.
2. In the repository settings, enable GitHub Pages from the `main` branch (or `gh-pages` if you prefer).
3. Optionally add a `CNAME` file at the repo root for a custom domain.

Quick edits:
- Update `index.html` with your name, bio, and contact.
- Replace entries in `projects.json` with your actual projects (title, description, link, repo, tags).
