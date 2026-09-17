# PHASE 0 — ZENITH + PROJECT RECONNAISSANCE

**Project:** Takeshi Energy website  
**Phase:** 0 — inspect, understand, document. No redesign.  
**Baseline path:** `takeshi_energy/` (one-page Zenith scaffold nested inside the workspace root)  
**Date:** 2026-09-16  
**Live browser / Lighthouse:** **UNAVAILABLE** — Cursor browser MCP did not register in this session. Responsive, accessibility, and performance notes below are from source inspection, not measured runtime.

---

## 1. Executive Summary

The repository currently contains a **free Zenith one-page Bootstrap solar/clean-energy template**, not a Takeshi Energy site. The intended one-page file is `takeshi_energy/index.html`. It is a static HTML page with local vendor libraries (Bootstrap 5.3.3), compiled theme CSS (`assets/css/onepage.css`), and a large `custom.js` that still contains **multi-page / unused widget code**.

**What this is:** a generic “solar installer” marketing page with placeholder copy, fictional statistics, fake team and testimonials, US dummy contact details, stock photography, and Zenith branding (including the template author’s Google Analytics ID).

**What this is not:** Takeshi Energy content, Takeshi visual identity, verified project evidence, or a working production contact form.

**Highest-risk facts for later phases:**

| Risk | Severity | Evidence |
|------|----------|----------|
| Entire page is demo/template content that could be mistaken for Takeshi proof | **HIGH** | `index.html` stats, testimonials, team, portfolio, pricing, contact |
| Missing `assets/js/send_email.js` (404) | **HIGH** | referenced at `index.html` line 1101; file not present |
| Template Google Analytics `G-CN09X6ELXM` still in head | **HIGH** | `index.html` lines 45–52 |
| Free-template attribution / asset rights not fully verified in-repo | **MEDIUM** | HTML footer comment; license URL only |
| Identity is “solar / clean energy”, not energy systems | **HIGH** (brand, later) | hero, services, CTA, FAQ |
| Multipage HTML files are **not** in this download; many links 404 | **MEDIUM** | `page-*.html` hrefs throughout |
| Live viewport verification not performed | **MEDIUM** | browser tooling unavailable |

No unauthorized redesign or production code changes were made during this phase.

---

## 2. Repository Inventory

### Workspace layout

```text
C:\Users\O\Devs\takeshi_energy\          ← workspace root
  PHASE-0-RECONNAISSANCE.md              ← this report (added in Phase 0)
  takeshi_energy\                        ← actual Zenith one-page package
    index.html                           ← ONE-PAGE IMPLEMENTATION
    favico.ico                           ← present (binary; not inspected as image)
    assets\
      css\onepage.css
      js\custom.js                       ← send_email.js MISSING
      images\                            ← photos, logos, decor SVG
      vendors\                           ← Bootstrap, plugins, PHPMailer, Bootstrap SCSS
```

No `package.json`, no README, no LICENSE file in the package, no sitemap, no robots.txt, no `.htaccess`, no Takeshi brand folder.

### HTML files

| File | Role |
|------|------|
| `takeshi_energy/index.html` | **Required** one-page site |
| `assets/**/index.html` | Dummy “Silence is golden.” directory indexes (Apache-style placeholders) |

**Not present (linked from the one-page):** `page-index.html`, `page-services.html`, `page-service-single.html`, `page-contact.html`, `page-portfolio-single.html`, `page-about.html`, `page-careers.html`, `page-case-studies.html`, `page-terms-conditions.html`, `page-privacy-policy.html`, `page-404.html`, `page-signup.html`, `page-signin.html`, `page-forgot-password.html`, `page-coming-soon.html`, `page-portfolio-masonry.html`.

### CSS

| File | Role |
|------|------|
| `assets/css/onepage.css` | Theme CSS for this one-page (Zenith header comment) |
| `assets/vendors/bootstrap/bootstrap.min.css` | Bootstrap 5.3.3 |
| Vendor CSS: GLightbox, Swiper, AOS, Bootstrap Icons | Loaded by `index.html` |
| `assets/vendors/bootstrap/scss/**` | Full Bootstrap SCSS source + tests — **not compiled by this project** |

### JavaScript

| File | Role |
|------|------|
| `assets/js/custom.js` | Theme behaviour (nav, AOS, Swiper, calculator, etc.) |
| `assets/js/send_email.js` | **MISSING** but referenced |
| Vendor JS listed in §4 | Loaded by `index.html` |
| `assets/vendors/bootstrap/bs-darkmode.js` | **Not referenced** by `index.html` |

