# PHASE 2 — ZENITH TRANSFORMATION ARCHITECTURE

**Project:** Takeshi Energy website  
**Phase:** 2 — section mapping / architecture only. No implementation.  
**Status:** LOCKED  
**Date:** 2026-09-16  
**Depends on:** `PHASE-1-BRAND-UX-STRATEGY.md` (authoritative), `PHASE-0-RECONNAISSANCE.md` (baseline facts)  
**Inspected implementation:** `takeshi_energy/index.html`, `assets/css/onepage.css`, `assets/js/custom.js`, vendor scripts loaded by the one-page, asset references in HTML  

This document is the **authoritative architectural bridge** between Phase 1 strategy and Phase 3 content. It answers: what the Takeshi customer journey requires, and which parts of Zenith are worth keeping to build it.

**Zenith is scaffolding. It does not dictate the Takeshi information architecture.**

---

## 1. Phase 2 status

| Item | Value |
|------|--------|
| Authorization | Explicit Phase 2 — architecture only |
| Website files modified | **None** |
| Phase 1 strategy modified | **None** |
| Phase 1 contradictions | **None material** (see §1.1) |

```text
PHASE 2 — PASS / COMPLETE / VERIFIED / LOCKED
```

### 1.1 Phase 1 source confirmation

Phase 1 locked:

- Positioning: energy systems company; solar is not the identity
- Promise: **Dependable power, designed around what matters.**
- Journey: Understand → problem → approach → solutions → applications → credibility → process → accountability → conversation
- Target blocks 01–10
- Proof vs capability split; no invented evidence
- CTA: discuss energy needs, not Buy Now
- Combine related concepts if it improves the experience
- Do not force Takeshi into Zenith section names

**Clarification (not a Phase 1 change):** Phase 1 listed ten *strategic* blocks. Phase 2 maps those onto **eight visual regions** plus chrome (header/footer), by combining capability and products into supporting bands. The ten jobs remain. They do not each require a full-height Zenith-style section.

---

## 2. How Zenith actually works (reconstructed)

**File:** `takeshi_energy/index.html` — one-page HTML, Bootstrap 5.3.3.

**Page chrome**

- `header.fbs__net-navbar`: absolute, transparent over hero; `.active` on scroll (`custom.js`). Offcanvas `<lg`. Nested Dropdown / Dropstart / Dropend demo. Logo → missing `page-index.html`. Social `href="#"`.
- `<main>` **closes after `#solar-calc`** (line 517). Remaining sections sit outside `<main>`.
- `footer.footer`: About + Company + Accounts + Contact + FreeBootstrap credit (must keep unless paid license confirmed).
- `#back-to-top` button.

**Current order (Zenith, not Takeshi)**

```text
NAV
→ HERO #home (solar lifestyle + video)
→ IMAGE STRIP (links to missing pages)
→ STATS (demo counters)
→ FEATURE CARDS services__v8 (6 green-energy benefits, no id)
→ ABOUT #about (Why Solar + video)
→ SERVICES #services (3 solar cards)
→ CTA #cta (Ready to Go Solar + worker PNG)
→ PORTFOLIO #portfolio (fake NYC projects)
→ CALCULATOR #solar-calc (USD)
→ WHY US #whyus (generic)
→ TEAM #team (fictional)
→ TESTIMONIALS #testimonials (fictional + 13M + 4.88 + Swiper)
→ PRICING #pricing (SaaS $25/$49/$129)
→ FAQ #faq (solar lorem accordion)
→ BLOG #blog (off-brief)
→ HOW IT WORKS #howitworks (3 solar steps)
→ CONTACT #contact (dummy US + broken form)
→ FOOTER
```

**Reusable structural patterns (engineering, not identity)**

| Pattern | Where | Bootstrap / JS |
|---------|--------|----------------|
| Full-bleed overlay hero + H1 + CTA row | `#home` `.hero__v1-b` | CSS overlay; AOS |
| Container + 12-col grid | throughout | Bootstrap |
| Icon + title + paragraph cards | `services__v8`, `services__v7` | hover CSS |
| Media + copy split | `#about`, `#whyus`, `#faq` | |
| Numbered process steps | `#howitworks` | CSS `.number` |
| Dark promotional band + statement + button | `#cta` | `.cta__v3` |
| Accordion | `#faq` | Bootstrap collapse |
| Contact facts + form stack | `#contact` | form, missing JS |
| Offcanvas nav + scroll-spy-ish active link | header | Bootstrap offcanvas; `custom.js` on `.section` ids |
| Sticky-on-scroll nav | header | `navbarScrollInit` |

**Not actually used on this page (dead / dangerous)**

| Dependency | Why |
|------------|-----|
| `#portfolio-grid` + Isotope + imagesLoaded | HTML has no filter grid |
| GSAP `.logo-wrapper` | No client marquee in HTML |
| Most Swiper constructors | Only `.swiperTestimonialsV7` exists |
| Countdown, progress bars, dark toggle button | No matching DOM |
| `send_email.js` | **Referenced, missing** |
| `page-*.html` | **Not in package** |
| PHPMailer | Unwired |
| `G-CN09X6ELXM` | Template analytics |

**Visual identity baked into CSS:** `--bs-primary: #399918`, `--bs-secondary: #FFE55C`, Inter + Satoshi, `rounded-5` solar kit. Structural KEEP never means visual KEEP.

---

## 3. Zenith section inventory

Decision is **KEEP / REBUILD / REMOVE** only. KEEP = structural pattern can serve Takeshi; content/visual still change later.

