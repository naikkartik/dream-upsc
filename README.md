# Dream UPSC — Study Intelligence System

**UPSC CSE 2026 · Kartik · [naikkartik](https://github.com/naikkartik)**

Live site → **[https://naikkartik.github.io/dream-upsc](https://naikkartik.github.io/dream-upsc)**

---

## What is this?

A static GitHub Pages site that hosts exam-ready UPSC study intelligence — revision cards, prelims fact banks, and mains answer frameworks — generated strictly from uploaded chapter content via the Dream UPSC AI pipeline.

## Site Structure

```
dream-upsc/
├── index.html              ← Main dashboard (search, filter, stats)
├── assets/
│   ├── css/style.css       ← Global dark-academic theme
│   └── js/main.js          ← Search, filter, modal, data registry
├── notes/
│   ├── template.html       ← Revision card template (copy per topic)
│   └── *.html              ← Generated 1-page revision notes
├── prelims/
│   └── *.html              ← Prelims MCQ / fact bank pages
└── mains/
    └── *.html              ← Mains framework pages
```

## How to Add a New Revision Note

1. Copy `notes/template.html` → `notes/<topic-slug>.html`
2. Replace all `[[ ... ]]` placeholders with real content
3. Add an entry to `NOTES_DATA` array in `assets/js/main.js`
4. Commit and push — GitHub Pages auto-deploys

## Enabling GitHub Pages

1. Go to **Settings → Pages** in this repository
2. Source: **Deploy from branch**
3. Branch: `main` / folder: `/ (root)`
4. Save — site will be live at `https://naikkartik.github.io/dream-upsc`

---

*UPSC_HOLISTICS_PREPARATIONS v1.0 · Target: CSE 2026*
