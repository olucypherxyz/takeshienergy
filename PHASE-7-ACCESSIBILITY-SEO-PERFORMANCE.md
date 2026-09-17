# PHASE 7 — ACCESSIBILITY / SEO / PERFORMANCE

**Project:** Takeshi Energy website  
**Phase:** 7 — accessibility, semantic HTML, SEO metadata, image/font/JS performance  
**Status:** LOCKED  
**Date:** 2026-09-16  
**Depends on:** Phases 0–5 (locked)  
**Git commit / deploy:** Not performed  
**Phase 6:** Not started  

```text
PHASE 7 — PASS / COMPLETE / VERIFIED / LOCKED
```

Verification here means **audited and corrected against the Phase 7 brief**, with testing limits recorded in §X–Y. It is **not** WCAG certification, Lighthouse certification, or a live browser pass.

---

## A. Phase status

| Item | Value |
|------|--------|
| Authorization | Explicit Phase 7 — audit, correct, verify, document, lock |
| Phase 5 visual strategy altered | **No** (contrast/focus/type-weight usage only; palette and type families unchanged) |
| Phase 6 started | **No** |
| Unsupported claims added | **No** |
| Fake contact / schema facts | **No** |
| Analytics reintroduced | **No** — `G-CN09X6ELXM` remains absent from production HTML/JS |
| Unauthorized commit/deploy | **No** |

---

## B. Source documents reviewed

- `PHASE-0-RECONNAISSANCE.md`
- `PHASE-1-BRAND-UX-STRATEGY.md`
- `PHASE-2-ZENITH-TRANSFORMATION-ARCHITECTURE.md`
- `PHASE-3-CONTENT-SYSTEM.md`
- `PHASE-4-IMAGE-SYSTEM.md`
- `PHASE-5-VISUAL-TRANSFORMATION.md`
- Production files: `takeshi_energy/index.html`, `takeshi_energy/assets/css/takeshi.css`, `takeshi_energy/assets/js/custom.js`, `takeshi_energy/assets/images/takeshi/*`

Documentation vs implementation: Phase 5 remains the visual source of truth. Phase 7 corrected technical defects (heading in offcanvas, lime text on paper, oversized images, missing metadata, muted contrast, focus on lime CTAs) without reopening IA, copy, or image identity.

---

## C. Accessibility audit

**Standard targeted:** WCAG 2.2 AA *principles*. **Not certified.**

| Area | Finding | Action |
|------|---------|--------|
| Skip link | Present | Kept; `#main` now `tabindex="-1"` |
| Landmarks | `header`, `nav`, `main`, `footer`, labelled sections | Kept |
| Offcanvas title as `h2` before page `h1` | Hierarchy fail | Title is now a labelled `<p>` |
| Menu button name/state | Name present; expanded state incomplete | `aria-expanded`, label swap, `inert` when closed |
| Lime “Contact” eyebrow on paper | Contrast fail | Eyebrow uses graphite on paper |
| Muted body copy `#5A5E56` | Contrast risk on `#F4F5EF` | Token now `#3A3E36` |
| Footer credits at 55% paper | Contrast risk | Raised to 78% / solid paper links |
| Lime outline on lime buttons | Focus fail | Black outline + lime halo |
| Active nav colour-only | Colour-only risk | Underline + `aria-current="location"` |
| Decorative logos | `alt=""` beside visible name | Kept; intrinsic size added |
| Contact placeholders looking like live data | Misleading | “Not published yet” + pending copy |
| Reduced motion | CSS present | Kept; back-to-top respects it |

No extra ARIA roles were added where native HTML already sufficed.

---

## D. Semantic HTML audit

```text
header[aria-label=Primary]
  nav[aria-label=Page sections]   (desktop)
  button + offcanvas              (mobile)
main#main
  section#home
  section#context
  section#solutions  (+ article per service)
  section#approach
  section# (mid CTA, labelled)
  section#serve
  section#process
  section#accountability
  section#contact
footer
```

CTAs are links (`<a class="te-btn">`) because they navigate to in-page destinations. Menu and back-to-top are `<button>`. Service blocks remain `<article>` inside a solutions `<section>`.

---

## E. Keyboard audit

