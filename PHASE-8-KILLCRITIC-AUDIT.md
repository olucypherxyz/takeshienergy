# PHASE 8 — KILLCRITIC AUDIT

**Project:** Takeshi Energy website  
**Phase:** 8 — adversarial quality gate  
**Status:** LOCKED  
**Date:** 2026-09-16  
**Depends on:** Phases 0–5, 7 (locked)  
**Git commit / deploy:** Not performed  
**Phase 6:** Not started  

```text
PHASE 8 — PASS / COMPLETE / VERIFIED / LOCKED
```

This is not a redesign. Phase 5 remains the visual baseline. Phase 7 remains the technical baseline. Corrections are limited to material communication, presentation, and residue failures.

---

## A. Phase status

| Item | Value |
|------|--------|
| Authorization | Explicit Phase 8 — attack, fix, verify |
| Brand / IA / image system reopened | **No** |
| Unsupported claims added | **No** |
| Fabricated evidence or contacts | **No** |
| Unauthorized commit/deploy | **No** |

---

## B. Audit methodology

The production page was treated as the object under attack, not the documentation.

Perspectives applied: brand, UX, conversion, visual QA, copy, Nigerian/African market context, homeowner, commercial buyer, estate/developer, technical buyer, accessibility, trust, SEO, frontend, skeptical first-time visitor.

Findings classified **P0–P3**. Implementation failures were fixed. Human-input gaps were documented, not disguised.

Live Cursor-browser interaction was **unavailable**. Review was static (HTML/CSS/JS) plus prior Phase 7 Lighthouse history. No new Lighthouse run: changes are copy, caption, and CSS composition — not payload, fonts, or third-party scripts.

---

## C. Source documents reviewed

- `PHASE-0-RECONNAISSANCE.md`
- `PHASE-1-BRAND-UX-STRATEGY.md`
- `PHASE-2-ZENITH-TRANSFORMATION-ARCHITECTURE.md`
- `PHASE-3-CONTENT-SYSTEM.md`
- `PHASE-4-IMAGE-SYSTEM.md`
- `PHASE-5-VISUAL-TRANSFORMATION.md`
- `PHASE-7-ACCESSIBILITY-SEO-PERFORMANCE.md`

---

## D. Actual implementation inspected

- `takeshi_energy/index.html`
- `takeshi_energy/assets/css/takeshi.css`
- `takeshi_energy/assets/js/custom.js`
- `takeshi_energy/assets/images/takeshi/*` (hero variants, cabinet 900, originals, logo-mark, favicon)

---

## E. Brand differentiation findings

**Kill 1 — without name/logo, is this a generic solar site?**  
Mostly **no**. Category eyebrow is “Energy systems.” Solar is service 02, not the identity. Lagos urban fabric is not a panel farm. Method (“start with the load”) is the distinctive idea.

Residual generic risk: another competent energy firm could copy the *structure*. Differentiation is positioning and voice, not a unique visual invention. That is acceptable without inventing claims.

**Kill 2 — swap logo and reuse?**  
The IA is copiable. The locked facts (load-first, electrical included, commissioning, estates, named equipment *experience*) are what would not survive a naive solar-installer paste. Strengthened by removing internal/meta copy that made the page sound like a content system, not a company.

**Kill 3 — Takeshi vs merely professional?**  
Archivo + IBM Plex Mono + lime-on-black + restrained lists read as the same company as the brand sheets. Reconstructed mark remains a human-input limit, not a design failure.

---

## F. Generic-solar findings

No “go green,” “power your future,” savings percentages, or solar-panel hero. Hybrid copy still mentions reducing generator use — market-true, not lifestyle greenwash.

**PASS WITH OBSERVATION:** Solar remains the longest named generation technology in the service list because that is the real offer order, not because the brand is solar-only.

---

## G. AI-generation risk findings

Warning patterns (`leveraging`, `world-class`, `seamless`, etc.) are absent.

**Material failure (fixed):** Process lede used implementation language (“The public sequence is five stages… not as a second numbered list”). That is how a specification talks, not an engineer to a customer.

**Quieted:** Who-we-serve project disclaimer was merged into the primary lede, making the first scan feel legalistic.

Lists are editorial, not identical icon cards. Whitespace is used instead of filler diagrams.

---

## H. Copy findings

| Issue | Verdict |
|-------|---------|
| Promise / hero lede | Specific, locked, keep |
| Context | Market-recognisable without cliché |
| Services | Technical and readable |
| Approach vs process | Overlap is architectural (method vs journey), not filler — **not merged** |
| Process lede | **Fixed** — customer language |
| Serve disclaimer | **Quieted** — same sentences, secondary voice |
| Accountability | Distinctive, not hype |
| Contact empty rows | **Removed** — looked like an unfinished CMS |