| # | Zenith section | File / ID | Current purpose | Structural pattern | Current dependencies | Takeshi destination | Decision |
|---|----------------|-----------|-----------------|--------------------|----------------------|---------------------|----------|
| Z00 | Document head | `index.html` head | Zenith title, fonts, GA, vendors | Meta + CSS/JS includes | GA, Fontshare, Google Fonts, vendors | Head / identity | **REBUILD** |
| Z01 | Header / nav | `header.fbs__net-navbar` | Template nav + demo dropdown + social | Logo + in-page links + offcanvas + scroll state | Bootstrap offcanvas, `custom.js` hover dropdowns | Chrome: Takeshi nav | **REBUILD** |
| Z02 | Hero | `#home` `.hero__v1-b` | Solar lifestyle + Get Started + Watch video | Dark overlay field, H1, CTA row | CSS bg image, AOS, GLightbox YouTube | Target 01 Hero | **REBUILD** |
| Z03 | Hero image strip | `.hero__v1-img-wrap` | Decorative overlapping photos | 6/3/3 image row | Missing `page-services.html` | None | **REMOVE** |
| Z04 | Stats | `.stats__v8` | Demo counters | 6-up numeric grid | PureCounter, AOS | None (fake proof) | **REMOVE** |
| Z05 | Benefit cards | `.services__v8` | Generic green-energy benefits | 6 icon cards | Inline SVG, AOS | Not services; optional pattern donor for Who we serve | **REMOVE** as section; pattern noted |
| Z06 | About | `#about` `.about__v10` | “Why Solar Energy?” + video + 3 points | Media + copy + icon list | GLightbox video, AOS | Target 02 Context | **REBUILD** |
| Z07 | Services | `#services` `.services__v7` | 3 solar packages + View All | 3 hover cards | Missing `page-service-single.html` | Target 03 Solutions | **REBUILD** |
| Z08 | Mid CTA | `#cta` `.cta__v3` | “Ready to Go Solar?” | Dark band + headline + button + absolute worker | `worker-1.png`, decor SVG, missing contact page | Supporting CTA + Target 09 donor | **REBUILD** |
| Z09 | Portfolio | `#portfolio` `.portfolio__v6` | Fake NYC projects | 3+2 image mosaic + hover captions | Missing single pages | Not a public gallery | **REMOVE** |
| Z10 | Solar calculator | `#solar-calc` | USD savings toy | Form row + results | `calculateSavings()` | None | **REMOVE** |
| Z11 | Why us | `#whyus` `.features__v9` | Generic “work with us” | Split collage + checklist + CTA | Missing contact page | Target 04 Method | **REBUILD** |
| Z12 | Team | `#team` `.team__v4` | Fictional staff | 4 portrait cards + social | — | None | **REMOVE** |
| Z13 | Testimonials | `#testimonials` `.testimonials__v7` | Fake quotes + 13M + 4.88 | Split intro + Swiper | Swiper, PureCounter | None | **REMOVE** |
| Z14 | Pricing | `#pricing` `.pricing__v4` | SaaS monthly tiers | 3 price cards + ribbon | — | None | **REMOVE** |
| Z15 | FAQ | `#faq` `.faq__v3` | Solar lorem accordion | Media + Bootstrap accordion | Bootstrap collapse | Not a CORE journey block | **REMOVE** |
| Z16 | Blog | `#blog` `.recentblog__v3` | Dummy posts | 4 image cards | Empty hrefs | None | **REMOVE** |
| Z17 | How it works | `#howitworks` `.howitworks__v4` | 3 solar steps | Numbered icon steps | AOS | Target 08 Process | **REBUILD** |
| Z18 | Contact | `#contact` `.contact__v5` | Dummy US details + form | Fact columns + form | **Missing `send_email.js`** | Target 10 Final CTA | **REBUILD** |
| Z19 | Footer | `footer.footer` | Template sitemap + credit | 4-col + credits row | FreeBootstrap attribution | Chrome: footer | **REBUILD** |
| Z20 | Back to top | `#back-to-top` | Utility | Fixed button | `custom.js` | Utility | **KEEP** |
| Z21 | Header social | `.header-social` | Empty social | Icon links | — | Conditional on real URLs | **REMOVE** until URLs exist |
| Z22 | Nav dropdown tree | `.dropdown` nested | Template demo | Hover menus | Inaccessible hover JS | None | **REMOVE** |

No **BLOCKED — REQUIRES HUMAN DECISION** on section disposition. Contact *channel mix* is a later human input (phone/WhatsApp/email), not a mapping block.

---

## 4. Zenith-to-Takeshi transformation matrix