**Live keyboard pass through a browser: NOT TESTED — TOOLING UNAVAILABLE** (Cursor browser MCP did not re-register).

**Static keyboard audit (performed):**

```text
Skip link → brand → desktop nav OR menu button → main CTAs → in-page links → contact → footer → back-to-top
```

- Desktop nav is `display:none` below 992px (removed from tab order).
- Menu button is `display:none` from 992px (removed from tab order).
- Offcanvas starts with `inert`; `inert` removed on `show.bs.offcanvas`.
- Close control has an accessible name; Escape is handled by Bootstrap and a defensive listener.
- No custom focus trap besides Bootstrap offcanvas.
- No `href="#"` dead controls in production markup.

---

## F. Focus-state audit

Global `:focus-visible` uses a 2px lime outline (works on `#0B0C0A` and `#F4F5EF`).

Primary lime buttons use a **black** outline plus lime halo so focus is visible on `#C6F000`.

Skip link becomes visible on focus against lime/black.

**Rendered focus in a browser: NOT TESTED — TOOLING UNAVAILABLE.**

---

## G. Contrast audit

Token-level checks (not eyedropper from a live render):

| Pair | Use | Assessment |
|------|-----|------------|
| `#0B0C0A` on `#F4F5EF` | Body on paper | Pass (near-black on off-white) |
| `#F4F5EF` on `#0B0C0A` | Nav/hero/footer | Pass |
| `#0B0C0A` on `#C6F000` | Primary button text | Pass |
| `#C6F000` on `#0B0C0A` | Dark eyebrows, active signal | Pass as large/UI accent |
| `#C6F000` on `#F4F5EF` | Contact eyebrow (pre-fix) | **Fail** — treatment changed |
| `#3A3E36` on `#F4F5EF` | Secondary/muted text post-fix | Pass (replaces `#5A5E56`) |
| Footer credits 0.78 paper on black | Legal/credits | Improved from 0.55 |

Lime is not used as body copy on paper.

**Live contrast tool: NOT TESTED — TOOLING UNAVAILABLE.**

---

## H. Alt-text audit

| Asset | Class | Alt |
|-------|--------|-----|
| Logo mark (header/footer) | Decorative | `alt=""` (name in adjacent text) |
| IMAGE-001 Lagos urban fabric | Informative / illustrative | Aerial Lagos river/buildings; **not a Takeshi installation** |
| IMAGE-003 Electrical cabinet | Informative / illustrative | Cabinet interior; **not a Takeshi installation**; figcaption retains CC BY-SA 4.0 / Hannes Grobe |

No people photography. IMAGE-001 remains illustrative urban fabric, not project evidence.

---

## I. Heading hierarchy

```text
H1 Dependable power, designed around what matters.
 ├── H2 Interruptions have a cost.
 │    ├── H3 Homes
 │    ├── H3 Businesses and facilities
 │    └── H3 Developments
 ├── H2 Power systems, specified as a whole.
 │    ├── H3 Energy assessment and system design
 │    ├── H3 Solar-power solutions
 │    ├── H3 Inverter and battery systems
 │    ├── H3 Electrical installation
 │    ├── H3 Hybrid and backup-power systems
 │    ├── H3 Estate and multi-unit installations
 │    ├── H3 Maintenance and after-sales support
 │    └── H3 Specified for the system, not the showroom.
 ├── H2 We start with the load, not the equipment.
 ├── H2 If the requirement is already clear, we can start there.
 ├── H2 Built for how the property actually runs.
 ├── H2 From first conversation to ongoing support.
 ├── H2 Accountable after the power comes on.
 └── H2 Tell us what the property needs to do.
```

Exactly one `h1`. Offcanvas “Menu” is **not** a heading. Process/method steps use `<strong>` inside lists, not decorative headings.

Who we serve uses `<dl>` terms, not headings — correct for a definition index.

---

## J. Mobile accessibility

| Check | Status |
|-------|--------|
| Menu accessible name | Open / Close menu |
| `aria-expanded` | Synced with offcanvas events |
| `aria-controls` | Present |
| Close control | `aria-label="Close menu"` |
| `inert` when closed | Yes |
| Duplicate nav tab-order | Desktop/mobile mutually hidden + inert panel |
| Body scroll lock | Bootstrap offcanvas (not re-tested live) |