### Other

- **PHPMailer 6.9.1** under `assets/vendors/PHPMailer/` — not wired to the one-page form.
- **No** PHP form handler in this package.
- **Fonts:** Satoshi (Fontshare CDN) + Inter (Google Fonts CDN). No local font files.

---

## 3. One-Page Architecture

**Intended one-page file:** `takeshi_energy/index.html`

**Required for one-page baseline (loaded by `index.html`):**

- CSS: Bootstrap, Bootstrap Icons, GLightbox, Swiper, AOS, `onepage.css`
- JS: Bootstrap bundle, GSAP, imagesLoaded, Isotope, GLightbox, Swiper, AOS, PureCounter, `custom.js`, `send_email.js` (broken)
- Fonts: Fontshare Satoshi, Google Inter
- Images listed in §5 “used by one-page”
- `favico.ico`

**Template material not currently required for this one-page:**

- Entire `assets/vendors/bootstrap/scss/` tree including tests
- `bs-darkmode.js`
- PHPMailer (until a server-side form exists)
- `assets/images/logo/` client-logo SVGs (Netflix, Apple, etc.) — **not referenced** in `index.html`
- Many decorative SVGs not referenced (`astronaut.svg`, `scribble-*.svg`, `arch-line*.svg`, Facebook/Google icons, unused quotes)
- Dummy `index.html` files in asset folders
- Unused Swiper/Isotope/countdown/progress/marquee code paths in `custom.js`

**Uncertain / human decision:** whether to keep the free-template footer credit; whether GSAP/Isotope remain after transformation; whether PHPMailer is wanted later.

### Section map (top to bottom)

```text
HEADER (navbar + offcanvas + social icons)
↓
HERO (#home) + overlapping image row
↓
STATS (no id)
↓
FEATURE CARDS (services__v8 — no id; not the #services block)
↓
ABOUT (#about) “Why Solar Energy?”
↓
SERVICES (#services)
↓
CTA (#cta) “Ready to Go Solar?”
↓
PORTFOLIO (#portfolio)
↓
SOLAR SAVINGS CALCULATOR (#solar-calc)
↓  ← </main> CLOSES HERE (markup bug)
WHY US (#whyus)   [outside <main>]
↓
TEAM (#team)
↓
TESTIMONIALS (#testimonials)
↓
PRICING (#pricing)
↓
FAQ (#faq)
↓
BLOG (#blog)
↓
HOW IT WORKS (#howitworks)
↓
CONTACT (#contact)
↓
FOOTER
↓
BACK TO TOP button (outside .site-wrap)
```

### Section table

| Section | Location | Purpose | CTAs | Imagery | Notes |
|---------|----------|---------|------|---------|--------|
| Header | `header.fbs__net-navbar` | Logo, in-page nav, demo dropdown, social | none primary | Zenith wordmark SVG | Logo links to missing `page-index.html` |
| Hero | `#home` | Solar lifestyle headline | Get Started `#`; Watch video (YouTube) | `hero-bg-2-min.jpg` CSS bg | `section` element |
| Hero images | after hero | Visual strip | links to missing `page-services.html` | img-3/4/5 | Not a landmark |
| Stats | `.stats__v8` | Animated counters | none | none | Demo numbers |
| Feature cards | `.services__v8` | Six generic “benefits” | none | inline SVG | Duplicate “services” idea vs `#services` |
| About | `#about` | Why solar | video lightbox | img-1 | Solar-centric |
| Services | `#services` | 3 service cards | View All `#`; cards → missing pages | SVG | Template services |
| CTA | `#cta` | Go solar | Contact → missing `page-contact.html` | worker-1.png, decor | |
| Portfolio | `#portfolio` | Project grid | missing single pages | img-1–5 | Repeated NYC titles |
| Calculator | `#solar-calc` | Client-side $ savings | Calculate | decor | USD assumptions |
| Why us | `#whyus` | Reasons + checklist | Get in touch → missing page | img-2, img-3 | Outside `<main>` |
| Team | `#team` | 4 people | social `#` | person-sq-1–4 | Fictional |
| Testimonials | `#testimonials` | Slider + 13M customers | prev/next `href="#"` | person-sq-2–6 | Fictional |
| Pricing | `#pricing` | $25 / $49 / $129 /mo | Get Started `#` | SVG | SaaS-style, not project quotes |
| FAQ | `#faq` | Accordion | none | img-3 | Solar FAQs, lorem answers |
| Blog | `#blog` | 4 posts | empty `href=""` | img-9/10/11/13 | Off-topic titles |
| How it works | `#howitworks` | 3 steps | none | SVG | Solar process |
| Contact | `#contact` | Details + form | Send Message | icons | Dummy US address |
| Footer | `footer` | About, company, accounts, contact | many missing pages | none | Zenith credit |

