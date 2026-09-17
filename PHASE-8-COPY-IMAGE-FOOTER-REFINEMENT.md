# PHASE 8 — COPY / IMAGE / FOOTER REFINEMENT

**Date:** 2026-09-16  
**Scope:** Targeted client-facing copy, image, and footer corrections  
**Not a new phase. Not a redesign.**  
**Commit / deploy:** Not performed  

---

## COPY REVIEW:
PASS

Hero promise, services, method, process, accountability, and CTAs retained. Visible project-note language removed. “We start with the load — not a generic package.” restored as the public differentiator.

---

## INTERNAL-NOTE LANGUAGE:
REMOVED

Removed from the visible page:

- Hero photograph disclaimer paragraph  
- Cabinet figcaption (license / “not a Takeshi installation”)  
- Photographer credits in the footer  

HTML source still contains a non-visible Zenith/license comment. That is not client-facing.

Contact still has no “not published yet” copy. Missing channels remain a documentation/launch dependency.

---

## HERO:
PASS

Approved Lagos aerial retained. No visible credit or project-disclaimer copy. Alt describes the photograph only:

> Aerial view of buildings along a river in Lagos, Nigeria.

The image is still not presented as a Takeshi installation.

---

## WHAT WE PROVIDE IMAGE:
REPLACED

**Removed from the page:** electrical cabinet (IMAGE-003, CC BY-SA 4.0 Hannes Grobe). Files remain on disk unused; no longer referenced, so on-page attribution is no longer required.

**Replacement:** `takeshi-detail-electrical-infrastructure.jpg`  
- Source: Unsplash, Michael Pointner (`0f7ogH3AEek`)  
- Subject: electrical substation equipment and overhead conductors  
- License: Unsplash License — commercial use; **attribution not required**  
- Local file ~213 KB, 1400×933  

Documentary infrastructure, no people, no solar-farm cliché, no implied Takeshi job.

---

## CTA IMAGE:
ADDED

Section retained:

> If you already know what you need, we can start there.

**Asset:** `takeshi-cta-lagos-cityscape.jpg`  
- Source: Unsplash, Onaopemipo Oladipupo (`QiLk9o6khTU`) — Lagos cityscape, overcast  
- License: Unsplash License — **attribution not required**  
- Local file ~334 KB, 1600×1066  

Treatment: full-bleed layer at **0.22 opacity** (desktop) / **0.14** (mobile) under a dark scrim. Copy and lime CTA sit above. `alt=""` because the photograph is atmospheric; the heading and lede already carry the meaning.

Not a second hero: different photograph, much lower opacity, shorter section.

---

## CTA SECTION:
RETAINED

---

## ALT TEXT:
PASS

| Image | Alt |
|-------|-----|
| Hero | Aerial view of buildings along a river in Lagos, Nigeria. |
| Solutions infrastructure | Electrical substation equipment and overhead conductors against the sky. |
| CTA cityscape | `alt=""` (decorative) |
| Logo marks | `alt=""` (name in adjacent text) |

No license or “illustrative” language in alt.

---

## VISIBLE IMAGE CREDITS:
REMOVED

Unsplash does not require on-page credit. The Commons cabinet image is no longer displayed.

---

## FOOTER:
PASS

Restored to a single wrapping line:

Takeshi promise → nav → © 2026 Takeshi Energy. → Powered by 69resources.com → required FreeBootstrap credit.

No brand lockup column. No photo-credit block. Wraps on small screens.

---

## ZENITH ATTRIBUTION:
RETAINED — LICENSE BASIS DOCUMENTED

Fetched `https://freebootstrap.net/license`:

> Free templates require attribution to FreeBootstrap.net. This means you must include a **visible link or credit** to our website on any site where you use the free template. Unless you buy the license.

No paid-license evidence exists. The requested removal of “Adapted from Zenith by FreeBootstrap.net” was **not** applied. It remains as a quiet trailing credit with live links, not as a photo/legal essay.

---

## POWERED BY:
69resources.com — ADDED

Linked to `https://69resources.com` (domain supplied in the authorization). Subordinate to Takeshi.

---

## MOBILE:
PASS (static CSS)

- CTA image opacity reduced; stronger scrim  
- Footer stacks instead of overflowing  
- Solutions image uses a landscape crop, not a tall cabinet  
- Hero unchanged in structure  

Interactive browser QA was not available in this pass.

---

## ACCESSIBILITY:
PASS

Landmarks, headings, skip link, and CTAs unchanged. Decorative CTA image is hidden from AT (`aria-hidden` on the media wrapper; empty alt). Contrast of mid-CTA type remains paper on a near-black scrim.

---

## SEO:
PASS

Title, description, OG, JSON-LD unchanged.

---

## PERFORMANCE:
PASS (sanity)

Two new JPEGs (~213 KB + ~334 KB), both lazy-loaded. Cabinet 900px file is no longer requested. No new JS or fonts. Lighthouse not re-run (payload change is modest; no fabricated scores).

---

## FILES CHANGED

```text
MODIFIED:
- takeshi_energy/index.html
- takeshi_energy/assets/css/takeshi.css

CREATED:
- takeshi_energy/assets/images/takeshi/takeshi-detail-electrical-infrastructure.jpg
- takeshi_energy/assets/images/takeshi/takeshi-cta-lagos-cityscape.jpg
- PHASE-8-COPY-IMAGE-FOOTER-REFINEMENT.md

UNCHANGED ON DISK (unreferenced):
- takeshi-detail-electrical-cabinet.jpg
- takeshi-detail-electrical-cabinet-900.jpg

COMMIT:
NOT AUTHORIZED / NOT PERFORMED

DEPLOYMENT:
NOT AUTHORIZED / NOT PERFORMED
```