Repetition of “how the property actually…” is strategic reinforcement across locked headings. Left in place.

---

## I. Homeowner test

| Question | Result |
|----------|--------|
| A. What can Takeshi help with? | Yes — hero lede names solar/inverter/battery/backup/electrical |
| B. Assessment? | Yes — service 01 and process Assess |
| C. Not just equipment? | Yes — load, matching, electrical, commissioning |
| D. After contact? | Yes — five stages |
| E. Next step? | CTA is clear; **channels unpublished** |
| F. Pressured? | No — two conversation CTAs + one explore |
| G. Understands the problem? | Yes — interruptions, essential loads, generator in hybrid |

---

## J. Commercial decision-maker test

Technically credible: load, peak, backup duration, exclusions, commissioning, fault support. Scale without exaggeration: estates/multi-unit described as capability, not named projects. CTA is a conversation, not “Get a quote now.”

**Evidence gap:** no operating-site proof. Classified as human input, not a copy hole to fill with case studies.

---

## K. Technical buyer test

Capability chips and assessment paragraph would satisfy an engineer that this is not catalogue copy. Jargon is carried by plain sentences. “Certified products” is framed as selection criteria, not dealership.

---

## L. Property/estate test

Service 06 and the estates row exist. No project names. Disclaimer now quieter but still present.

---

## M. Trust analysis

**Design trust:** process, specificity, no fake badges, no counters.  
**Evidence trust:** absent. Correctly so.

---

## N. Proof/evidence analysis

```text
EVIDENCE GAP — HUMAN INPUT REQUIRED
```

Missing: verified projects, testimonials, crew photography, certifications, measurable outcomes. Not an implementation failure.

---

## O. Claim audit

| Claim | Source | Status |
|-------|--------|--------|
| Energy systems / listed technologies | Profile / P3 | OK |
| Start with the load | Profile / P3 | OK |
| Seven services | Profile / P3 | OK |
| Brand experience (Deye, Growatt, Felicity, Choice, Sukhig) | Profile | OK as experience |
| More than ten years hands-on | Profile | OK (once) |
| Warranty / service plan “as agreed” | P3 process | OK — not a published guarantee |
| Named installations, MW, savings, “trusted by” | — | **Absent** |
| Lagos as Takeshi project | — | **Guarded** (hero credit + footer + alt) |

---

## P. CTA audit

Instances of **Discuss your energy needs:** hero, mid-band (2). Explore: hero only. Contact is the destination, not a third identical button (nowhere to send it).

Wording is calm. Destination `#contact` is correct. Usable completion of the conversation is **blocked by missing channels**.

---

## Q. Contact journey audit

Visitor knows *what to prepare*. Visitor cannot *send* anything.

```text
LAUNCH BLOCKER — HUMAN INPUT
phone / WhatsApp / email / domain
```

Empty labelled rows (“Phone — Not published yet”) were removed so the live page does not look like a demo with four dead fields. Pending copy remains explicit.

---

## R. Mobile intentionality audit

Failures found and corrected:

- 88vh hero on small screens felt like a shrunken desktop hero
- Audience index forced a two-column grid that squeezed below ~540px
- Cabinet `max-height: 32rem` after seven services was too heavy on a phone
- Hero crop was desktop-weighted

---

## S. Visual hierarchy audit

Scan layer still holds: Takeshi → promise → energy systems → cost of interruption → services → method → audiences → process → accountability → contact.

Nothing equally loud as the H1 except lime CTAs, which is intentional signal.

---

## T. Section-justification audit

All eight regions plus chrome still have jobs. Mid-CTA is a rest, not a Zenith leftover. Approach vs process: one is design philosophy, one is the customer sequence — keep both.

---

## U. Image audit

| Image | Verdict |
|-------|---------|
| IMAGE-001 Lagos | Illustrative; **hero now states that in the first viewport** |
| IMAGE-003 Cabinet | Technical punctuation; caption + CC BY-SA intact; mobile height reduced |
| People | None — correct |
| Logo mark | Reconstructed; adequate at nav size; official master still required |

---

## V. Lime/colour audit

Lime remains on: primary buttons, dark-section eyebrows, method step numbers, nav active, focus, skip link, mark stroke.

Not used as page fill or as paper-body text. Six method numbers on black are signal, not decoration. Process numbers on paper stay graphite.

Paper sections still provide relief after dark hero / approach / accountability.

---

## W. Typography audit