**Markup note:** `</main>` is at line 517, after the calculator. Why Us through footer sit **outside** `<main>` (`index.html` 517–1083). Inference: copy/paste from a larger template.

---

## 4. Dependency Audit

| Name | Version (evidence) | Purpose | Used by one-page? | Required? | Performance | Maintenance / security |
|------|--------------------|---------|-------------------|-----------|-------------|------------------------|
| Bootstrap CSS+JS | **5.3.3** (`bootstrap.min.css` / `bootstrap.bundle.min.js` headers) | Layout, offcanvas, accordion, forms | Yes | Yes (current scaffold) | Medium CSS/JS weight, expected | MIT; keep version pinned |
| Bootstrap Icons | **1.11.3** (CSS header) | Icons | Yes | Yes unless replaced | Font files | MIT |
| AOS | Version **not declared** in file header; typical 2.x bundle (`aos.js`) | Scroll fade-ins | Yes (`data-aos`) | Optional later | Extra CSS/JS; motion | No reduced-motion hook in theme |
| GLightbox | **3.3.0** (`version()` in `glightbox.min.js`) | YouTube/video lightbox | Yes | Only if video stays | Loads **Plyr from cdn.plyr.io 3.6.12** on video open | Third-party CDN at runtime |
| Swiper | **11.1.4** (`swiper-bundle.min.js` header) | Testimonials | Partially | Testimonials only | Full bundle loaded | Many unused inits in `custom.js` |
| GSAP | **3.12.5** (`gsap.min.js` header) | Logo marquee | **No matching DOM** (`.logo-wrapper` absent) | No for current page | JS cost with no UI | GreenSock standard license — **UNVERIFIED for Takeshi commercial use** |
| imagesLoaded | **5.0.0** | Isotope layout | Only if `#portfolio-grid` exists — **it does not** | No | Dead weight | MIT (header) |
| Isotope | **3.0.6** | Masonry filter | **Not used** (no `#portfolio-grid`) | No | Dead weight | **GPL-3.0** — commercial site risk if kept |
| PureCounter | **1.5.0** | Stat animation | Yes | Optional | Light | MIT |
| PHPMailer | **6.9.1** | Email | **Not used** | No now | Unused | Fine if unused; do not configure secrets |
| Fontshare Satoshi | CDN | Headings | Yes | Until fonts change | Render-blocking CSS | Fontshare terms **UNVERIFIED in-repo** |
| Google Fonts Inter | CDN | Body | Yes | Until fonts change | Render-blocking + Google request | Privacy (Google) |
| Google Analytics gtag | `G-CN09X6ELXM` | Analytics | Yes | **Must not ship as-is** | Extra request | **Wrong property** (template vendor) |
| Plyr (GLightbox default) | 3.6.12 CDN | Video player | On lightbox open | If video kept | Extra CDN | Third-party |

**jQuery:** not present. **No npm lockfile.**

---

## 5. Asset Audit

### Used by one-page HTML / CSS

| Asset | Type | Where | Job | Stock/template? | Alt | Notes |
|-------|------|-------|-----|-----------------|-----|-------|
| `hero-bg-2-min.jpg` | JPG (CSS `background-image`) | Hero | Hero photo of worker + panels | Yes — generic solar stock | **None** (CSS background) | Informational image without alt |
| `img-1-min.jpg` … `img-5-min.jpg` | JPG | Hero strip, about, portfolio, why us, FAQ | Solar farm / install stock | Yes | Placeholder string | Repeated |
| `img-9-min.jpg` `img-10-min.jpg` `img-11-min.jpg` `img-13-min.jpg` | JPG | Blog | Thumbnails | Yes | Placeholder | |
| `person-sq-1-min.jpg` … `person-sq-6-min.jpg` | JPG | Team, testimonials | Studio headshots | Yes | Placeholder | Not Takeshi staff |
| `worker-1.png` | PNG cutout | CTA | Worker with clipboard | Yes | Placeholder | |
| `logo-dark.svg` / `logo-light.svg` | SVG | Navbar | **“ZENITH” wordmark** | Template brand | Placeholder | **Not Takeshi** |
| `decor-1-2.svg` | SVG | CTA, calculator | Decoration | Template | Placeholder (should be decorative) | |
| `quote-3.svg` | SVG | Testimonials | Quote mark | Decorative | Typo alt: `placeholcer` | |
| `favico.ico` | ICO | Head | Favicon | Template | n/a | Exists |