| Zenith | Takeshi | Decision | Structural fate | Content fate | Visual fate | Evidence dependency | Implementation notes |
|--------|---------|----------|-----------------|--------------|-------------|---------------------|----------------------|
| Head | Identity / vendors | REBUILD | Replace meta; drop unused CSS/JS when sections die | Discard Zenith title/GA | Discard | Analytics ID if ever approved | Do not keep `G-CN09X6ELXM` |
| Nav | Takeshi in-page nav | REBUILD | Keep offcanvas + brand + scroll-link pattern | Replace labels/anchors | Rebuild (black/lime) | Logo required for production polish | Drop dropdown; logo → `#` or top |
| `#home` | 01 Hero | REBUILD | Keep dark field + H1 + 1–2 CTAs | Replace all copy | Rebuild; new image treatment | Illustrative image OK if not labelled as Takeshi project | No YouTube; no “clean energy” split spans as identity |
| Image strip | — | REMOVE | Delete | Discard | Discard | — | Do not restyle as fake proof |
| Stats | — | REMOVE | Delete | Discard all numbers | Discard | — | Do not restyle counters with new fake numbers |
| `services__v8` | — | REMOVE | Delete as journey section; 2–4 col card grid may inform 05 | Discard green-energy blurbs | Discard icons/solar SVG | — | Do not keep 6 benefit cards |
| `#about` | 02 Context | REBUILD | Keep split: visual + explanation + short list | Rewrite; no 70% / tax credits | Rebuild; no play overlay | Illustrative only | Remove GLightbox video |
| `#services` | 03 Solutions | REBUILD | Do not keep 3-card equal grid as the system | Replace with 7-service system | Rebuild | Capability, not project proof | See §8 |
| `#cta` | Supporting CTA + 09 | REBUILD | Keep statement band pattern | Discard “Go Solar” | Rebuild; no worker PNG, no scribble | — | Split jobs: mid-page invite vs accountability statement — two uses of one pattern, not two Zenith clones |
| `#portfolio` | — | REMOVE | Delete | Discard NYC captions | Discard | **No verified projects** | Future gallery is CONDITIONAL (see §10) |
| `#solar-calc` | — | REMOVE | Delete | Discard USD model | Discard | — | Do not rebuild as “Nigerian tariff calculator” without approved methodology |
| `#whyus` | 04 Method | REBUILD | Keep split + structured list (not checkmark slogans) | Discard lorem checks | Rebuild | None required | Specificity of load→design→match→install→commission→support |
| `#team` | — | REMOVE | Delete | Discard names | Discard | No staff supplied | Do not invent team |
| `#testimonials` | — | REMOVE | Delete Swiper block | Discard quotes/ratings | Discard | No testimonials supplied | Empty slider forbidden |
| `#pricing` | — | REMOVE | Delete | Discard prices | Discard | No packages supplied | |
| `#faq` | — | REMOVE | Delete as independent section | Solar FAQs discarded | Discard | — | Useful Qs may appear inside 03/08 copy later, not as a template FAQ block |
| `#blog` | — | REMOVE | Delete | Discard | Discard | No CMS | |
| `#howitworks` | 08 Process | REBUILD | Keep numbered sequential steps | Replace 3 solar steps with Takeshi process | Rebuild | None | Prefer static steps over Swiper (no `.howItWorksSwiper` in HTML anyway) |
| `#contact` | 10 Final CTA | REBUILD | Keep “how to reach us” + optional form | Discard dummy contacts | Rebuild | Real channels **HUMAN** | Form not production until endpoint exists |
| Footer | Footer | REBUILD | Keep compact footer + **attribution** | Discard Company/Accounts demo links | Rebuild | Contacts when supplied | Do not strip FreeBootstrap credit in implementation until license confirmed |
| Back to top | Utility | KEEP | Retain | n/a | Restyle later | — | Add accessible name in a later a11y phase |
| Header social | — | REMOVE | Omit until URLs | Discard `#` | — | Real profiles | |
| Dropdown | — | REMOVE | Delete markup + hover JS path | Discard | Discard | — | |

**New Takeshi regions with no honest Zenith equivalent**

| Takeshi | Built from | Decision |
|---------|------------|----------|
| 05 Who we serve | New; may borrow a simple responsive grid, **not** `services__v8` copy | **REBUILD** (new section) |
| 06 Technical capability | New compact band; **not** stats counters | **REBUILD** (new; combine visually with 04) |
| 07 Products / brands | New short supporting line/list; **not** Netflix logo marquee | **REBUILD** (new; combine visually with 03 or 06) |

---

## 5. Final target architecture

Customer journey (locked):

```text
UNDERSTAND
  → RECOGNIZE THE PROBLEM
  → UNDERSTAND THE APPROACH
  → EXPLORE SOLUTIONS
  → SEE APPLICATIONS
  → ASSESS TECHNICAL CREDIBILITY
  → UNDERSTAND THE PROCESS
  → UNDERSTAND ACCOUNTABILITY
  → START A CONVERSATION
```

### Recommended visual sequence (authoritative)

Eight regions + header/footer. Phase 1’s ten jobs are all present.

```text
HEADER
01 HERO
02 CUSTOMER CONTEXT
03 SOLUTIONS SYSTEM          ← includes 07 products as a supporting close
04 HOW TAKESHI THINKS        ← includes 06 capability as a supporting close
   [optional supporting mid-CTA]
05 WHO WE SERVE
08 HOW WE WORK
09 ACCOUNTABILITY
10 FINAL CTA / CONTACT
FOOTER
```

IDs for later implementation (recommended, not coded now): `#home` `#context` `#solutions` `#approach` `#serve` `#process` `#accountability` `#contact`.

---

## 6. Navigation architecture

**Current items:** Home, About, Portfolio, Services, Pricing, Team, Blog, Dropdown (multipage + nested), Contact. Header social. Logo → `page-index.html`.

| Current item | Disposition |
|--------------|-------------|
| Home | Rename not required; anchor `#home` |
| About | **REMOVE** as label (maps to Context/Approach, not “About”) |
| Portfolio | **REMOVE** |
| Services | **KEEP as concept** → **Solutions** → `#solutions` |
| Pricing | **REMOVE** |
| Team | **REMOVE** |
| Blog | **REMOVE** |
| Dropdown / Multipages | **REMOVE** |
| Contact | **KEEP** → `#contact` |
| Header social | **REMOVE** until real URLs |