**Live narrow-viewport / zoom: NOT TESTED — TOOLING UNAVAILABLE.** CSS already stacks grids below 768px / 992px.

---

## K. SEO metadata

| Field | Value |
|-------|--------|
| `title` | Takeshi Energy — Dependable power, designed around what matters |
| `description` | Designs, installs and supports solar, inverter, battery, backup and electrical systems around how properties actually operate |
| `html lang` | `en` |
| Keyword stuffing | No |
| Geographic claims | None beyond IMAGE-001 caption (Lagos photograph provenance) |
| Template Zenith title/description | Absent from production `<head>` |

H1 matches the locked promise; title identifies the company and positioning without calling the firm a generic solar installer.

---

## L. Open Graph

Implemented without inventing URL or social artwork:

- `og:site_name`, `og:type=website`, `og:title`, `og:description`
- `twitter:card=summary` (not `summary_large_image`)
- `twitter:title`, `twitter:description`

**Omitted:** `og:url`, `og:image`, `twitter:image`.

IMAGE-001 is illustrative Lagos urban fabric, **not** a brand OG asset. Using it as the default social preview would imply project evidence. Dedicated OG artwork is a **human-input dependency**.

---

## M. Canonical

**Not implemented.** Production domain is not confirmed. Temporary Vercel URLs must not be used as a permanent canonical.

**Dependency:** verified production origin before adding `<link rel="canonical">` and `og:url`.

---

## N. Structured data

Single `Organization` JSON-LD with only:

- `name`: Takeshi Energy  
- `description`: matching approved meta description  

**Omitted (unknown / would be invented):** `url`, `telephone`, `email`, `address`, `sameAs`, `openingHours`, `priceRange`, ratings, founding date, `areaServed`.

`LocalBusiness` and `Service` schemas were **not** added.

---

## O. Image optimization

Phase 4 production identities preserved. Variants are **local resizes of the locked originals**, not new stock.

| File | Role | Approx. weight | Notes |
|------|------|----------------|-------|
| `takeshi-hero-lagos-1200.jpg` | 1200w srcset | ~180 KB | Derived from IMAGE-001 |
| `takeshi-hero-lagos-1800.jpg` | default + 1800w | ~384 KB | Hero `src`; `fetchpriority="high"` |
| `takeshi-hero-lagos-urban-fabric.jpg` | 2400w srcset | ~791 KB | Original IMAGE-001 |
| `takeshi-detail-electrical-cabinet-900.jpg` | production src | ~289 KB | Lazy; 900×1782 |
| `takeshi-detail-electrical-cabinet.jpg` | source archive | ~2.19 MB | **Not referenced** by `index.html` |

Hero is **not** `loading="lazy"`. Explicit `width`/`height` and cabinet `aspect-ratio` reduce CLS risk.

**Not done:** AVIF/WebP pipeline (two-image site; JPEG variants were the smallest justified step). Unsplash/Commons re-download of smaller masters was **blocked by Auto-review**; local resize was used instead.

---

## P. Font optimization

Google Fonts retained (approved families). Request trimmed to **used** weights:

```text
Archivo 400, 500, 700, 900
IBM Plex Mono 400, 500
display=swap
preconnect fonts.googleapis.com + fonts.gstatic.com
```

Removed unused Archivo italic and 600. H1 still uses 900 as in Phase 5.

**Privacy:** Google Fonts remains a third-party request. Self-hosting is **OUT OF SCOPE** unless later authorized; documented as optional hardening.

---

## Q. JavaScript audit

`assets/js/custom.js` now:

- IntersectionObserver for nav `aria-current` (nav IDs only)
- rAF-throttled back-to-top visibility
- Offcanvas `inert` / `aria-expanded` / accessible name
- Escape hide fallback
- Reduced-motion scroll for back-to-top

Still loaded: Bootstrap bundle (required for offcanvas).

**Not present in production page:** AOS, Swiper, GSAP, Isotope, GLightbox, PureCounter, YouTube, `send_email.js`.

---

## R. Third-party request audit