Exact pixel dimensions and byte sizes were **not measured** (no reliable directory listing in this session; binary images are present and readable).

### Present but not referenced by `index.html`

- `assets/images/logo/` and `logo/actual-size/` — Netflix, Google, Apple, Uber, IBM, Airbnb, eBay, YouTube, Microsoft, Invision, American Apparel marks. **Trademark / false-endorsement risk if used as “clients”.**
- Unused decor: `astronaut.svg`, `scribble-1/2.svg`, `arch-line.svg`, `block_squares.svg`, `dots-white.svg`, `Facebook_icon.svg`, `Google_icon.svg`, etc.

### Loading strategy

- No `loading="lazy"` on `<img>` in `index.html`.
- Hero background loaded via CSS (not lazy).
- No srcset / WebP.
- Alt text is uniformly `FreeBootstrap.net image placeholder` — not descriptive.

---

## 6. Content / Demo Audit

**Rule:** all of the following is **DEMO / TEMPLATE — MUST NOT SURVIVE AS EVIDENCE.**

| Item | Evidence | Classification |
|------|----------|----------------|
| Page title “Zenith Free Bootstrap Website Template…” | `index.html` L12 | Template identity |
| Hero: “Power Your World with Clean Energy” | L186 | Generic solar lifestyle |
| Stats: 85% Reduction, 25+ Years, 600M Tons, 4+ Hours, 22% Efficiency, 50% Energy Cost Savings | L211–234 | **Fake / unverified stats** |
| Testimonials: **13M+ Happy customers**, **4.88 rating** | L635–640 | **Fake proof** |
| Team: Emma Johnson, Liam Wilson, Olivia Smith, Sarah Miller + tech job titles | L589–616 | Fictional |
| Testimonials: Liam, Olivia, Sarah, James Anderson, Sophia Brown + lorem quotes | L647–714 | Fictional |
| Portfolio: all titled “Residential Solar Panel Installation” / “New York City, NY” | L465–484 | Fake projects |
| Pricing: $25 / $49 / $129 per month | L741–770 | Not Takeshi commercial model (UNKNOWN) |
| Contact: `+(01 234 567 890)`, `info@mydomain.com`, Springfield IL 62701, `www.mywebsite.com` | L957–975, footer L1062 | Dummy |
| Phone variants inconsistent (`+1 (234) 5678 9900` vs `+(01 234 567 890)`) | L957 vs L1062 | Demo inconsistency |
| YouTube `DQx96G4yHd8` | L190, L336 | Third-party demo video |
| “Save Money / Reduce bills by up to **70%** and earn **tax credits**” | L354–355 | US-centric unsupported claim |
| Calculator: USD, `$2800/kW`, 5 sun-hours | `custom.js` L816–831 | US demo model |
| Blog titles (greener lifestyle, hobbies, tech trends 2024, minimalism) | L850–864 | Off-brief filler |
| Footer “we're hiring”, Register/Sign in/Coming soon | L1041–1057 | Multipage leftovers |
| Lorem / Ipsum throughout | services, about, FAQ bodies, footer about | Placeholder |
| Nav label “Dropdown / Dropstart / Dropend / Something else here” | L115–135 | Template chrome |
| Social links `href="#"` | header, team, contact, footer | Empty |
| Google Analytics ID | L46 | Template vendor property |

**Takeshi-verified facts in this repo:** **NONE.** Company profile exists only in the Phase 0 prompt, not in the website files.

---

## 7. Responsive Audit

**Source of truth:** `onepage.css` breakpoints (Bootstrap 5 + theme): `575.98`, `767.98`, `991.98`, plus Swiper 640 / 768 / 1024. Container `max-width: 1140px`.

**Intended behaviour (from CSS, not live-tested):**

- **Mobile (<768):** section padding 40px; calculator button full width; hero min-height 650px / 90vh.
- **Tablet (<992):** offcanvas nav (`navbar-expand-lg`); hero bg position `80% 100%`; nav links use inverse colour inside offcanvas.
- **Desktop (≥992):** horizontal nav; dropdowns switched to **hover-only** (`custom.js` `handleNavbarEvents`).
- Navbar is `position: absolute` then `.active` on scroll (`custom.js` `navbarScrollInit`). Sticky-on-scroll styling exists (`.fbs__net-navbar.active` ~L810).

**Documented issues (code-level; runtime unverified):**

