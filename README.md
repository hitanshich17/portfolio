# hitanshichhabria.in

The personal portfolio of **Hitanshi Chhabria**, software engineer (Drexel CS; previously at SAP and SEPTA).
**Live:** https://hitanshichhabria.in

## What's on it

- **Experience:** roles shown as stops along a route, each opening a pop-up with details.
- **Projects:** a "recipe box" of case studies (NextToSkin, Voyago, Way2Go and more). As you scroll, cards
  rise out of the box one at a time; each opens a full write-up.
- **About, interests and contact:** email, LinkedIn, GitHub, résumé download and optional Google Calendar
  booking.

## How it's built

Plain **HTML, CSS and JavaScript**: no framework and no build step, so the site is fast and easy to host
anywhere.

- **Motion:** a scroll-driven, pinned "recipe box" animation smoothed with a small spring, plus hero letter and
  typewriter effects. Everything falls back to a static layout for reduced-motion settings, touch screens and
  short viewports.
- **Content in data:** experience pop-ups, project case studies and contact links live in plain objects in
  `script.js`, so updating the site doesn't mean editing markup.
- **SEO and sharing:** Open Graph tags, structured data, a sitemap and `robots.txt`.
- **Hosting:** Hostinger, with `.htaccess` for compression and caching.

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
| Recipe-box animation | `recipe.js` and `recipe.css` |

To add Google Calendar booking: in Google Calendar create an **Appointment schedule**, then **Share → Website
embed**, and paste the iframe's `src` URL into `CONTACT_LINKS.calendar`.

## Deploying

Upload everything except `.git`, `README.md` and `.gitignore` to `public_html` (keep `.htaccess`). Or connect the
repo once in **hPanel → Advanced → Git** (branch `main`, directory `public_html`) with auto-deployment, so every
push goes live.