**Recommended nav (do not overload):**

1. Solutions  
2. Who we serve  
3. How we work  
4. Contact  

**Not in nav (still on page):** Context, Approach/capability, Accountability, mid-CTA. Hero CTA covers “start a conversation” early.

Logo: in-page top (`#home` or `/`). No missing multipage hrefs.

Mobile: offcanvas **KEEP** as mechanism; contents = the four items + primary CTA. No nested menus.

---

## 7. Hero architecture audit

**Structure today:** `section.hero__v1-b.section#home` — full viewport (`height: 90vh; min-height: 650px`), CSS `background-image: hero-bg-2-min.jpg`, `::before` black overlay at 30% opacity, container, one-column H1 with three `<span>`s, CTA row (light button + GLightbox play).

**Content hierarchy:** “Power Your World with Clean Energy” → Get Started (`#`) → Watch the Video (YouTube `DQx96G4yHd8`).

**Visual hierarchy:** Photography first; title large (`clamp` up to 4rem); CTAs secondary. Solar worker/panels dominate.

**Animation:** `data-aos="fade-in"` on section; `fade-up` on title/CTAs.

**Mobile:** CSS shifts `background-position: 80% 100%`. Min-height 650px is likely cramped with nav overlay (Phase 0; unverified live).

**Decision: REBUILD**

- Pattern worth taking: **dark authority field + one promise + one primary CTA + optional secondary in-page link.**
- Must leave behind: solar-only headline, video as co-equal CTA, GLightbox, 90vh as a requirement, weak overlay over stock, overlapping image strip (separate REMOVE).
- Must establish: energy systems company; promise; “Discuss your energy needs”; secondary “Explore our solutions” → `#solutions`.
- Image: illustrative infrastructure or property context; never “our project” until verified. Prefer `#0B0C0A` field with photography as controlled media, not Zenith’s light overlay-on-stock as identity.

**Structural reuse:** YES (field + title + CTAs). **Visual reuse:** NO.

---

## 8. Services architecture audit

**Two Zenith “services” mechanisms:**

1. **`services__v8`** — six equal cards (Renewable Energy Source, Eco-Friendly, Energy Independence, Low Operating Costs, Scalability, Battery Integration). No section id. Lorem. Solar/green bias. **REMOVE as a section.** Equal icon-grid of benefits would recreate a generic solar site.

2. **`services__v7` `#services`** — intro + **three** cards (Residential Solar, Commercial Solar, Panel Maintenance) linking to missing pages + “View All Services”. Hover inverts to primary green. **Cannot express seven Takeshi services as a system.** Catalogue of solar SKUs.

**Takeshi requirement:** seven areas in conceptual progression **ASSESS → GENERATE → STORE → INTEGRATE → PROTECT → SCALE → MAINTAIN** (labels refinable in Phase 3), not seven indistinguishable cards and not a product catalogue.

**Decision: REBUILD** (new solutions architecture)

**Future rebuild must:**

- Lead with **assessment/design**, not panels.
- Present seven services as **one system** (grouped or sequenced), scannable on mobile (accordion or stacked rows acceptable; avoid a 7-card icon wall).
- Allow one service to be understood without reading all seven.
- Close with products as **supporting** (“components selected to work as a system”: Deye, Growatt, Felicity, Choice, Sukhig, other certified as required) — Target 07 nested here.
- No “View all” to missing pages.
- No hover-only meaning.

**Structural reuse:** Bootstrap grid only. **Visual reuse of `services__v7` hover cards:** NO.

---

## 9. Proof architecture audit

| Structure | Implies | Decision | Why |
|-----------|---------|----------|-----|
| `.stats__v8` counters | Savings, tons, efficiency, lifespan | **REMOVE** | Demo numbers; PureCounter |
| Testimonials 13M+ / 4.88 stars | Scale and ratings | **REMOVE** | Fake proof |
| Testimonial quotes + names + jobs | Customer evidence | **REMOVE** | Fiction |
| Portfolio NYC titles/locations | Completed projects | **REMOVE** | Fiction |
| Team names/roles | Staff credentials | **REMOVE** | Fiction |
| “70% bills” / “tax credits” in `#about` | Financial proof | **REMOVE** with rewrite | US-centric, unverified |
| Calculator payback / $2800/kW | Savings proof | **REMOVE** | Demo model |
| Pricing $25/49/129 | Commercial offer | **REMOVE** | Not Takeshi model |
| Client logo folder (unused) | Enterprise clients | **REMOVE** if ever added | Trademark / false endorsement |
| GLightbox YouTube | Owned media | **REMOVE** | Third-party demo |
| 10+ years | Experience | **Not a Zenith counter** | Capability copy only if Phase 3 approves supplied wording — **not** a statistic widget |

**No demo proof survives because it “looks useful.”** Animated numbers are not a Takeshi pattern unless verified figures exist later (CONDITIONAL; none now).

---

## 10. Portfolio / project audit

Zenith `#portfolio`: 5 tiles, repeated “Residential Solar Panel Installation / New York City, NY”, links to missing singles. Hover overlay. **Not** `#portfolio-grid` / Isotope.

**Does Takeshi have verified project evidence?** **No** (Phase 0/1).

**Decision: REMOVE** the public project mosaic from the initial architecture.

**Later CONDITIONAL evidence (not designed as empty Zenith portfolio):**