| Issue | Evidence | Severity |
|-------|----------|----------|
| Hero `min-height: 650px` on small screens | `onepage.css` `.hero__v1-b` | MEDIUM — likely cramped title + CTAs |
| Nested dropdowns in mobile offcanvas | HTML L115–141 | MEDIUM — template demo, poor mobile UX |
| Desktop dropdowns ignore click | `custom.js` L651–714 | MEDIUM — keyboard/touch-desktop risk |
| Testimonial prev/next are `<a href="#">` | L719–722 | LOW — hash jump |
| Worker PNG absolutely positioned on CTA | `worker-1.png` + `.img-absolute` | MEDIUM — likely overlap/crop on narrow widths (inference from pattern) |
| Horizontal overflow | not measured | UNKNOWN |
| Tap targets | social icon links; back-to-top  exists | UNKNOWN without viewport |

**Live mobile/tablet/desktop screenshots:** not captured.

---

## 8. Accessibility Baseline

### PASS

- `lang="en"` on `<html>` (`index.html` L8).
- Viewport meta present.
- Offcanvas close has `aria-label="Close"`.
- Nav toggle has `aria-label="Toggle navigation"` and `aria-controls`.
- Accordion buttons use `aria-expanded` / `aria-controls` (Bootstrap pattern).
- Form fields Name/Email/Message have associated `<label for>`.
- `header` / `main` / `footer` / `address` used (but `main` truncated).

### NEEDS IMPROVEMENT

- Heading hierarchy is noisy: many `h2.fs-3` for **stats**, `h3` for people, blog cards use `h2` inside cards. Visual size ≠ rank.
- Decorative SVGs and quote images exposed to AT via placeholder alts.
- Social links have **icon-only** content, no accessible names (`<i class="bi bi-twitter-x">`).
- Play buttons similarly icon-heavy.
- Focus: `.form-control:focus` and navbar toggler set `outline: none` (`onepage.css` L314, L775, L1478) — **visible focus likely weak**.
- No `prefers-reduced-motion` in `onepage.css`; AOS duration 800ms (`custom.js` L635–639).
- Calculator labels wrap inputs (ok) but results injected as HTML without live region.
- Back-to-top `<button>` has **no accessible name** (icon only) (`index.html` L1088).
- Theme is forced `light` via inline script; **no theme toggle in this page** despite dark-mode CSS and `themeDarkToggleInit`.

### CRITICAL

- **No skip link.**
- Hero background image has **no text alternative**.
- `<main>` does not wrap most of the page (landmark incomplete).
- Contact success/error alerts are `d-none` with no `role="alert"` wiring because `send_email.js` is missing.
- Desktop nav dropdowns: click prevented, hover-open — **keyboard users cannot operate dropdowns as designed**.
- Fake 13M customers / ratings will be read as fact by AT users.

No WCAG conformance claim is made.

---

## 9. SEO Baseline

| Item | State | Evidence |
|------|-------|----------|
| Title | Template title, not Takeshi | L12 |
| Meta description | **Absent** | head |
| Canonical / robots / sitemap | **Absent** | repo |
| Open Graph / Twitter | **Absent** | head |
| Structured data | **Absent** | |
| Favicon | Present, template | L15 |
| H1 | One H1 in hero | L186 — solar lifestyle, not Takeshi |
| Image alt | Non-descriptive placeholders | throughout |
| Internal links | Many 404 `page-*.html`; blog `href=""` | |
| URL structure | Single `index.html` | Fits one-page goal |
| Language | `en` | ok |
| Analytics | Wrong GA property | L46 |

---

## 10. Performance Baseline

**Measured Lighthouse / PageSpeed:** not run.

**Observed risks (source):**

- Multiple render-blocking CSS: Bootstrap + Icons + GLightbox + Swiper + AOS + theme.
- Two webfont stylesheets (Fontshare + Google Fonts) before CSS.
- JS: Bootstrap + GSAP + imagesLoaded + Isotope + GLightbox + Swiper + AOS + PureCounter + custom — several unused on this page (GSAP marquee, Isotope, extra Swipers).
- Images: JPEG/PNG, no lazy-load, hero full-bleed, PNG worker cutout.
- AOS on many nodes (DOM work on scroll).
- GLightbox may fetch Plyr CSS/JS from CDN when video opens.
- Google Analytics + Google Fonts = extra third parties.
- `custom.js` ~833 lines with dead features (countdown, progress bars, 7 Swiper constructors).
- Bootstrap SCSS test files in vendors increase repo size; they are not page weight unless deployed wholesale.

---

## 11. Security / Form Audit

### Contact form (`#contactForm`, `index.html` L995–1021)

