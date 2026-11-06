# Portfolio website

Static site that presents your QA projects. No build step required.

## Customize before sharing

In `index.html`, replace:

- `YOUR_USERNAME` / `YOUR_PROFILE`
- `you@example.com`
- Headline / skills years if you want them personal

## Preview locally

```bash
# from repo root
npx --yes serve website
```

Or simply open `index.html` in a browser (project links use relative paths into `../projects/...`).

## Deploy (GitHub Pages)

1. Push this repo to GitHub
2. Settings → Pages → Deploy from branch → `/website` (or use a GitHub Action)
3. Put the Pages URL on your resume / LinkedIn

If Pages only serves the `/docs` or root folder, copy `website/*` to `/docs` or configure accordingly.
