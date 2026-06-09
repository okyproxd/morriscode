# MorrisCode

A tiny, friendly programming language I built as a final-project gift for my science teacher, Mr. Morris. You write commands in plain English-y syntax, press Run, and a canvas comes alive — no semicolons, no curly braces, no boilerplate.

**Live site:** [morriscode.owenkentyu.workers.dev](https://morriscode.owenkentyu.workers.dev)

## What it does

- A custom interpreted language designed for beginners (kids especially)
- Code editor with line numbers, save/load, fullscreen, keyboard shortcuts
- 20+ shapes, 200+ named colors, 60+ fonts
- Animations: spin, pulse, bounce, shake, fade, rainbow
- Lists, variables, math, conditionals, loops, events
- Mouse and keyboard input for making games
- A complete Snake game built in the language itself, included as an example
- Full documentation with examples for every command
- Reference page with click-to-copy galleries of every shape, color, and font

## Try it

Open the [live site](https://morriscode.owenkentyu.workers.dev), click **Editor**, click **✨ Example** to load Snake, click **▶ Run**. Click the canvas, then use the arrow keys to play.

A minimal program looks like this:

```
background(midnight)
draw(circle:5:gold:noborder:800,500)
animate(circle_1:pulse:4)
```

That's a glowing gold circle pulsing in the middle of the canvas.

## Tech

- One static HTML file with everything inlined — language interpreter, editor, docs, all of it
- Hosted on Cloudflare Workers (static-assets mode) with a tiny `_worker.js` for routing
- No build step, no dependencies, no framework
- Designed to work even when opened directly as a local file

## File structure

```
morriscode/
├── _worker.js          Cloudflare Worker entry (serves static files)
├── wrangler.jsonc      Cloudflare config
├── .gitignore
├── README.md
└── public/
    └── index.html      The entire app
```

## Local development

Clone the repo, then either open `public/index.html` directly in a browser, or run a quick local server:

```bash
cd public
python3 -m http.server 8000
# visit http://localhost:8000
```

## Built by

Owen Yu, Class of '26. Started May 2026. Built for Mr. Morris.