- Fields: name, email, subject, message. HTML `required` on name/email/message.
- **No `action`, no `method`.**
- Submit handled by missing `send_email.js`.
- Success/error divs exist but will not run.
- **No** CAPTCHA, honeypot, CSRF, or server validation in this package.

### PHPMailer

- Library present (`VERSION = '6.9.1'`).
- **No** PHP endpoint, **no** SMTP credentials found in reconnaissance of HTML/JS. PHP sources were not fully grepped for passwords; **no obvious hardcoded secrets in `index.html` / `custom.js`.**
- Free vs Pro: HTML comment states functional PHP/AJAX form is a **pro** feature (`index.html` L1069–1073).

### Other

- Template GA ID will send visitor data to **someone else’s** property if the page is hosted as-is. **HIGH** privacy issue.
- Calculator writes `innerHTML` from numeric calculations only (low XSS risk in current code).
- `document.write` for copyright year (L1076) — outdated pattern, minor.
- External YouTube + fonts + (on video) Plyr CDN.
- **No production credentials were added.** No obvious issue identified beyond the above; this is **not** a claim that the form is secure.

**Future compatibility:** static host + this form architecture is **not** production-ready. Later phase needs an explicit contact channel (WhatsApp, form service, or server) — **HUMAN INPUT REQUIRED**. Do not invent an endpoint.

---

## 12. Licensing Audit

| Item | Finding |
|------|---------|
| Zenith / FreeBootstrap | Header comment: License `https://freebootstrap.net/license`. **No LICENSE file in repo.** |
| FreeBootstrap terms (fetched 2026-09-16) | Free templates: personal + commercial/client use allowed; **attribution required** unless a paid license; no redistribution/resale. |
| In-HTML footer | Comment: keep footer links; **remove only if you buy Pro**; Pro includes working contact form. |
| Provider marketing page | States a one-page version is available for free download and client websites. Feature table on that page is inconsistent about “Remove footer credit” — **HUMAN REVIEW REQUIRED** before stripping credit. |
| Bootstrap / Icons | MIT (file headers). |
| PureCounter | MIT (file header). |
| Isotope 3.0.6 | **GPL-3.0** (typical for this package; header says PACKAGED v3.0.6). Commercial closed-source use is a **licensing risk**. Unused on this page. |
| GSAP 3.12.5 | GreenSock standard license URL in file. **UNVERIFIED — HUMAN REVIEW REQUIRED** for production. Unused on this page currently. |
| imagesLoaded | MIT (header). |
| Swiper / AOS / GLightbox | Standard open-source; exact SPDX **not copied into repo**. |
| Satoshi (Fontshare) | **UNVERIFIED — HUMAN REVIEW REQUIRED.** |
| Inter (Google Fonts) | OFL typically; loaded via Google. |
| Stock photos / worker PNG / headshots | Bundled with template; **photographer/model licenses not in repo.** **UNVERIFIED.** |
| Brand SVGs of Netflix, Apple, etc. | **Do not use as Takeshi clients.** Trademark risk. |
| YouTube video | Third-party content; not Takeshi. |

Do not assume image rights solely because they shipped in Zenith.

---

## 13. Technical Debt

| Finding | Severity | Why |
|---------|----------|-----|
| `send_email.js` 404 | **HIGH** | Console error; form dead |
| Template GA ID | **HIGH** | Privacy / wrong owner |
| Demo proof (stats, 13M customers, NYC projects) | **HIGH** | Credibility if shipped |
| `</main>` early close | **MEDIUM** | Semantics / a11y |
| Dead JS: Isotope, GSAP marquee, unused Swipers, countdown, progress bars, dark toggle | **MEDIUM** | Weight + GPL/GSAP exposure |
| Broken `page-*.html` links | **MEDIUM** | 404s |
| Navbar brand → missing `page-index.html` | **MEDIUM** | Logo home link broken |
| Hover-only dropdowns | **MEDIUM** | a11y |
| `outline: none` on controls | **MEDIUM** | a11y |
| Duplicate service sections | **MEDIUM** | Template density |
| Inline hero `style="background-image"` | **LOW** | Fine for now |
| Dummy directory `index.html` files | **LOW** | Clutter |
| Bootstrap SCSS + tests in vendors | **LOW** | Repo bloat; unused |
| PHPMailer unused | **LOW** | Dead code |
| `document.write` year | **LOW** | Legacy |
| Typo `placeholcer`, `jusfity-content`, `Fogot Password` | **LOW** | Quality |
| Nested dropstart/dropend demo | **LOW** | Tempting unused IA |
| No lazy images | **LOW–MEDIUM** | Performance later |
| Theme `localStorage` without UI | **LOW** | Dead path |