- Minimum to justify a public work section: verified photographs **and** permission **and** honest captions (location/type only if true).
- Until then: infrastructure photography is **illustrative**, framed as such.
- Do not keep a blank “Projects” nav item.

Isotope remains **obsolete**.

---

## 11. Testimonial audit

`.testimonials__v7` + `.swiperTestimonialsV7` + prev/next `href="#"` + slide counts + PureCounter.

**Decision: REMOVE.** Do not retain an empty Swiper “for later.” An empty or lorem slider is worse than absence.

If verified testimonials arrive: a **later CONDITIONAL** block — simple quotes, no fake ratings, no carousel required (static is more accessible). That is a new component, not preservation of v7.

**Swiper:** obsolete for the initial Takeshi page if testimonials and other swipers are gone.

---

## 12. Statistics audit

All PureCounter instances:

- Stats row: 85%, 25+, 600M, 4+, 22%, 50%
- Testimonials: 13, 4 (.88)

**Decision: REMOVE** all. No replacement numbers. PureCounter becomes obsolete unless a verified figure is later approved (unlikely for v1).

**10+ years:** not a counter; optional phrase in capability copy only.

---

## 13. Contact architecture audit

**Facts today:** phone `+(01 234 567 890)`; email `info@mydomain.com`; address Springfield IL; website `www.mywebsite.com`; social `href="#"`. Footer repeats different phone format + FreeBootstrap.net.

**Form:** `#contactForm` — name, email, subject, message; HTML `required`; no `action`/`method`. Success/error divs. Script `assets/js/send_email.js` **missing**. PHPMailer unused. Comment: working PHP/AJAX form is Pro.

**Map:** none.

**Decision: REBUILD** as Target 10.

**Future architecture (not implemented now):**

- Job: convert an informed visitor into a **conversation about energy requirements**.
- Support **whatever real channels are later supplied** (phone, WhatsApp, email, address) — display only what is verified.
- Do **not** invent channels.
- Do **not** present the current form as working.
- A form is optional and only after a real endpoint, spam protection, and labels/errors (Phase 7). Until then: CTA copy + disclosed channels.
- One pathway for residential and commercial; optional “property type” field later if a form exists — not a barrier.
- Dummy US identity **discarded**.

**HUMAN INPUT REQUIRED** for actual numbers/URLs — does not block Phase 3 copy that uses placeholders such as `[PHONE — NOT PROVIDED]`.

---

## 14. Footer architecture audit

**Useful later:** compact brand line, in-page links, real contact when supplied, **FreeBootstrap attribution row** (license constraint).

**Template-specific REMOVE:** Leadership, Careers/we're hiring, Case Studies, Terms/Privacy hrefs to missing pages (legal pages CONDITIONAL if Takeshi supplies them), Register/Sign in/Forgot/Coming soon/404/Portfolio Masonry, dummy address, FreeBootstrap as “website” besides required credit.

**Decision: REBUILD.** Do not remove attribution in implementation until paid terms are confirmed.

---

## 15. Template dependency analysis

```text
Page
├── Bootstrap 5.3.3          REUSABLE (grid, offcanvas, accordion if ever used)
├── Bootstrap Icons          CONDITIONAL (replace with restrained system later)
├── onepage.css              OBSOLETE as identity; some layout hooks until restyle
├── custom.js
│   ├── scroll active nav    REUSABLE if .section ids remain
│   ├── navbar scroll        REUSABLE
│   ├── offcanvas body class REUSABLE
│   ├── back to top          REUSABLE
│   ├── AOS init             DANGEROUS if overused; optional later
│   ├── GLightbox            OBSOLETE if video gone
│   ├── Swiper inits         OBSOLETE if testimonials gone
│   ├── Isotope/imagesLoaded OBSOLETE
│   ├── GSAP marquee         OBSOLETE
│   ├── PureCounter          OBSOLETE if stats gone
│   ├── calculateSavings     OBSOLETE / REMOVE with calculator
│   ├── hover dropdowns      DANGEROUS (a11y) / REMOVE with dropdown
│   ├── countdown/progress/theme toggle  OBSOLETE
│   └── send_email.js        BROKEN
├── Fonts CDN                REPLACE in Phase 5
├── GA G-CN09X6ELXM          DANGEROUS — REMOVE
└── PHPMailer                OBSOLETE until a real server form exists
```

---

## 16. Template debt register

| ID | Template debt | Risk | Future action |
|----|---------------|------|----------------|
| TD-001 | Demo statistics / PureCounter | Fake proof | Remove |
| TD-002 | Demo testimonials + 13M + 4.88 | Fake proof | Remove |
| TD-003 | NYC portfolio captions/locations | False identity | Remove |
| TD-004 | Springfield / mydomain / dummy phones | False identity | Remove |
| TD-005 | Fictional team | Fake credentials | Remove |
| TD-006 | “Why Solar” / Go Solar / Clean Energy hero | Solar-only brand | Rebuild copy/IA |
| TD-007 | 70% savings + US tax credits | Unverified claim | Discard |
| TD-008 | USD solar calculator | Fake financial proof | Remove |
| TD-009 | SaaS pricing cards | Wrong commercial model | Remove |
| TD-010 | Blog dummy posts | Noise / 404 | Remove |
| TD-011 | Nested nav dropdown + multipage links | 404 / template chrome | Remove |
| TD-012 | YouTube DQx96G4yHd8 + GLightbox | Not Takeshi media | Remove |
| TD-013 | GA `G-CN09X6ELXM` | Privacy / wrong owner | Remove |
| TD-014 | Missing `send_email.js` success UX | False working form | Do not ship as live |
| TD-015 | Zenith wordmark SVGs | Wrong brand | Replace when logo exists |
| TD-016 | worker-1.png / studio headshots as “our people” | Implied staff/projects | Do not caption as Takeshi |
| TD-017 | Client-brand SVG pack | Trademark / fake clients | Never use as partners |
| TD-018 | Footer demo IA + “we're hiring” | Template site | Rebuild; keep attribution |
| TD-019 | Green primary / yellow secondary | Zenith identity | Replace in Phase 5 |
| TD-020 | AOS on nearly every block | Motion / a11y | Do not require for meaning |
| TD-021 | Early `</main>` | Landmarks | Fix in implementation phase |
| TD-022 | `outline: none` on controls | A11y | Fix later, not Phase 2 |
| TD-023 | Hover-only dropdowns | Keyboard exclusion | Goes away with dropdown REMOVE |
| TD-024 | FreeBootstrap credit | License | Preserve until confirmed |