Archivo carries headings; mono is limited to eyebrows, numbers, chips, credits. H1 still 900. Line measure capped. No font-family change.

---

## X. Accessibility regression audit

| Check | Result |
|-------|--------|
| One H1 / heading tree | Unchanged structure |
| Skip link, landmarks, offcanvas `inert` | Unchanged |
| Focus styles | Unchanged |
| Contrast of new hero credit | Paper at 78% on `#0B0C0A` |
| Serve note | Muted graphite on paper |
| Reduced motion | Unchanged |
| Keyboard | Static; live pass still unavailable |

Removed empty contact list — fewer non-actionable items in the tab/read order.

---

## Y. SEO regression audit

Title, description, OG (no URL/image), Twitter summary, Organization JSON-LD unchanged. No fake canonical. Headings not demoted.

---

## Z. Performance regression audit

No new images, fonts, libraries, or JS work. Cabinet display height reduced (same file). Hero still uses srcset. **Lighthouse not re-run** (no material payload change). Phase 7 localhost scores remain historical, not re-claimed.

---

## AA. Template residue audit

Production HTML: Zenith only in license comment + required FreeBootstrap credit.

Removed leftover Zenith `section` class on the hero and Bootstrap `d-none d-lg-block` on nav.

Disk vendors still unloaded. `G-CN09X6ELXM` absent.

---

## AB. Stranger test

| Time | Answer after fixes |
|------|---------------------|
| 5s | Energy-systems company; dependable power; Lagos is labelled illustrative |
| 15s | Unreliable supply costs homes and operations; they design around the load |
| 30s | Assessment, solar, inverter/battery, electrical, hybrid, estates, maintenance; 10+ years stated once |
| 60s | Concrete services and a five-stage path |
| Leave | Discuss energy needs → contact, which honestly cannot complete until channels exist |

---

## AC. Customer journey test

```text
LAND → UNDERSTAND → RECOGNIZE SELF → CAPABILITY → TRUST (design) → PROCESS → ACCOUNTABILITY → CONTACT
```

Leave-risk that is **implementation:** hero-as-project, meta process copy, unfinished channel rows, accidental mobile — **fixed**.

Leave-risk that is **real-world:** no proof, no phone/email — **documented**.

---

## AD. KILLCRITIC findings by priority

| ID | Finding | Priority | Category | Root Cause | Action | Status |
|----|---------|----------|----------|------------|--------|--------|
| K01 | Process lede read as spec notes, not customer copy | P1 | Copy / AI-risk | Phase 3 implementation sentence shipped verbatim | Rewrite to five-stage customer language | FIXED |
| K02 | Hero could be read as Takeshi project evidence | P1 | Image / trust | Caption only in footer/alt | Visible hero credit | FIXED |
| K03 | Contact showed four empty “not published” fields | P1 | Contact / template feel | Placeholders presented as a channel list | Single pending paragraph | FIXED |
| K04 | Who-we-serve disclaimer buried the audience idea | P1 | Scan / trust | Two jobs in one lede | Split to quieter note | FIXED |
| K05 | Mobile hero 88vh + desktop crop | P1 | Mobile | Desktop-first hero metrics | Shorter min-height + mobile object-position | FIXED |
| K06 | Audience index squeezed on narrow screens | P1 | Mobile | Two-column dt/dd too early | Stack below 540px | FIXED |
| K07 | Cabinet too tall on mobile | P1 | Image / mobile | 32rem max-height everywhere | 18rem until desktop | FIXED |
| K08 | Hero `section` class + Bootstrap display utilities | P2 | Residue | Zenith/Bootstrap leftovers | Native Takeshi nav display | FIXED |
| K09 | No usable send path | P0* | Contact | No verified channels | Do not fabricate | BLOCKED |
| K10 | No project/testimonial proof | P3 | Proof | Evidence not supplied | Do not invent | DOCUMENTED |
| K11 | Reconstructed logo | P3 | Identity | No official SVG | Do not redraw | DOCUMENTED |
| K12 | Approach vs process overlap | P3 | Length | Locked dual job | Keep | NO ACTION REQUIRED |
| K13 | Copiable IA without Takeshi name | P3 | Differentiation | Honest category site | Strengthen facts, not slogans | NO ACTION REQUIRED |
| K14 | License “Zenith” credit | P3 | Residue | FreeBootstrap requirement | Keep | NO ACTION REQUIRED |
| K15 | Live keyboard/browser QA | P3 | Verification | MCP unavailable | Document | DOCUMENTED |
| K16 | “You always know what happens next” | P3 | Claim tone | Assurance without proof | Kept; process list is the basis | NO ACTION REQUIRED |

