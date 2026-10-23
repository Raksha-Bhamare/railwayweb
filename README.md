# railwayweb — GatiShkti / AiEnsured (static version)

A static React + Tailwind CSS re-creation of the **GatiShkti** app
(`https://gatishkti.netlify.app/`) — the full flow: landing page, Template,
SOR Check, PPT Generation and Rag ChatBot modules. Purely presentational — no
backend or data fetching.

## Tech

- [Vite](https://vitejs.dev) + React 19
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (no config file needed)
- [React Router](https://reactrouter.com) for the module pages

## Run it

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing — "Welcome to AiEnsured" module picker |
| `/template` | Template Matched / Template Missing view |
| `/sor` | SOR Check dashboard (DPR / Item Type / Tolerance, results table) |
| `/ppt-generation` | Presentation viewer with slide sidebar |
| `/chatbot` | Rag ChatBot UI (local echo only — static build) |

A hamburger drawer (top-left on every page) links all the modules.
Changing **Item Type** on `/sor` swaps the table view/columns, and the header
title follows the selected DPR.

## Build for production

```bash
npm run build    # outputs static files to dist/
npm run preview  # serve the production build locally
```

`public/_redirects` (Netlify) is included so client-side routes work when the
`dist/` folder is dropped onto Netlify. Other hosts need an equivalent SPA
fallback (rewrite all paths to `index.html`).

## Structure

```
src/
  main.jsx                    entry point
  App.jsx                     router + drawer
  index.css                   Tailwind import + base styles
  data/dprData.js             static DPR / template / slides data
  context/UiContext.jsx       drawer open state
  components/
    shared.jsx                Shell, PageContainer, HamburgerButton, logos, titles
    Drawer.jsx                slide-out navigation
    Landing.jsx               module picker
    SorCheck.jsx              SOR Check page (header + state)
    CheckPanel.jsx            Select DPR / Item Type / Tolerance % / Run Check
    ResultsTable.jsx          results table (view/columns driven by props)
    Template.jsx              Template Matched / Missing page
    PptViewer.jsx             presentation viewer
    ChatBot.jsx               chat UI with sidebar
    icons.jsx                 inline SVG icons (general)
    moduleIcons.jsx           inline SVG icons (module cards, chat, template)
```
