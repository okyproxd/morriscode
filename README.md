# MorrisCode

A friendly programming language built as a final-year gift for Mr. Morris.

## Files

**Required for the site to work:**
- `index.html` — the whole app (one file, no dependencies, ~155 KB)
- `_redirects` — Cloudflare Pages route rewrites for `/editor`, `/docs`, etc.

**Recommended:**
- `.gitignore` — keeps junk (.git internals, .wrangler cache, OS files) out of git
- `README.md` — this file

**Optional:**
- `morriscode.html` — duplicate of index.html, can ignore
- `examples/` — readable copies of the four games (already baked into index.html)

## Deploy: use Cloudflare Pages, not Workers

Your last deploy ran `npx wrangler deploy`, which is the **Workers** command. It uploaded `.git/` and other junk as assets and choked on `_redirects` validation. Switch to **Pages** — it's simpler and built for static sites like this.

1. Cloudflare dashboard → **Workers & Pages** → click the **Pages** tab
2. **Create a Pages project** → **Connect to Git** → pick your repo
3. Build settings:
   - Framework preset: **None**
   - Build command: **(leave blank)**
   - Build output directory: **(leave blank or `/`)**
   - Root directory: **(leave blank)**
4. Save and Deploy

Pages auto-builds on every `git push`. No `wrangler deploy`, no build step.

If you accidentally created a Workers project already, delete it (Cloudflare dashboard → Workers & Pages → that project → Settings → bottom of page → Delete).

## Custom domain (after Pages is working)

Pages → your project → **Custom domains** → enter your domain.

If your domain is on GoDaddy, easiest path is to switch nameservers to the two Cloudflare gives you. Then everything routes through Cloudflare automatically.

## Local testing

```bash
cd /path/to/morriscode
python3 -m http.server 8000
# visit http://localhost:8000
```

You can also just double-click `index.html` — most things work, but the `/editor`-style URLs only work over HTTP(S).