\*P0 for **launch**, not for Phase 8 implementation completeness. Classified as human-input blocker per §74.

---

## AE. Fixes applied

- Process lede rewritten for a human visitor
- Hero: visible “illustrative / not a Takeshi project” credit
- Contact: removed dead channel rows; pending copy retained
- Who we serve: disclaimer moved to `.te-note`
- Mobile hero height and crop
- Audience definition list stacks on small viewports
- Cabinet image shorter on small viewports
- Nav display without Bootstrap utility classes
- Hero no longer uses leftover `.section` class; JS observes `.te-hero`

---

## AF. Findings intentionally not fixed

- Merging approach + process (would reopen IA)
- Adding proof, contacts, OG image, official logo
- Replacing IMAGE-001
- Removing FreeBootstrap attribution
- Deleting unused vendor files on disk
- Adding a third conversation button on a contact section with no destination
- Rewriting locked service/process stage copy

---

## AG. Human input dependencies

### BLOCKING for a real public launch

- Verified phone, WhatsApp, email
- Verified production domain
- Official logo/master SVG (if reconstructed mark is not final)
- Approved OG image
- Legal copy if required

### NON-BLOCKING

- Project photography / case studies / testimonials
- Takeshi crew photography (Phase 4 gates)
- Self-hosted fonts / vendor disk cleanup

---

## AH. Remaining risks

- Skeptical buyers may still leave for lack of proof
- Contact CTA currently educates, then stops
- Google Fonts third-party cost (unchanged)
- Another installer could imitate the skeleton; they could not honestly copy the restraint-plus-specificity without the same facts

---

## AI. Files changed

See file-change record below.

---

## AJ. Final QA

| Check | Method | Result |
|-------|--------|--------|
| Desktop visual | Static CSS/HTML | Hierarchy intact; hero credit added |
| Mobile visual | CSS breakpoints | Hero, index, cabinet adjusted |
| Navigation/links | Source | All `#` targets exist |
| CTA | Source | Two conversation, one explore, contact destination |
| Headings | Source | One H1; tree unchanged |
| Contrast | Token reasoning | New note/credit use previously accepted pairs |
| Focus | Unchanged CSS | No regression intended |
| Images | Source | Phase 4 assets; captions honest |
| Residue | Grep | Zenith = license only in page |
| Claims | Read | No new facts |
| SEO meta | Unchanged | Pass |
| Performance | Sanity | No new weight |
| Reduced motion | Unchanged | Pass |
| Lighthouse | Not re-run | No material payload change |
| Interactive browser | UNAVAILABLE | — |

---

## AK. Phase completion status

```text
PHASE 8 — PASS / COMPLETE / VERIFIED / LOCKED
```

All P1 implementation failures above are fixed. The only P0-class issue is unpublished contact channels — **blocked by human input**, not by remaining code that could honestly complete the journey.

```text
COMMIT: NOT AUTHORIZED / NOT PERFORMED
DEPLOYMENT: NOT AUTHORIZED / NOT PERFORMED
```

---

## KILLCRITIC scorecard

```text
Brand differentiation          PASS WITH OBSERVATION
Takeshi identity               PASS WITH OBSERVATION
Generic-solar risk             PASS
AI-generation risk             PASS
Copy quality                   PASS
Copy specificity               PASS
Copy repetition                PASS WITH OBSERVATION
Homeowner comprehension        PASS
Commercial comprehension       PASS
Technical credibility          PASS
Trust                          PASS WITH OBSERVATION
Proof                          BLOCKED BY HUMAN INPUT
Claim integrity                PASS
CTA clarity                    PASS
Contact journey                BLOCKED BY HUMAN INPUT
Mobile intentionality          PASS
Visual hierarchy               PASS
Section justification          PASS
Image integrity                PASS
Colour balance                 PASS
Lime usage                     PASS
Typography                     PASS
Accessibility regression       PASS
SEO regression                 PASS
Performance regression         PASS
Template residue               PASS
Overall customer journey       PASS WITH OBSERVATION
```

---

## Required file change record

```text
MODIFIED:
- takeshi_energy/index.html
- takeshi_energy/assets/css/takeshi.css
- takeshi_energy/assets/js/custom.js

CREATED:
- PHASE-8-KILLCRITIC-AUDIT.md

DELETED:
- (none)

UNCHANGED:
- PHASE-0 through PHASE-7 documents
- Production JPEG/SVG assets
- Bootstrap vendor files
- Unloaded Zenith vendors on disk
- Metadata / JSON-LD

DEPENDENCIES ADDED:
- (none)

DEPENDENCIES REMOVED:
- (none)
```
