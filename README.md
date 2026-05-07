# MorrisCode — Source

The deployed version is a single `index.html` file (also copied as `morriscode.html`). This `source/` folder is for organization while editing.

## What's here

- `examples/` — the four built-in games as standalone `.txt` files.
  - `snake.txt`
  - `flappy.txt`
  - `pong.txt`
  - `tictactoe.txt`

These files are embedded into the deployed `index.html` at build time. To update a game:

1. Edit the file in `source/examples/`
2. Re-run the embed step (or just paste the new content directly into the `EXAMPLES = { ... }` block in `index.html`)

## Deploy checklist

- `index.html` — the main app
- `_redirects` — Cloudflare Pages SPA fallback (so `/editor`, `/docs` etc. work as direct URLs)
- That's it. Push to your repo, Cloudflare auto-builds.

## Local testing

Because the app uses the History API and possibly fetch for routing, opening `index.html` directly with `file://` mostly works but URL routing may not. Use a tiny local server:

```bash
cd /path/to/morriscode
python3 -m http.server 8000
# then visit http://localhost:8000
```