---

## 17. Structural reuse vs visual reuse

| Item | Structural reuse | Visual reuse |
|------|------------------|--------------|
| Offcanvas + in-page anchors | YES | NO |
| Dark field + H1 + CTAs | YES | NO (lime signal, not Zenith green overlay-on-stock) |
| Split media + copy | YES | NO |
| Numbered process steps | YES | NO (drop giant solar SVGs) |
| Statement band | YES | NO (no worker cutout, no leaf-green fill) |
| Contact facts + message path | YES | NO |
| Footer + credit row | YES | NO |
| 3-up solar hover cards | NO | NO |
| Stats counters | NO | NO |
| Swiper testimonials | NO | NO |
| Pricing ribbons | NO | NO |
| Image mosaic portfolio | NO (unless verified work later) | NO |
| Calculator panel | NO | NO |
| Team portraits | NO | NO |

**Default:** reuse useful engineering; replace template identity.

---

## 18. Architectural risk register

| Risk | Rank | Mitigation (later phases — not now) |
|------|------|-------------------------------------|
| Zenith section order surviving as the page | **CRITICAL** | Implement the 8-region sequence, not the 16-block template |
| Demo proof leaking through restyle | **CRITICAL** | Remove TD-001–TD-005 before visual polish |
| Solar-first hero/services | **CRITICAL** | Hero + solutions rebuild per §7–8 |
| Services as 7-icon catalogue | **HIGH** | System grouping; assessment first |
| No verified proof → thin credibility | **HIGH** | Process + capability specificity; honest imagery labels |
| Contact path empty | **HIGH** | Human channels; don’t fake a live form |
| One-pager too long if we keep FAQ/blog/team “just in case” | **HIGH** | REMOVE list is mandatory |
| Combining 06+07 into 03/04 until they disappear | **MEDIUM** | Phase 3 must still write those messages |
| Mobile: 7 services + 8 audiences | **MEDIUM** | Stack/scan patterns; not 7× hover cards |
| AOS / 90vh hero | **MEDIUM** | Phase 6; reduced motion |
| Unused JS (Swiper, Isotope, GSAP) left linked | **MEDIUM** | Drop with removed sections |
| Isotope GPL if someone “turns portfolio back on” | **MEDIUM** | Do not revive |
| Attribution stripped accidentally | **HIGH** (legal) | Keep until license confirmed |
| Logo missing | **MEDIUM** | Wordmark/text fallback in Phase 3–5 |
| Live a11y/perf never measured | **MEDIUM** | Phase 6–7 must test in browser |

---

## 19. Single-page length analysis

| Count | Notes |
|-------|--------|
| Zenith now | ~16 content blocks + nav/footer — too long and off-journey |
| Takeshi v1 | **8 regions** + header/footer |
| Essential | 01, 02, 03, 04, 05, 08, 09, 10 |
| Combined into others | 06 into 04; 07 into 03 |
| Removed | Stats, strip, portfolio, calc, team, testimonials, pricing, FAQ, blog, dropdown, 6-up benefits |
| Conditional later | Verified projects, verified quotes, legal pages, real social, real form endpoint |

**Goal:** complete decision journey without a second homepage of decoration. Do not paste the full company profile (Phase 1 density rule).

---

## 20. Section priority

| Target | Priority | Visual treatment |
|--------|----------|------------------|
| 01 Hero | **CORE** | Own region |
| 02 Context | **CORE** | Own region |
| 03 Solutions | **CORE** | Own region |
| 07 Products | **SUPPORTING** | Close of 03 |
| 04 Method | **CORE** | Own region |
| 06 Capability | **SUPPORTING** | Close of 04 (named practices, not counters) |
| Mid-page CTA | **SUPPORTING** | After 03 or 04; not instead of 10 |
| 05 Who we serve | **CORE** | Own region, compact |
| 08 How we work | **CORE** | Own region |
| 09 Accountability | **CORE** | Own region, can be short |
| 10 Final CTA | **CORE** | Own region |
| Projects / testimonials / stats / cert badges | **CONDITIONAL** | Absent until verified |
| FAQ / blog / team / pricing | **Not in IA** | Removed |
| Logo / real contacts | **CORE for launch**, not for Phase 3 draft copy | Human inputs |

---

## 21. Phase 3 content inputs

**Sequence to write against:** Header labels → 01 → 02 → 03(+07) → 04(+06) → [mid CTA] → 05 → 08 → 09 → 10 → Footer.

