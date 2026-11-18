# test

A small web project built with plain HTML, CSS and JavaScript — no frameworks, no build step.

## Features

- Responsive layout with flexbox and CSS grid
- Light/dark theme toggle (saved in localStorage)
- Interactive counter (also persisted)
- Zero dependencies

## Structure

```
index.html   Markup
style.css    Styles and theme variables
script.js    Theme toggle and counter logic
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Any static host works: GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
For GitHub Pages, enable it in **Settings → Pages → Deploy from branch** and pick the branch containing these files.