**BLOCKER (Phase 0 itself):** none for documenting the baseline.  
**BLOCKER (later production launch):** missing Takeshi identity, contacts, form, and unverified claims — see §16.

---

## 14. Takeshi Transformation Readiness

### What Zenith already gives us

- A **single HTML file** one-page shell.
- Bootstrap 5.3.3 grid, offcanvas, accordion, form controls.
- Sticky-on-scroll navbar pattern, back-to-top, AOS hooks.
- Section rhythm (hero, about, services, process, FAQ, contact, footer).
- Compiled theme CSS we can later restyle rather than inventing a grid from zero.

### What Zenith gives us but will need transformation

- Hero, colour (`#399918` primary / `#FFE55C` secondary — **not** Takeshi `#0B0C0A` / `#C6F000` / `#F4F5EF` / `#3A3E36`).
- Typography (Inter + Satoshi — **not locked** as Takeshi type).
- Service cards, process steps, FAQ, contact layout.
- Photography treatment (rounded-5 solar stock).
- CTA language (“Go Solar”).

### What Zenith does not give us

- Takeshi positioning (energy systems vs solar lifestyle).
- Assessment-first narrative, hybrid/backup/electrical/estate services as specified.
- Real logo, contacts, WhatsApp, domain, project photos, testimonials, certifications.
- Accessible-premium visual system from the locked strategy.
- Working, privacy-safe contact path.
- SEO/OG identity.

### What should probably be removed later (decision belongs to Phase 2, not now)

- Nested Dropdown demo.
- Pricing SaaS cards (unless Takeshi later supplies real packages).
- Fake stats, team, testimonials, blog, client-logo pack.
- Solar savings calculator (USD / US tax-credit logic).
- Footer “Accounts / Coming soon / 404 / we're hiring”.
- Template GA.
- Unused vendors (Isotope, GSAP if unused, PHPMailer if unused).
- YouTube demo.

### What will probably need to be rebuilt later

- Hero and identity.
- Navigation IA for Takeshi (not Zenith’s Portfolio/Pricing/Blog/Team).
- Services mapped to Takeshi’s actual list.
- Proof strategy that does **not** invent numbers.
- Contact / conversion.
- Visual system (colour, type, photography, lime-as-signal).

### Missing information / assets

See §15.

### Decisions before implementation (Phase 1+2, not this phase)

- Which Zenith sections map to Takeshi sections.
- Attribution: keep FreeBootstrap credit vs buy Pro.
- Contact mechanism.
- Whether any proof exists to show.
- Font licensing (Satoshi vs replacement).

### Delay risks

- Waiting on logo, photos, and real contact details.
- Accidentally shipping Zenith solar identity.
- Form/backend choice late in the project.
- Isotope/GSAP license if those libraries are kept “because they were there”.

---

## 15. Missing Inputs

All **NOT PROVIDED** in the repository. **Do not invent.**

| Input | Status |
|-------|--------|
| Takeshi logo / brand files | NOT PROVIDED |
| Colour/type usage beyond strategy prompt | Strategy exists in chat; **not in repo assets** |
| Phone | NOT PROVIDED |
| WhatsApp | NOT PROVIDED |
| Email | NOT PROVIDED |
| Physical address | NOT PROVIDED |
| Domain | NOT PROVIDED |
| Social URLs | NOT PROVIDED |
| Project photographs | NOT PROVIDED |
| Testimonials | NOT PROVIDED |
| Certifications / registration | NOT PROVIDED |
| Warranties | NOT PROVIDED |
| Installation counts, MW, savings, customer counts | NOT PROVIDED — **must not use Zenith numbers** |
| Staff names/photos | NOT PROVIDED |
| Legal pages (privacy/terms) | NOT PROVIDED |
| Form destination | NOT PROVIDED |
| Analytics property | NOT PROVIDED (template ID must not be reused) |
| Pro vs free license purchase | UNKNOWN |

---

## 16. Blockers

These do **not** stop Phase 1 (strategy lock). They will stop a credible **implementation / launch**.

### BLOCKER — No Takeshi identity assets  
**WHY:** Site currently identifies as Zenith.  
**NEEDED:** Logo (and usage rules).  
**PHASE:** 4–5 (can start Phase 1 without it).

### BLOCKER — No real contact channel  
**WHY:** Dummy US phone/email; form JS missing; no WhatsApp.  
**NEEDED:** At least one real channel.  
**PHASE:** 3 and 7 (conversion).

