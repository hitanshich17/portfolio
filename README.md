# hitanshichhabria.in

Personal portfolio of Hitanshi Chhabria — designer & developer.
Plain HTML, CSS and JavaScript. No build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Editing content

| What | Where |
| --- | --- |
| Email, Google Calendar, LinkedIn, GitHub, résumé links | `CONTACT_LINKS` at the top of `script.js` (empty = hidden) |
| Work experience pop-ups | `experienceData` in `script.js` |
| Project case studies | `projectCaseStudies` in `script.js` |
| Page sections and cards | `index.html` |

### Google Calendar booking

1. In Google Calendar, create an **Appointment schedule**.
2. Open it → **Share** → **Website embed** → copy the `src="…"` URL from the iframe code.
3. Paste it into `CONTACT_LINKS.calendar` in `script.js`.

## Deploying to Hostinger

Upload everything except `.git`, `README.md` and `.gitignore` to `public_html`
(keep `.htaccess` — it enables compression and caching).

Or connect this repo once in **hPanel → Advanced → Git** (branch `main`,
directory `public_html`) and turn on auto-deployment, so every push goes live.