| Section | Purpose | Customer question | Heading job | Copy job | CTA |
|---------|---------|-------------------|-------------|----------|-----|
| 01 | Position Takeshi | What is this? | Energy systems + promise | Outcome + approach, not solar slogan | Discuss needs; Explore solutions |
| 02 | Practical stakes | Why it matters | Disruption to homes/operations | Empathetic, not fear | None or text link |
| 03 | Offer as a system | What do they provide? | Seven services in progression | Assessment first; no catalogue | Optional jump to contact |
| 07 | Supporting kit | Do they know equipment? | Components serve the system | Named brands, no hard sell | — |
| 04 | Method | Why this approach? | Load → design → match → install → commission → support | Specific, no “best” | — |
| 06 | Depth | Do they understand the work? | Named practices | Short; optional 10+ years if approved | — |
| 05 | Fit | My environment? | Scannable types | One line each, not eight essays | — |
| 08 | Process | What happens next? | Understand → Assess → Design → Install → Support | Can include conversation…handover | — |
| 09 | Character | Will they stay? | Not selling the most equipment | Accountable after power comes on | — |
| 10 | Action | How do I start? | Discuss energy needs | Channels only if real; no dummy form claims | Primary conversation |

**Evidence for Phase 3:** none verified. Write **capability and process**, not case studies.

**Human gaps:** logo, contacts, photos, testimonials, certs — mark `[NOT PROVIDED]`, do not invent.

---

## 22. Phase 4 image dependencies

| Region | Image job | Type | Caption rule |
|--------|-----------|------|--------------|
| Hero | Authority + real infrastructure/property feel | Priority 1–2 | Not “our install” unless verified |
| Context | Consequence/environment, not disaster porn | Property / operations | Illustrative |
| Solutions | Optional detail punctuation (inverter, battery, wiring) | Details | Illustrative |
| Method | People working or technical still | People at work / infrastructure | No posed staff as named team |
| Who we serve | Light environmental cues if used at all | Properties | Do not fake Nigerian landmarks as Takeshi sites |
| Process | Usually typographic; optional commissioning still | Detail | |
| Accountability | Restraint; may be type-only | Optional | |
| Contact | None required | — | |
| Do not source | Studio “CEO” headshots, NYC rooftops as portfolio, Netflix logos | — | |

Zenith JPGs/PNGs are **placeholders to replace**, not evidence.

---

## 23. Phase 5 visual dependencies

| Decision | Visual implication |
|----------|-------------------|
| Dark authority hero/nav/footer | `#0B0C0A` fields; lime as CTA/signal only |
| Reading sections | `#F4F5EF` breathing space |
| Method / process | Technical secondary panels `#3A3E36` where contrast allows |
| Solutions as system | Editorial list or grouped modules, not Zenith hover-green cards |
| Who we serve | Compact index, not 8 marketing posters |
| Accountability | Large type statement band (cta pattern, new colours) |
| Mid CTA | Same band family, shorter |
| Motion | Not required for meaning; do not depend on AOS |
| Type | Per Phase 1; replace Inter/Satoshi as identity |
| Do not carry | `rounded-5` solar kit as brand, leaf green, yellow `#FFE55C`, worker PNG, quote SVGs, pricing ribbons |

**Rhythm:** dark structured field → lime signal → warm neutral — not alternating 16 decorative sections.

---

## 24. Human inputs still required

Same as Phase 1; still **do not invent:**

Logo, phone, WhatsApp, email, public address, social URLs, domain, verified photos, testimonials, certifications/registration, warranties, project evidence, analytics property, Zenith paid-license/attribution decision, product artwork.

**Architectural human gate (not blocking Phase 3 copy):** which contact channels to publish once known. Recommended direction: publish all verified channels; do not wait for a perfect form.

---

## 25. KILLCRITIC findings

| Attack | Result | Architecture response |
|--------|--------|------------------------|
| 1 Template capture | **Fail if we kept Zenith order** | New sequence; REMOVE majority of blocks |
| 2 Solar bias | **Fail if hero/services stayed** | Hero + solutions rebuild; solar inside system |
| 3 Catalogue | **Fail if 7 equal cards** | System progression; assessment first |
| 4 Fake proof | **Fail if stats/testimonials/portfolio kept** | All REMOVE; debt register |
| 5 Generic solar company | **Risk** | Specificity lives in 04, 06, 08, 09 — Phase 3 must not water down |
| 6 Overloaded one-pager | **Mitigated** | 8 regions; FAQ/blog/team/pricing gone |
| 7 Thin credibility | **Risk if 06/07 vanish** | Nested into 03/04 as supporting closes |
| 8 CTA too early | **Mitigated** | Hero conversation CTA is allowed; primary close is 10 after process |
| 9 CTA too late | **Mitigated** | Hero + supporting mid-CTA + 10 |
| 10 Mobile | **Watch** | 03 and 05 must stack; no hover-only; no 90vh requirement |
| 11 Accessibility | **Zenith sliders/hover/AOS challenged** | No Swiper v1; no dropdown hover; motion optional |
| 12 Evidence dependency | **Projects/testimonials CONDITIONAL off** | Page can ship on process + capability |
| 13 Maintenance | **Risk if custom.js stays a multipage dump** | Later strip dead plugins so editors aren’t fighting Zenith |

**No material hole left that would keep Zenith as the IA.** Residual: empty contact until humans provide channels; lime misuse in Phase 5; attribution.

---

## 26. Final recommended architecture (canonical)