Production page requests:

1. Google Fonts CSS + font files  
2. Local Bootstrap CSS/JS  
3. Local `takeshi.css` / `custom.js`  
4. Local images / SVG  

**Absent:** Google Analytics `G-CN09X6ELXM`, social SDKs, maps, video embeds, cookie banners.

Vendors remaining **on disk** but **unloaded** (Phase 5 residue, not referenced by `index.html`): AOS, Swiper, GSAP, Isotope, GLightbox, bootstrap-icons, `onepage.css`, etc. Left in place because other project paths might still need them; they are not page weight.

---

## S. Performance audit

**Qualitative (no Core Web Vitals numbers):**

- Hero no longer forces the 2400px master on every viewport.
- Cabinet production asset is ~7.5× smaller than the 2313×4580 original.
- Fonts: fewer weights.
- JS: no scroll-spy on every scroll frame for section matching.
- CSS: template `onepage.css` still not loaded.
- Layout: hero min-height is CSS-stable; cabinet has aspect-ratio.

**Lighthouse CLI (Lighthouse 13.4.1, HeadlessChrome, simulated mobile, localhost:4173):**

| Category | Score |
|----------|-------|
| Performance | 0.85 |
| Accessibility | 1.00 |
| Best Practices | 1.00 |
| SEO | 1.00 |

| Metric | Value | Notes |
|--------|-------|--------|
| FCP | 2.4 s | Simulated throttling |
| LCP | 3.3 s | Simulated throttling; host CPU slower than Lighthouse calibration |
| TBT | 0 ms | |
| CLS | 0.001 | |
| Speed Index | 5.1 s | |
| Transfer | 583 KiB | Includes cabinet 900px JPEG |

These are **one local CLI run**, not a production field measurement and **not** a WCAG or “100/100” certification. Accessibility score 1.00 is axe automated checks only.

**Interactive browser QA (click/tab/zoom in Cursor browser): NOT AVAILABLE.**

---

## T. Reduced-motion audit

Existing `@media (prefers-reduced-motion: reduce)` disables animations/transitions and `html { scroll-behavior: auto }`. Back-to-top uses `behavior: "auto"` when the query matches.

No AOS/entrance loops remain.

**Live OS-level reduced-motion: NOT TESTED — TOOLING UNAVAILABLE.**

---

## U. Mobile-performance audit

Considered for constrained networks:

- `srcset`/`sizes` for the hero  
- Lazy cabinet  
- Trimmed fonts  
- No demo libraries on the page  
- Intrinsic dimensions  

**Live 3G / mid-range device: NOT TESTED — TOOLING UNAVAILABLE.**

---

## V. Template-residue audit (second pass)

Searched production HTML/JS for: Zenith, demo, Springfield, New York, NYC, USD, 13M, 4.88, 50%, template, testimonial, portfolio, pricing, YouTube, Swiper, AOS, GSAP, Isotope, GLightbox, `G-CN09X6ELXM`.

**Remaining “Zenith” in the production page:** license comment + required FreeBootstrap credit only.

No dummy phones, `info@mydomain.com`, fake social `href="#"`, or analytics ID in `index.html` / `custom.js`.

---

## W. KILLCRITIC findings

### Accessibility
A keyboard user **should** be able to complete the journey from the implemented tab order, skip link, and offcanvas behaviour. Lighthouse axe checks scored 1.00 (automated subset). That path was **not** exercised interactively in the Cursor browser.

### SEO
A crawler can identify Takeshi Energy as an energy-systems company (assessment/design, solar, inverter/battery, electrical, hybrid/backup) without invented geography, ratings, or contact facts. Canonical and OG image remain intentionally incomplete.

### Performance
Mobile should no longer download the 2.2 MB cabinet as the displayed image. Hero still has a 2400w option for large/DPR displays. Google Fonts remains the main third-party cost.

### Authenticity
No new proof, testimonials, statistics, or project implication. Hero and cabinet captions still state illustrative / not Takeshi installation. Contact is explicitly unpublished.

### Maintainability
Behaviour lives in a short `custom.js`. Unloaded Zenith vendors remain on disk (noise for future editors, not runtime). Acceptable until a later cleanup phase is authorized.