### BLOCKER — Demo proof still in the scaffold  
**WHY:** Shipping stats/testimonials/portfolio as-is is a credibility failure.  
**NEEDED:** Replace or remove every evidence-like block.  
**PHASE:** 3–5.

### BLOCKER — Contact form not production-capable  
**WHY:** `send_email.js` missing; PHPMailer unwired; Pro form not included.  
**NEEDED:** Chosen architecture (and no secrets in git).  
**PHASE:** 5–7.

### HIGH (not a Phase 1 blocker) — Template GA  
**NEEDED:** Remove or replace with Takeshi property.  
**PHASE:** 7.

### HIGH — Solar-first template identity  
**WHY:** Conflicts with locked “energy systems, not a solar company” position.  
**NEEDED:** Phase 1–2 IA that does not over-index on solar.  
**PHASE:** 1–2.

### MEDIUM — Attribution / image / GSAP / Isotope licenses  
**NEEDED:** Human confirmation.  
**PHASE:** before public launch.

### MEDIUM — No live responsive verification this session  
**NEEDED:** Browser pass in a later phase.  
**PHASE:** 6.

---

## 17. KILLCRITIC Findings

### Template risk
**High.** Colour (leaf green + yellow), Satoshi/Inter, rounded-5 solar stock, “Go Solar”, Zenith logo, and section kit are still 100% Zenith. Without a hard visual transformation, this will remain a generic Zenith solar site.

### Content risk
**High.** Lorem, 70% bill savings, tax credits, 13M customers, NYC portfolio, Springfield address — all easy to leave in during a visual restyle.

### Credibility risk
**High.** A visitor would reasonably believe Takeshi has 13 million customers, a 4.88 rating, NYC residential installs, and a named US office. That is false-by-template.

### Licensing risk
**Medium–High.** Attribution required on free license (provider site + footer comment). Stock people/photos unverified. Client-brand SVG pack is dangerous. Isotope GPL unused but present. GSAP unused but present.

### Performance risk
**Medium.** Unused GSAP/Isotope/Swiper constructors, no lazy images, two font CDNs, AOS everywhere.

### Accessibility risk
**Medium–High.** No skip link, outline removed, hover-only menus, CSS-only hero image, icon-only controls, truncated `<main>`, AOS without reduced motion.

### Responsive risk
**Medium.** Hero 90vh/650px min and CTA worker overlay are typical failure points. **Not live-verified.**

### Architecture risk
**Medium, manageable.** One HTML file is the right shape. `custom.js` is a multipage leftover dump. Early `</main>` and missing multipage files show this is a **trimmed** pack, not a clean one-page product.

### Scope risk
**High temptation.** Pricing, blog, team, calculator, mega-dropdown, PHPMailer, dark mode, coming-soon, auth pages. None are Takeshi-required. They will inflate Phase 5 if not explicitly killed in Phase 2.

### Brand risk
**High.** Zenith’s “clean energy / go solar / save the planet adjacent” voice is the opposite of “power, properly considered.” Feature cards (“Renewable Energy Source”, “Eco-Friendly Operation”) pull toward greenwash.

---

## 18. Recommended Phase 1 Readiness

Phase 1 is **Brand & UX strategy lock** (no major code). Reconnaissance is sufficient to start that work.

**Already available for Phase 1:** company profile (in the authorization prompt), locked positioning/voice/palette roles, Zenith section inventory above.

**Not required to start Phase 1:** logo files, photos, phone number (those block later phases).

**Should be true before Phase 1 is considered locked:**

1. Confirm the one-page file `takeshi_energy/index.html` is the only implementation target.
2. Treat every Zenith statistic, name, address, and testimonial as non-evidence.
3. Do not begin visual/code transformation until Phase 1–2 mapping is authorized.
4. Record missing inputs (§15) as open questions, not copy to write around with fiction.

```text
PHASE 1 READINESS:
READY
```

Phase 1 remains **separately authorized**. This report does not start it.

Implementation/launch readiness is **not** READY (identity, contact, proof, form, licenses).

---

## Phase gate

```text
PHASE 0 — PASS / COMPLETE / VERIFIED / LOCKED
```

**Caveat (documented, not a failed gate):** live browser, Lighthouse, and image byte-size inventory were not obtained because browser MCP failed and sandbox directory listing was unavailable. Source-level audits of HTML, CSS, JS, vendors, licensing URL, and sample imagery were completed. No unauthorized redesign occurred.

**Next:** wait for an explicit **Phase 1** authorization prompt. Do not modify the website based on this report until then.