### HEADER
- **Purpose:** Wayfinding and identity  
- **Question:** Where am I / how do I move?  
- **Priority:** CORE  
- **Zenith source:** `header.fbs__net-navbar`  
- **Decision:** REBUILD  
- **Transform:** Four anchors; offcanvas; no dropdown; logo when available  
- **Dependencies:** Bootstrap offcanvas; trim hover-dropdown JS later  
- **Evidence:** Logo CONDITIONAL for polish  

### 01 — HERO
- **Purpose:** What Takeshi is; outcome; promise; next action  
- **Question:** What is this?  
- **Priority:** CORE  
- **Zenith source:** `#home`  
- **Decision:** REBUILD  
- **Transform:** Energy systems, not solar lifestyle; Discuss needs + Explore solutions; no video  
- **Dependencies:** Drop GLightbox for v1  
- **Evidence:** Illustrative image only  

### 02 — CUSTOMER CONTEXT
- **Purpose:** Why dependable power matters for homes, businesses, properties, operations  
- **Question:** Why does it matter?  
- **Priority:** CORE  
- **Zenith source:** `#about`  
- **Decision:** REBUILD  
- **Transform:** Practical disruption (cost, downtime, equipment, safety) without fear slogans; no 70%/tax credits; no video  
- **Dependencies:** Split layout optional  
- **Evidence:** None  

### 03 — SOLUTIONS SYSTEM (+ 07 PRODUCTS)
- **Purpose:** What Takeshi provides, as one system  
- **Question:** What do they do? / Can equipment be matched?  
- **Priority:** CORE + SUPPORTING  
- **Zenith source:** `#services` (not `services__v8`)  
- **Decision:** REBUILD  
- **Transform:** Seven services in ASSESS→…→MAINTAIN logic; brands as supporting close  
- **Dependencies:** New IA, not 3 solar cards  
- **Evidence:** Brand names supplied; no fake installs  

### 04 — HOW TAKESHI THINKS (+ 06 CAPABILITY)
- **Purpose:** Method and technical depth  
- **Question:** Why this approach? Do they understand the work?  
- **Priority:** CORE + SUPPORTING  
- **Zenith source:** `#whyus` (not testimonials/stats)  
- **Decision:** REBUILD  
- **Transform:** Load→design→match→install→commission→support; named practices; no “best”; no counters  
- **Dependencies:** None  
- **Evidence:** 10+ years only if approved in Phase 3  

### SUPPORTING — MID CTA
- **Purpose:** Offer conversation after understanding offer/method  
- **Question:** Can I start now without scrolling to the end?  
- **Priority:** SUPPORTING  
- **Zenith source:** `#cta` pattern  
- **Decision:** REBUILD  
- **Transform:** Discuss energy needs; no Go Solar; no worker PNG  
- **Dependencies:** Same as final CTA intent  
- **Evidence:** None  

### 05 — WHO WE SERVE
- **Purpose:** Recognition of environment  
- **Question:** Can they handle my situation?  
- **Priority:** CORE  
- **Zenith source:** None honest — **new**  
- **Decision:** REBUILD  
- **Transform:** Compact index of supplied environments  
- **Dependencies:** New section  
- **Evidence:** None  

### 08 — HOW WE WORK
- **Purpose:** Engagement process  
- **Question:** What happens next?  
- **Priority:** CORE  
- **Zenith source:** `#howitworks`  
- **Decision:** REBUILD  
- **Transform:** Understand→Assess→Design→Install→Support; detail through handover  
- **Dependencies:** Numbered static steps, not Swiper  
- **Evidence:** None  

### 09 — ACCOUNTABILITY
- **Purpose:** Responsible conclusion  
- **Question:** Will they still be there after commissioning?  
- **Priority:** CORE  
- **Zenith source:** Statement-band pattern from `#cta`, **not** testimonials  
- **Decision:** REBUILD  
- **Transform:** Not selling the most equipment; design right; install properly; remain accountable after the power comes on  
- **Dependencies:** Type-led  
- **Evidence:** None  

### 10 — FINAL CTA / CONTACT
- **Purpose:** Informed enquiry  
- **Question:** How do I start?  
- **Priority:** CORE  
- **Zenith source:** `#contact`  
- **Decision:** REBUILD  
- **Transform:** Discuss energy needs; real channels only; no dummy identity; form not live until endpoint  
- **Dependencies:** Broken `send_email.js` must not be treated as a feature  
- **Evidence:** Human contact details  

### FOOTER
- **Purpose:** Compact close + legal/attribution  
- **Question:** Who made this / how else do I reach you?  
- **Priority:** CORE chrome  
- **Zenith source:** `footer`  
- **Decision:** REBUILD  
- **Transform:** Strip demo sitemap; **keep FreeBootstrap credit** until license confirmed  
- **Dependencies:** License  
- **Evidence:** Contacts if public  

### UTILITY
- Back to top: **KEEP** (restyle/a11y later)

---

## 27. Phase 3 readiness

Phase 3 can write web-native copy against this sequence without waiting for code.

**Phase 3 is ready.** It must not paste the company profile, must not use Zenith demo proof, and must mark missing facts as not provided.

```text
PHASE 3 READINESS:
READY
```

Phase 3 requires **separate explicit authorization**. Do not begin content implementation in `index.html` until then.

---

## Implementation files

Verified at Phase 2 completion: **no changes** to `takeshi_energy/index.html`, CSS, JavaScript, assets, or dependencies. This file is documentation only.