---

## X. Tests actually executed

- Full static read of `index.html`, `takeshi.css`, `custom.js`
- Grep of production HTML/JS for template residue and analytics ID
- Image identity + dimension inspection (JPEG pixel sizes)
- Local generation of smaller JPEG derivatives from locked originals
- Token contrast reasoning and heading-tree construction
- Local `npx serve` on port 4173
- Lighthouse 13.4.1 CLI against `http://localhost:4173/` (simulated mobile)

---

## Y. Tests unavailable

```text
Browser validation: NOT AVAILABLE
  Cursor browser MCP: not re-registered

Lighthouse validation: AVAILABLE (CLI, simulated mobile, localhost)

Live keyboard / focus / zoom / narrow viewport: NOT TESTED — TOOLING UNAVAILABLE
Live reduced-motion OS setting: NOT TESTED — TOOLING UNAVAILABLE
Field 3G / mid-range device: NOT TESTED — TOOLING UNAVAILABLE
  (Lighthouse applied its own simulated throttling)
Screen reader (NVDA/VoiceOver/TalkBack): NOT TESTED — TOOLING UNAVAILABLE
```

---

## Z. Files changed

See §43 record below.

---

## AA. Known limitations

- No interactive Cursor-browser QA (keyboard/zoom/offcanvas). Lighthouse CLI scores exist for simulated mobile only.
- Google Fonts still third-party.
- Unloaded template vendors remain on disk.
- No OG image; no canonical URL.
- Contact channels unpublished — the page cannot complete a real enquiry.
- Hero 2400w original remains in srcset for large screens.
- Logo is a reconstructed mark (Phase 5), not an official locked SVG from the company.

---

## AB. Human inputs still required

### BLOCKING (for a genuine public launch / later conversion work)

- Verified production phone  
- Verified WhatsApp  
- Verified email  
- Verified production domain (canonical + `og:url` + schema `url`)  
- Decision on public address  
- Approved official logo/master SVG if the reconstructed mark is not final  
- Required legal information if any must appear before launch  
- Approved OG/social preview asset (do not silently reuse IMAGE-001)

### NON-BLOCKING

- Future Takeshi project photography  
- Future people photography meeting Phase 4 representation/safety/license gates  
- Verified case studies / testimonials  
- Self-hosted fonts  
- Disk cleanup of unused Zenith vendors  

---

## AC. Phase completion status

```text
PHASE 7 — PASS / COMPLETE / VERIFIED / LOCKED
```

Phase 6 was **not** begun.

```text
COMMIT: NOT AUTHORIZED / NOT PERFORMED
DEPLOYMENT: NOT AUTHORIZED / NOT PERFORMED
```

---

## Required file change record

```text
MODIFIED:
- takeshi_energy/index.html
- takeshi_energy/assets/css/takeshi.css
- takeshi_energy/assets/js/custom.js

CREATED:
- PHASE-7-ACCESSIBILITY-SEO-PERFORMANCE.md
- takeshi_energy/assets/images/takeshi/takeshi-hero-lagos-1200.jpg
- takeshi_energy/assets/images/takeshi/takeshi-hero-lagos-1800.jpg
- takeshi_energy/assets/images/takeshi/takeshi-detail-electrical-cabinet-900.jpg

DELETED:
- (none)

UNCHANGED:
- PHASE-0 through PHASE-5 documents
- Locked Phase 3 copy (wording unchanged aside from contact pending notice)
- IMAGE-001 and IMAGE-003 originals (still in tree)
- Bootstrap vendor files
- Unloaded Zenith CSS/JS/images on disk
- Logo mark / favicon SVG artwork

DEPENDENCIES ADDED:
- (none — local JPEG derivatives only)

DEPENDENCIES REMOVED:
- Unused Google Font weights (Archivo italic, 600) from the production stylesheet URL
```

---

## OUT OF SCOPE — NOT IMPLEMENTED

- Self-hosting fonts  
- WebP/AVIF encode pipeline  
- Deleting unused vendor directories  
- Invented canonical domain  
- Invented OG artwork  
- Analytics, CMS, framework migration  
- Phase 6 conversion / contact wiring  
- Visual redesign  
