# PHASE 4 — IMAGE SYSTEM

**Project:** Takeshi Energy website  
**Phase:** 4 — visual research, image strategy, and image selection only. No implementation.  
**Status:** LOCKED  
**Date:** 2026-09-16  
**Depends on:** `PHASE-1-BRAND-UX-STRATEGY.md`, `PHASE-2-ZENITH-TRANSFORMATION-ARCHITECTURE.md`, `PHASE-3-CONTENT-SYSTEM.md`  
**Website files modified:** None  
**Separate licensing file:** Not created. The licensing register is in §O of this document.  
**Addendum:** 2026-09-16 — mandatory human representation + company-profile visual references (attached brand sheets). No implementation.

This document is the **authoritative image-system source** for Phase 5 onward. Implementation must not add, replace, or caption images until this system is followed. Stock and open-license photographs remain **illustrative**. They are not Takeshi project evidence.

**People-focused imagery used on the Takeshi Energy website should represent Black, African, African American, or dark-skinned people. This is a deliberate representation requirement. It must be satisfied alongside—not instead of—authenticity, technical credibility, visual quality, licensing, accessibility and brand fit.**

---

## A. Phase status

| Item | Value |
|------|--------|
| Authorization | Explicit Phase 4 — image research / selection / documentation |
| Phase 1 / 2 / 3 documents altered | **No** |
| Material contradictions found | **None that require rewriting locked phases.** Tensions are documented in §B and in HUMAN REPRESENTATION & BRAND REFERENCE. |
| `index.html` / CSS / JS / existing image assets / dependencies | **Unchanged** |

```text
PHASE 4 — PASS / COMPLETE / VERIFIED / LOCKED
```

---

## B. Authoritative source confirmation

| Source | Role in Phase 4 |
|--------|-----------------|
| Explicit user addendum (this update) | Hard representation rule for people-focused images |
| User-provided Takeshi company-profile visual references | Authoritative **visual direction** (logo language, type names on the sheet, colour pairings, composition). Not production assets. Not automatic project evidence. |
| Phase 1 | Brand character, colour *roles*, proof rules, “images are punctuation,” no fake evidence |
| Phase 2 | Eight-region page; hero as dark field; REMOVE of image strip, portfolio mosaic, galleries, carousels |
| Phase 3 | Content-to-image jobs (§V); captions default omit or “Illustrative”; sourced imagery allowed for v1 |
| Local `takeshi_energy/` assets | Audit only. Template photography is **not** Takeshi evidence |
| Written company profile (copy) | Audiences and services as visual *context*, not as claimed project locations |

**Visual-brand hierarchy (locked for later design phases; not implemented now):**

```text
EXPLICIT USER-PROVIDED BRAND INFORMATION
↓
USER-PROVIDED TAKESHI COMPANY-PROFILE VISUAL REFERENCES
↓
PHASE 1 LOCKED BRAND STRATEGY
↓
PHASE 2 LOCKED ARCHITECTURE
↓
PHASE 4 IMAGE-SYSTEM FINDINGS
```

Zenith is the technical starting point. It is **not** the brand authority.

**Phase 3 image jobs (respected, not overridden):**

| Section | Phase 3 instruction | Phase 4 decision |
|---------|---------------------|------------------|
| Hero | Inverter room, cabling, or working install; illustrative | **Lagos urban fabric as controlled dark-field photography.** A working-install *people* hero is deferred until a photograph passes representation **and** safety. |
| Context | Optional Nigerian/African building or workspace | **Type-only** — the hero already supplies place |
| Solutions | Punctuation only — not seven photos | **One** technical-detail photograph covering electrical integration |
| Method | People working, not posing | **Type-only** until a people photograph passes all gates |
| Who we serve | Prefer none | **None** |
| Process | Optional commissioning still | **None** |
| Accountability / contact | No image | **None** |

**Documented tensions (not rewrites of locked phases):**

1. Phase 3 prefers a hero of “inverter room, cabling, or working install.” Licensed people-focused photographs that also pass representation, PPE/safety, and non-solar-catalogue tests were **not found**. The v1 hero is therefore an African urban environment (power as a lived context), not a technician. Real Takeshi crew/install photography **replaces** that hero in the same slot.
2. Company-profile sheets use lime as a **full lockup ground** (“Black on green”). Phase 1 forbids lime as a website page fill. Smallest later resolution: lime full-ground for marks/signage; website fields stay near-black + paper with lime as signal.
3. Company-profile sheets name **Archivo** and **IBM Plex Mono**. Phase 1 left font *families* to Phase 5 and treated Satoshi/Inter as scaffold. User-provided brand information now sits above Phase 1 for type *selection* in a later phase. Not implemented here.
4. A brand-sheet frame labelled “PROJECT RECORD / rooftop array” is **not** treated as verified Takeshi evidence. Rights and provenance require human confirmation.

---

## C. Image-system principles

1. Images are visual punctuation, not wallpaper.  
2. Hierarchy: **HUMAN → EDITORIAL → EVIDENCE → SPACE**. Do not invert this into equipment repetition.  
3. Smallest coherent set wins. Three photographs is the production set. Seven service photos is a catalogue.  
4. Real Takeshi evidence beats stock. Credible illustrative photography beats fabricated evidence.  
5. A stock image must never be presented as proof that Takeshi performed the depicted work.  
6. Purpose → authenticity → technical credibility → licensing → brand fit → representation (when people are a visual subject) → responsive viability → accessibility. Fail any gate and the image does not ship.  
6b. When Takeshi **deliberately** shows people, those people should be Black, African, African American, or otherwise visibly dark-skinned — **and** look naturally situated, doing credible work. Representation is not a substitute for quality. Incidental/unidentifiable background figures do not trigger this rule.  
7. Do not select an image because it is green. Lime is a UI signal (`#C6F000`), not a photography brief.  
8. No galleries, carousels, lightboxes, or portfolio mosaics. Phase 2 removed that machinery.

---

## D. Visual direction

The photographs should feel like an established technical company: composed, restrained, physically real.

| Compatible | Incompatible |
|------------|----------------|
| Documentary lighting | Glossy advertising HDR |
| People doing a task | Models pointing at panels |
| Property-scale systems | Utility-scale solar farms as identity |
| Dark fields with controlled photography | Neon circuits, energy waves, sci-fi glow |
| Warm off-white space around images | Lime colour-grading of photos |
| African/Nigerian environments when quality holds | Token “Africa” images that fail quality or authenticity |

**Colour relationship:** photographs sit inside **dark structure + lime signal + warm neutral space**. Images should be naturally cooler or neutral; Phase 5 must not dye them lime.

**Narrative the set must support (collectively, not literally):**

```text
POWER MATTERS
→ REAL-WORLD ENVIRONMENTS
→ UNDERSTAND THE REQUIREMENT
→ DESIGN / INTEGRATE THE SYSTEM
→ SUPPORT THE WORK
```

---

## E. Existing asset audit

Inspected: `takeshi_energy/assets/images/` and current `index.html` references.

### E.1 Real Takeshi photography

**None found.** No installation, technician, equipment, project, or company photographs with Takeshi provenance.

### E.2 Logo / brand assets

| Asset | Finding | Status |
|-------|---------|--------|
| `logo-dark.svg`, `logo-light.svg` | Zenith wordmark (paths spell ZENITH), not Takeshi | **DO NOT USE** as Takeshi identity. **PROVENANCE:** template |
| Client logos (Netflix, Apple, IBM, etc.) | Fake social proof | **REJECT** (already REMOVE in Phase 2) |
| `favico.ico` | Template favicon | **CONDITIONAL** — replace when approved mark exists |
| Decor SVGs (`decor-1`, `scribble`, `astronaut`, `quote`, `dots`) | Zenith solar-kit chrome | **REJECT** for Takeshi visual character |

**Human confirmation required for production files:** vector lockups matching the company-profile sheets are not in the website repo. The attached brand sheets are the visual reference. Zenith SVGs remain **DO NOT USE**. Do not implement logo replacement in Phase 4.

### E.3 Template photographs (not Takeshi evidence)

| File | What it is | Verdict |
|------|------------|---------|
| `hero-bg-2-min.jpg` | Staged older male model in yellow hard hat / orange vest, posing beside ground-mount panels under a hard blue sky | **REJECT** — generic solar installer; stock pose; wrong category; wrong geography; **fails representation rule** (people-focused; not Black/African/dark-skinned) |
| `img-1-min.jpg` | Low-angle ground-mount solar farm, grass, cloudy sky | **REJECT** — utility-farm scale; solar wallpaper; false-proof risk |
| `img-2-min.jpg` … `img-13-min.jpg` | Zenith solar/lifestyle stock (referenced in strip, about, portfolio, blog) | **REJECT** as Takeshi imagery. Remove with those sections at implementation |
| `person-sq-1-min.jpg` … `person-sq-6-min.jpg` | Fake team / testimonial faces | **REJECT** — fabricated people |
| `worker-1.png` | Cut-out hard-hat clipboard pose on transparent black | **REJECT** — stock actor; lime vest fights brand lime; not real work; **fails representation rule** |

**License of Zenith images:** bundled with the FreeBootstrap Zenith template. Even if reuse of the *template files* is permitted, they fail purpose, authenticity, category, and proof tests. They must not be restyled into Takeshi evidence.

**Provenance label for all of the above:** template stock — **not** Takeshi.

---

## F. Image-role framework

| Role | Job | Use on this page? | Count |
|------|-----|-------------------|-------|
| 1. Hero | Authority; energy **systems** (not lifestyle solar); support the promise | **Yes — required.** v1 is place, not a person | 1 |
| 2. Service imagery | Help a visitor understand a service, not “look like solar” | **No one-per-service.** One technical still covers electrical integration across several services | 1 (shared with technical) |
| 3. Technical detail | “There is real technical work behind the promise” | **Yes — one** | 1 |
| 4. Property imagery | Kinds of environments for which systems matter | **Carried by the hero** | 0 additional |
| 5. People | Human expertise; work not theatre | **None in v1.** CONDITIONAL until a photograph passes representation + safety + editorial tests | 0 |
| 6. Supporting textures | Breath / material, extremely restrained | **No.** Brand sheets are type-led on dark fields; space is the texture | 0 |

**Minimum set that makes the page significantly better: two photographs.** A people photograph is the next addition **only** if it passes every gate. A fourth image would not.

### Content idea → image role → subject → job

| Content idea | Image role | Subject | Communication job |
|--------------|------------|---------|-------------------|
| Dependable power | Hero | Lagos urban fabric under a dark field | Power matters in a real operating city |
| Real-world property requirements | Hero (same image) | Occupied buildings, river, density | Place is the requirement; copy names the audiences |
| Assessment / design | — | — | Copy already carries this; no extra image |
| Solar generation | — | — | Named as service 2 of 7; a solar-farm photo would hijack identity |
| Inverter / battery | Technical (partial) | Electrical cabinet that includes PV-related protection | Storage/generation sit inside an electrical system |
| Electrical integration | Technical | Same cabinet / neat protection layout | Installation is integration, not hanging panels |
| Backup / continuity | — | — | Copy; do not fake a hospital generator room |
| Technical installation | Technical still | Cabinet interior | Workmanship without a fake crew |
| Maintenance / support | — | — | Copy / process labels until a people photo passes |
| Human expertise | CONDITIONAL people slot | African technician at real work, proper PPE | Deferred — do not fill with unsafe or unrelated people |

---

## G. Hero research and selection

### G.1 Communication brief

Reinforce: **Dependable power, designed around what matters.**  
Show: energy infrastructure at **property** scale, reliability, technical competence, real-world application, controlled energy.  
Leave: useful negative space for eyebrow, H1, two sentences, two CTAs on a **dark** field.

### G.2 Candidates compared

| ID | Candidate | License | Why considered | Why not primary |
|----|-----------|---------|----------------|-----------------|
| H-A | Zenith `hero-bg-2-min.jpg` | Template | Already in place | Generic solar installer; posed; category fail |
| H-B | Pexels — electrician diagnosing an open panel ([34054464](https://www.pexels.com/photo/electrician-diagnosing-electrical-panel-with-multimeter-34054464/)) | Pexels License | Working electrical install | **REJECT** — people-focused; representation not established; stock-pose risk |
| H-C | Pexels — electrician inspecting a circuit panel ([34054475](https://www.pexels.com/photo/electrician-inspecting-a-circuit-panel-indoors-34054475/)) | Pexels License | Same series | **REJECT** — same as H-B |
| H-L | Wikimedia — Nigerian rooftop installer, ManLuk23 ([Solar Pannel Installer.jpg](https://commons.wikimedia.org/wiki/File:Solar_Pannel_Installer.jpg)) | CC BY-SA 4.0 | Nigerian, identifiable Black installer, licensed, high resolution | **REJECT** — sitting on the roof drinking water; slides; lime vest; heavy grade; unsafe; solar-lifestyle; fails technical safety **and** brand-sheet professionalism |
| H-M | Wikimedia — Nigerian installer, Benjamin Blessing ([Solar panel installer.jpg](https://commons.wikimedia.org/wiki/File:Solar_panel_installer.jpg)) | CC BY-SA 4.0 | Nigerian, identifiable Black installer at cabling | **REJECT** — barefoot on panels; fashion cap; sitting on the array; unsafe; solar-only; lime vest vs brand lime |
| H-N | Unsplash+ Black engineer with wind-turbine model ([ARgRP3IE5NQ](https://unsplash.com/photos/engineer-african-american-black-worker-discussing-of-solar-energy-from-wind-turbine-model-and-online-with-laptop-at-construction-site-ARgRP3IE5NQ)) | Unsplash+ | Representation match on paper | **DO NOT USE** — paid license; staged props (turbine model, thumbs-up energy cliché) |
| H-O | AI “Black electrician / Schneider panel” generators | Unclear / AI | Keyword match | **DO NOT USE** — fabricated person; fake evidence |
| H-P | US Navy PD photos (e.g. Tayo Gbadebo, Lagos-born, rewiring ship equipment) | USGov PD | Nigerian identity; real electrical work | **REJECT** — naval ship context; not Takeshi’s world; temporal/uniform dating |
| H-Q | Unsplash Lagos aerial, Vitalis Nwenyi ([CT2BWU7R0O8](https://unsplash.com/photos/a-view-of-a-city-with-a-river-running-through-it-CT2BWU7R0O8)) | Unsplash License | Nigerian urban fabric; people incidental/unidentifiable | **SELECT as v1 hero** — place, not a people portrait |
| H-D | Wikimedia — inverter wall, Dornbirn ([file](https://commons.wikimedia.org/wiki/File:Dornbirn-DC-AC_inverter-Mastervolt-Platinum-Kostal-SunTechnics-01ASD.jpg)) | CC BY-SA 4.0 | Real plant-room equipment; landscape; dark interior | Solar-inverter catalogue; European brands (not Deye/Growatt etc.); phone capture; false-proof plant room |
| H-E | Wikimedia — SolarEdge SE10k ([file](https://commons.wikimedia.org/wiki/File:Solaredge_Inverter_SE10k-01ASD.jpg)) | CC BY-SA 4.0 | Identifiable inverter + battery connectivity | Product portrait; competitor brand; portrait aspect poor as hero |
| H-F | Wikimedia — 2009 hybrid inverter in a house ([file](https://commons.wikimedia.org/wiki/File:Onduleur_hybride_autoconsommation.jpg)) | CC BY-SA 3.0 | Matches “hybrid inverter” literally | Dated 2009 equipment; temporal fragility |
| H-G | Unsplash — LED control panel, Aasing Gwok ([zCbBf-BZK3A](https://unsplash.com/photos/electrical-control-panel-with-various-switches-and-displays-zCbBf-BZK3A)) | Unsplash License | Systems/control aesthetic; dark | Green/purple LED “sci-fi”; competes with lime signal |
| H-H | Unsplash — American Public Power night plant ([TF-DL_2L1JM](https://unsplash.com/photos/bird-eye-view-photography-of-lighted-building-TF-DL_2L1JM)) | Unsplash License | Dark, cinematic, “power as light” | Utility/generation scale; US; generic energy company |
| H-I | Unsplash+ house + wall battery ([JrPikztdP4Y](https://unsplash.com/photos/modern-house-with-solar-panels-and-wall-battery-for-energy-storage-JrPikztdP4Y)) | Unsplash+ | Subject match | **DO NOT USE** — paid license |
| H-J | Pexels — Elite Power Group / Sungrow install ([36085778](https://www.pexels.com/photo/solar-technician-installing-sungrow-inverter-36085778/)) | Pexels License (library) | Documentary install | **DO NOT USE** — third-party installer + competitor brand = false proof / endorsement risk |
| H-K | Tesla Powerwall Commons files | CC0 / CC BY 2.0 | Battery wall | **DO NOT USE** — implies Tesla retail positioning |

### G.3 Hero composition test — selected (H-Q)

| Test | Result |
|------|--------|
| Focal point | Occupied building mass and river |
| Text space | Dark sky / water / left field can take eyebrow + H1 under a `#0B0C0A` scrim |
| Contrast | Overlay required; do not rely on daylight sky |
| Crop | Keep mixed urban fabric; avoid empty water or a single tower as “HQ” |
| Brand fit | Dark, restrained, place-led — closer to the company-profile sheets (type on dark, photography controlled) than a full-bleed worker |
| Category fit | City that needs power — not a solar farm. Solar remains a service, not the picture |
| Credibility | Real Lagos. **Illustrative of environment, not a Takeshi project** |
| Longevity | Urban fabric does not date like inverter UIs |
| Hero kill test | Could appear on other Lagos companies. Distinctiveness is copy + dark treatment + not being a solar installer hero |
| Representation | People are incidental/distant; rule does not reject the photograph |
| Brand-sheet coexistence | Yes, if treated as controlled media, not Zenith 90vh lifestyle |

**Selected hero:** IMAGE-001 (H-Q). Status: **APPROVED**.

A people-focused working-install hero remains **CONDITIONAL** (see HUMAN REPRESENTATION & BRAND REFERENCE). Do not use H-L/H-M as substitutes.

---

## H. Service imagery research and selection

The seven services do **not** each get a photograph.

| Service | Photograph needed? | Reason |
|---------|--------------------|--------|
| Energy Assessment & System Design | No | Intellectual work; a staged “laptop consultation” fails the stock test |
| Solar-Power Solutions | No dedicated solar array | Would re-centre the brand on solar |
| Inverter & Battery Systems | Covered by technical still | Avoid Tesla/Sungrow/SolarEdge product shots |
| Electrical Installation | Covered by hero + technical still | |
| Hybrid & Backup-Power Systems | No | A generator-room or hospital photo would over-claim |
| Estate & Multi-Unit Installations | Covered by hero city fabric | Occupancy at urban scale; not “our estate” |
| Maintenance & After-Sales Support | No people photo in v1 | Copy / process until IMAGE-002 is filled correctly |

**Minimum to communicate the service system: zero dedicated service photos.** The technical still is shared punctuation beside the solutions list, not seven thumbnails.

---

## I. Technical detail research and selection

### I.1 Objective

Show that real electrical work sits behind the promise: distribution, protection, orderly installation.

### I.2 Candidates

| ID | Candidate | License | Verdict |
|----|-----------|---------|---------|
| T-A | Wikimedia `Schaltschrank_hg.jpg` — electrical cabinet with PV, wallbox and sauna fuses. Author: Hannes Grobe. 2313×4580. [Source](https://commons.wikimedia.org/wiki/File:Schaltschrank_hg.jpg) | CC BY-SA 4.0 | **SELECT** — neat, identifiable protection gear; communicates integration. European wallbox/sauna context is a caption/crop issue, not a safety fail |
| T-B | Wikimedia SMA STP 8.0 square product shot. Author: Pedalito. CC0. [Source](https://commons.wikimedia.org/wiki/File:Solar_Wechselrichter_SMA_STP_8.0.jpg) | CC0 | **REJECT** — equipment catalogue; SMA brand |
| T-C | Wikimedia labelled 12V island system. Author: Pedalito. CC0 | CC0 | **REJECT** — DIY garden off-grid; German callouts; amateur scale |
| T-D | Wikimedia distribution-board wiring, Dmitry G, 2012 phone photo | CC BY-SA 3.0 | **REJECT** — quality and “work in progress” risk |
| T-E | Wikimedia 480 V facility switchgear | CC BY-SA 4.0 | **REJECT** — industrial scale mismatch |
| T-F | Cable-lacing Tesla-coil harness | CC BY-SA 2.0 | **REJECT** — wrong domain |

**Selected technical still:** IMAGE-003 (T-A).

**Technical safety screen:** closed cabinet, labelled protective devices, no exposed live-work theatre. Wallbox/sauna labels must **not** be readable as Takeshi specifications. Crop to the orderly interior; do not caption appliances.

---

## J. Property imagery research and selection

Objective: environments for which dependable power matters. **Not** “Takeshi worked here.”

| ID | Candidate | License | Verdict |
|----|-----------|---------|---------|
| P-A | Unsplash — Victoria Island, Lagos, aerial city and river. Vitalis Nwenyi (@vitalis_nwenyi). iPhone 11. [CT2BWU7R0O8](https://unsplash.com/photos/a-view-of-a-city-with-a-river-running-through-it-CT2BWU7R0O8) | Unsplash License | **SELECT** — Nigerian urban occupancy; mixed fabric; quality adequate; not a villa render |
| P-B | Unsplash — busy Victoria Island road. Onaopemipo Oladipupo. [YTEjNZ3FMkY](https://unsplash.com/photos/an-aerial-view-of-a-busy-city-road-YTEjNZ3FMkY) | Unsplash License | Alternate if P-A crop fails; more traffic than property |
| P-C | Unsplash — Ijora tanks + cityscape. Vitalis Nwenyi. [I1VGlHw7OAc](https://unsplash.com/photos/large-industrial-tanks-sit-near-a-cityscape-I1VGlHw7OAc) | Unsplash License | **REJECT** for v1 — reads as oil/gas, not energy systems; false industrial claim |
| P-D | Unsplash — Gqeberha office bay. William Veitch | Unsplash License | **REJECT** — South African waterfront offices; luxury/generic skyline |
| P-E | Unsplash — Shenzhen dusk towers | Unsplash License | **REJECT** — wrong geography and scale |
| P-F | Riga apartment block with green balconies | Unsplash License | **REJECT** — European; geographic tokenism if used “because housing” |
| P-G | Healthcare / fuel-station stock | Various | **REJECT** — “our hospital / our station” inference is too strong |

**Selected property still:** none as a second photograph. IMAGE-001 already is the property image.

Who we serve: still type-only. Do not tile eight audience photographs.

**Authenticity note:** Victoria Island can read affluent. That is acceptable as *one* Nigerian city condition, not as the only customer. Copy (homes, estates, healthcare, fuel, retail) carries the rest. Do not add a mansion or a skyscraper set.

---

## K. People imagery research and selection

| Decision | Detail |
|----------|--------|
| People in v1 production set | **None.** No people-focused photograph passed representation **and** safety **and** editorial tests together |
| Incidental people | Allowed in IMAGE-001 (aerial city) because figures are not the visual message |
| Not used | Team grid, handshakes, smiling customers, clipboard cut-outs, Zenith `worker-1.png`, `person-sq-*`, Pexels 34054464/34054475 |
| Not used | Nigerian Commons installers H-L / H-M (representation pass; **safety fail**) |
| Not used | Navy PD Nigerian electrician (wrong world) |
| Not used | Unsplash+ / AI “Black electrician” |
| Next action | Real Takeshi technician photography is the preferred fill for this role. Do not ship a people hero that fails PPE or looks like generic solar stock |

Searches included African/Nigerian electrician and technician documentary directions, Wiki Loves Africa Nigeria installers, Unsplash/Pexels African electrician queries, and Commons solar-in-Nigeria files. Quality was not sacrificed to force a person into the hero.

---

## L. Supporting texture research and selection

Textures considered and **rejected** as a class:

- Glowing circuits, grids, sparks, energy waves, neon 3D, crypto-tech  
- Abstract AI textures (would compete with evidence and are unnecessary)  
- Metal/cable macros as backgrounds (visual noise; catalogue drift)  
- Zenith scribbles, astronaut, dots  

**Conclusion:** negative space (off-white and near-black) is the texture. No supporting-texture photographs.

---

## M. Image purpose matrix

| Image ID | Section | Role | Subject | Communication job | Source | License | Evidence type | Priority | Status |
|----------|---------|------|---------|-------------------|--------|---------|---------------|----------|--------|
| IMAGE-001 | 01 Hero | Hero / property / space | Lagos urban fabric, Victoria Island | Dependable power as a real operating city; people incidental | Unsplash | Unsplash License | ILLUSTRATIVE | P0 | APPROVED |
| IMAGE-001B | 01 Hero (fallback only) | Hero / technical | Wall of PV inverters, Dornbirn | Only if 001 is unavailable at acquisition | Wikimedia Commons | CC BY-SA 4.0 | ILLUSTRATIVE | P3 | CONDITIONAL |
| IMAGE-002 | — | People (deferred) | — | No people-focused image currently passes all gates | — | — | — | P0 (role) | CONDITIONAL / unfilled |
| IMAGE-003 | 03 Solutions (punctuation) | Technical / service | Interior of a labelled electrical cabinet | Integration and workmanship | Wikimedia Commons | CC BY-SA 4.0 | ILLUSTRATIVE | P1 | APPROVED |
| IMAGE-BRAND-ROOF | 01 or 03 if rights confirmed | Possible evidence | Rooftop array on brand sheet | Only if human confirms Takeshi ownership and license | Company-profile attachment | **LICENSE UNCERTAIN** | TAKESHI EVIDENCE **if confirmed**, else unused | P1 | CONDITIONAL |
| IMAGE-004+ | — | — | Further stock | — | — | — | — | REJECT | REJECTED |

All selected rows: **ILLUSTRATIVE IMAGERY — NOT TAKESHI PROJECT EVIDENCE.**  
**TAKESHI EVIDENCE:** none available.

---

## N. Image manifest

### IMAGE-001

```text
IMAGE-001
ROLE: Hero (property / environment; not a people portrait)
SECTION: 01 Hero
PURPOSE: Ground the promise in a real African city that needs dependable power
SUBJECT: Aerial view of Victoria Island, Lagos — buildings and river
EVIDENCE TYPE: ILLUSTRATIVE — NOT TAKESHI PROJECT EVIDENCE
SOURCE: Unsplash
SOURCE PAGE: https://unsplash.com/photos/a-view-of-a-city-with-a-river-running-through-it-CT2BWU7R0O8
CREATOR: Vitalis Nwenyi (@vitalis_nwenyi)
LICENSE: Unsplash License
COMMERCIAL USE: Yes
ATTRIBUTION: Not required; appreciated. Recommended: “Photo by Vitalis Nwenyi on Unsplash”
MODIFICATION / CROP: Allowed under Unsplash License
DOWNLOAD REQUIREMENT: “Download free” on the photo page — confirm Unsplash License, not Unsplash+
EXPIRATION: Re-verify license badge at acquisition
DESKTOP CROP: Wide field; building mass + enough dark/water for type; stronger scrim than Zenith 30%
MOBILE CROP: Building fabric, not empty water
FOCAL POINT: Occupied urban mass
ORIENTATION: Landscape
PREFERRED ASPECT: ~16:9 field with object-position toward buildings
ALT-TEXT INTENT: Informative, geographic, non-possessive
PRIORITY: P0
STATUS: APPROVED
REASON: African context without token people; no unsafe work; no solar-farm identity; coexists with type-led dark brand sheets
```

**Proposed alt-text intent:** “Aerial view of buildings along a river in Lagos, Nigeria.”  
**Forbidden caption:** anything implying Takeshi designed power for Victoria Island.

**Filename when acquired (do not implement now):** `takeshi-hero-lagos-urban-fabric.jpg`

### IMAGE-002 (people slot — unfilled)

```text
IMAGE-002
ROLE: People (technician / engineer at work)
SECTION: 01 Hero (replacement) or 04 Method (single still) — not both
PURPOSE: Human expertise in Takeshi’s world
SUBJECT: Not selected
EVIDENCE TYPE: Prefer TAKESHI EVIDENCE when real crew photography exists; otherwise ILLUSTRATIVE
STATUS: CONDITIONAL — UNFILLED
PRIORITY: P0 for the *role*, not for a weak substitute
REASON: Every people-focused candidate failed representation, safety, licensing, staging, or context. Do not fill this slot with H-B, H-L, H-M, AI, or Unsplash+.
```

### IMAGE-001B (fallback only — do not use alongside 001)

```text
IMAGE-001B
ROLE: Hero fallback
SECTION: 01 Hero
PURPOSE: Real equipment wall if IMAGE-001 fails the stock/safety screen
SUBJECT: Several wall-mounted PV inverters in an indoor plant room, Dornbirn, Austria
EVIDENCE TYPE: ILLUSTRATIVE — NOT TAKESHI PROJECT EVIDENCE
SOURCE: Wikimedia Commons
SOURCE PAGE: https://commons.wikimedia.org/wiki/File:Dornbirn-DC-AC_inverter-Mastervolt-Platinum-Kostal-SunTechnics-01ASD.jpg
DIRECT ASSET: https://upload.wikimedia.org/wikipedia/commons/8/8a/Dornbirn-DC-AC_inverter-Mastervolt-Platinum-Kostal-SunTechnics-01ASD.jpg
CREATOR: Asurnipal
LICENSE: CC BY-SA 4.0
COMMERCIAL USE: Yes, with attribution and ShareAlike on adaptations of the image
ATTRIBUTION: Required — Asurnipal, CC BY-SA 4.0, link to file and license
MODIFICATION / CROP: Permitted; credit must note modifications
DOWNLOAD REQUIREMENT: Commons original
POTENTIAL ISSUE: Visible Mastervolt / Kostal / other brands; European setting; solar-inverter-only
DESKTOP CROP: Wide; keep a dark wall band for type
MOBILE CROP: Centre on the equipment row
FOCAL POINT: Inverter faces
ALT-TEXT INTENT: “Wall-mounted solar inverters in a plant room (illustrative).”
PRIORITY: P1
STATUS: CONDITIONAL
REASON: License and authenticity are strong; category and brand-conflict are weak. Use only if 001 is unusable.
```

### IMAGE-003

```text
IMAGE-003
ROLE: Technical detail / solutions punctuation
SECTION: 03 Solutions system (one still, not seven cards)
PURPOSE: Show orderly electrical integration
SUBJECT: Interior of an electrical cabinet (PV, wallbox and other circuits visible)
EVIDENCE TYPE: ILLUSTRATIVE — NOT TAKESHI PROJECT EVIDENCE
SOURCE: Wikimedia Commons
SOURCE PAGE: https://commons.wikimedia.org/wiki/File:Schaltschrank_hg.jpg
DIRECT ASSET: Original JPEG linked from that file page (2313 × 4580)
CREATOR: Hannes Grobe
LICENSE: CC BY-SA 4.0
COMMERCIAL USE: Yes, with attribution; ShareAlike applies to adapted image files
ATTRIBUTION: Required — Hannes Grobe, CC BY-SA 4.0, with links. Indicate cropping if cropped
MODIFICATION / CROP: Permitted
DOWNLOAD REQUIREMENT: Commons original, not a blog scrape
POTENTIAL ISSUE: European wallbox/sauna labelling — crop or keep small; never present as a Takeshi schematic
DESKTOP CROP: Portrait or 3:4 contained; do not stretch to a banner
MOBILE CROP: Centre of the device rows
FOCAL POINT: Orderly breakers / labelled rows
ORIENTATION: Portrait source
PREFERRED ASPECT: 3:4 contained beside or below the solutions intro — never a gallery tile
ALT-TEXT INTENT: “Interior of an electrical distribution cabinet with labelled protective devices (illustrative).”
PRIORITY: P1
STATUS: APPROVED
REASON: Technical credibility without a product-hero inverter brand; supports electrical + hybrid meaning
```

**Filename when acquired:** `takeshi-detail-electrical-cabinet.jpg`

---

## O. Licensing register

License labels used: **LICENSE VERIFIED** | **LICENSE REQUIRES ATTRIBUTION** | **LICENSE REQUIRES ACCOUNT** | **LICENSE UNCERTAIN** | **DO NOT USE**

| Asset | Label | Basis | Notes |
|-------|-------|-------|-------|
| Pexels License (library) | LICENSE VERIFIED | Official page https://www.pexels.com/license/ — free commercial use; attribution not required; modification allowed; no standalone resale; no endorsement implication | Research fetch of some Pexels *photo* URLs hit Cloudflare; the license text was confirmed from the official license page and search-indexed photo pages stating “Free to use” |
| IMAGE-001 | LICENSE VERIFIED | Unsplash CT2BWU7R0O8 | Incidental people; not a people portrait |
| Pexels 34054464 / 34054475 | LICENSE VERIFIED | Pexels library | **DO NOT USE** for this site — representation / stock gates |
| Wikimedia Solar_Pannel_Installer.jpg / Solar_panel_installer.jpg | LICENSE VERIFIED + LICENSE REQUIRES ATTRIBUTION | CC BY-SA 4.0 | **DO NOT USE** — unsafe rooftop practice |
| Unsplash License (library) | LICENSE VERIFIED | Photo pages state “Free to use under the Unsplash License”; Unsplash’s public terms: commercial use, attribution not required (API integrations differ — this project will **download**, not use the Unsplash API) | Direct fetch of https://unsplash.com/license returned 401 in this research environment; do not use Unsplash+ |
| IMAGE-003 | LICENSE VERIFIED + LICENSE REQUIRES ATTRIBUTION | File page CC BY-SA 4.0 | Footer or small credit, not a fake case-study caption |
| IMAGE-001B | LICENSE VERIFIED + LICENSE REQUIRES ATTRIBUTION | File page CC BY-SA 4.0 | Same |
| Company-profile rooftop “PROJECT RECORD” | LICENSE UNCERTAIN | Attached brand sheet only | Human must confirm ownership/rights before any use |
| Unsplash+ JrPikztdP4Y, ARgRP3IE5NQ and similar | DO NOT USE | Unsplash+ License | Requires paid Plus |
| Elite Power Group / Sungrow Pexels 36085778 / 36085816 | DO NOT USE | Even if Pexels-licensed, trademark/endorsement and false-proof risk | |
| Tesla Powerwall Commons | DO NOT USE | Brand positioning conflict | |
| Zenith JPGs/PNGs | DO NOT USE for Takeshi identity | Template stock; fails brand tests | Template license ≠ suitability |
| Search-engine / Pinterest / random blogs | DO NOT USE | Ownership unverified | |
| AI-generated “Takeshi installs” | DO NOT USE | Fabricated evidence | |

**Acquisition rule:** download only from the source page listed in the manifest. Do not hotlink Unsplash/Pexels CDNs as a permanent production dependency without a local asset copy (implementation phase).

---

## P. Focal-point / cropping guidance

### IMAGE-001 (hero)

- **Primary focal point:** building mass.  
- **Acceptable crop:** river as secondary; mixed building types.  
- **Unacceptable crop:** empty water; a single glassy tower implying “our HQ.”  
- **Safe text area:** left 35–45% on desktop under a near-black scrim (`#0B0C0A`, stronger than Zenith’s 30% overlay). Prefer type-first composition matching the brand sheets.  
- **Mobile:** object-position toward buildings.  
- **Do not** lime-grade or duotone.

### IMAGE-003 (technical)

- **Primary focal point:** building mass.  
- **Acceptable crop:** river as secondary; mixed building types.  
- **Unacceptable crop:** empty water; a single glassy tower implying “our HQ.”  
- **Safe text area:** left 35–45% on desktop under a near-black scrim (`#0B0C0A`, stronger than Zenith’s 30% overlay). Prefer type-first composition matching the brand sheets.  
- **Mobile:** object-position toward buildings.  
- **Do not** lime-grade or duotone.

### IMAGE-003 (technical)

- **Primary focal point:** aligned protective devices.  
- **Acceptable crop:** interior only.  
- **Unacceptable crop:** floor clutter; readable foreign appliance names as if they were the spec.  
- **Safe text area:** none overlaid — image is contained.  
- **Portrait** source: do not force 16:9.

---

## Q. Responsive viability audit

| Image | Desktop | Tablet | Mobile | Text overlay | Alt possible? |
|-------|---------|--------|--------|--------------|---------------|
| IMAGE-001 | Wide field + scrim; type-first | Building mass remains | Focal lock on buildings | Required; darken | Yes |
| IMAGE-002 | Unfilled people slot | — | — | — | — |
| IMAGE-003 | Contained column | Same | Same, max-height so it does not dominate | No overlay | Yes |
| IMAGE-001B | Usable wide | Equipment row | Centre crop | Possible | Yes |

Zenith `90vh` hero is **not** a requirement (Phase 2). Phase 5 should size the hero for type first, photography second.

---

## R. Accessibility / alt-text intent

| Image | Informative vs decorative | Alt intent | Empty alt? |
|-------|---------------------------|------------|------------|
| IMAGE-001 | Informative (place) | Lagos urban view; no ownership | No |
| IMAGE-002 | Unfilled | — | — |
| IMAGE-003 | Informative (equipment type) | Cabinet interior; credit may live outside alt | No |
| Template leftover photos | N/A — remove | — | — |
| Decor SVGs | Decorative if any survive | Empty alt | Yes — but they should not survive |

Do not keyword-stuff “solar energy Nigeria inverter battery.”

---

## S. Visual consistency audit

| Axis | Assessment |
|------|------------|
| Realism | Two photographs: real city, real cabinet. No people stock |
| Contrast | Hero forced into a dark system matching brand sheets; detail remains natural |
| Editorial quality | Documentary aerial + documentary cabinet |
| Colour temperature | Mixed daylight city / indoor cabinet. Do not grade to lime |
| Restraint | **Two** images. No strip, no mosaic, no people filler |
| Subject spread | Place → technical system |

Coherent, not monotonous. Forcing identical colour grade would be a Phase 5 error.

---

## T. Evidence vs illustrative imagery audit

| Image | Visitor risk of “this is their job” | Mitigation |
|-------|-------------------------------------|------------|
| IMAGE-001 | Medium-low (place) | No “Lagos project”; copy speaks generally about properties |
| IMAGE-002 | N/A unfilled | — |
| IMAGE-003 | Medium (real cabinet) | Contained still; CC credit is legal, not a case study |
| IMAGE-001B | High | Fallback only; visible third-party inverter brands |
| Brand-sheet rooftop | High if labelled “our project” | Do not use until provenance/rights confirmed |

**Captions:** default **none** on 001. For 003, a **credit line** (legal) is not a marketing caption. Never: “One of our successful installations.”

---

## U. Human inputs required

### Blocking for locking this image system

**None.** Phase 3 already allowed sourced illustrative imagery for v1.

### Blocking before a **public launch** of the live site (later phases — recorded here)

| Item | Why |
|------|-----|
| Approved Takeshi logo (vector) | Brand sheets show the mark; repo still has Zenith SVGs |
| Contact facts | Unrelated to imagery; still missing from Phase 3 |
| People photography that passes all gates | Required before any people-focused image ships |
| Provenance/rights of brand-sheet rooftop | Before treating it as TAKESHI EVIDENCE |

### Non-blocking (strengthen later; do not fabricate now)

| Item | Where it would go |
|------|-------------------|
| Real Takeshi installation photographs | Replace IMAGE-001 and/or IMAGE-003 **in the same slots** |
| Real technician photographs | Fill IMAGE-002; may replace IMAGE-001 as hero if composition allows; still not a team grid |
| Real property / project photos with permission | Hero or solutions punctuation; **no new portfolio section** unless separately authorized |
| Commissioned documentary set | Same roles, higher authenticity |

---

## V. Phase 5 visual-design dependencies

Phase 5 may design treatments. It may **not** implement files into `index.html`.

| Topic | Instruction |
|-------|-------------|
| Hero | Dark field `#0B0C0A`; photography as controlled media, not Zenith light overlay-on-stock; overlay stronger than 30% if needed for WCAG of white type |
| Hero aspect | Type-first; do not require 90vh |
| Lime | CTA and lockup language from brand sheets; **not** a photo filter; **not** a full page fill |
| IMAGE-001 | Controlled dark-field photography; type-first like the brand sheets; object-position in §P |
| IMAGE-002 | Do not invent a people photo to fill the context split |
| IMAGE-003 | Single contained still near solutions intro — **not** seven cards |
| Sequence | 001 → copy → 003 |
| Type (later phase) | Brand sheets name Archivo + IBM Plex Mono — document only; do not implement in Phase 4 |
| Logo (later phase) | Geometric charged-cell lockups from brand sheets; not Zenith |
| Credits | Unsplash optional for 001; Commons **required** for 003 (and 001B). Footer credits. No gallery |
| Out of scope | Carousel, lightbox, masonry, portfolio, new nav item, video, typography/colour/logo implementation |
| Conditional evidence | If real project photos arrive, substitute; do not expand IA |

---

## W. KILLCRITIC findings

| Attack | Finding | Action taken |
|--------|---------|--------------|
| 1 Generic solar website | Zenith hero and `img-1` would fail immediately | Rejected all template solar farms / posing installers |
| 2 Equipment catalogue | Inverter product shots and Tesla walls were attractive and wrong | Rejected; only one cabinet still remains |
| 3 Stock obviousness | People stock was the residual risk | Removed people from v1 set |
| 4 Technical error | Nigerian installer photos showed barefoot/slides on live arrays | Rejected despite representation pass |
| 5 False proof | Sungrow/Elite Power, Tesla, SolarEdge, brand-sheet “PROJECT RECORD” until confirmed | DO NOT USE / CONDITIONAL |
| 6 Visual noise | Template uses 15+ photos | Production set is **two** |
| 7 Image without purpose | Service-per-photo, textures, who-we-serve tiles, filler people | Removed |
| 8 Brand disconnect | Brand sheets are type-led, dark, geometric | Hero is place under dark type, not a posing installer |
| 9 Mobile failure | Portrait cabinet is a banner failure | 003 stays contained; 001 focal lock on buildings |
| 10 Licensing | Unsplash+ and unverified scrapes | Excluded; Commons attributed |
| 11 Geographic tokenism | Rejected poor “Africa” substitutes **and** unsafe Nigerian installer shots used only for demographics | Quality over checkbox |
| 12 AI artifacts | AI “Black electrician” generators | Rejected |
| 13 Temporal fragility | 2009 hybrid inverter rejected | |
| 14 Visual story | City + cabinet; people deferred rather than faked | 001 + 003 |
| 15 Human representation | People-focused hero failed the addendum | No people-focused image in the required set |

No remaining attack required adding images. Several required **removing** candidates.

---

## X. Final recommended image set

### REQUIRED (source before implementation)

1. **IMAGE-001** — hero / property — Unsplash CT2BWU7R0O8  
2. **IMAGE-003** — solutions punctuation / technical — Commons `Schaltschrank_hg.jpg`  

### CONDITIONAL

- **IMAGE-002 people slot** — real Takeshi technicians, or a licensed photograph that passes representation + safety + editorial tests  
- **IMAGE-BRAND-ROOF** — only if the company-profile rooftop is confirmed as Takeshi-owned with usage rights  
- **IMAGE-001B** — only if 001 is unavailable at acquisition  
- Approved logo vectors — later phase  

### OPTIONAL

- Unsplash YTEjNZ3FMkY as a crop alternate for 001  
- Nothing else  

### REJECTED (do not use)

- All Zenith JPGs/PNGs/person squares/worker cut-out/client logos/decor kit  
- Pexels 34054464 / 34054475 (people-focused; representation not established)  
- Wikimedia Nigerian installers (barefoot / slides / sitting on panels)  
- Unsplash+ battery-house, vector art, staged “Black engineer + turbine model”  
- Elite Power Group / Sungrow documentary stills  
- Tesla Powerwall; SolarEdge / SMA product portraits as identity  
- US Navy PD electrician photos  
- AI-generated people or installs  
- Utility pylons, sunset wires, Shenzhen/Gqeberha skylines  
- 2009 hybrid-inverter snapshot  
- LED sci-fi control-panel (zCbBf-BZK3A)  
- Ijora tank farm as “energy systems”  
- Healthcare/fuel-station hero shots  
- One image per service; galleries; textures  

### Why this is the smallest coherent set

| Image | Why it exists | What it communicates | Where | Why alternatives lost | Evidence | License | Phase 5 constraint |
|-------|---------------|----------------------|-------|----------------------|----------|---------|--------------------|
| 001 | Authority without a fake crew or solar farm | Real African city that needs power | Hero | People candidates failed representation or safety | Illustrative | Unsplash | Dark scrim; type-first; no project caption |
| 003 | Solutions must not become seven sun icons | Orderly electrical integration | Solutions | Product shots become a catalogue | Illustrative | CC BY-SA 4.0 | Credit; contained portrait |

---

---

## HUMAN REPRESENTATION & BRAND REFERENCE

Required by the 2026-09-16 Phase 4 addendum. Does not authorize implementation.

### A. Representation requirement

People-focused imagery used on the Takeshi Energy website should represent Black, African, African American, or dark-skinned people. This is a deliberate representation requirement. It must be satisfied alongside—not instead of—authenticity, technical credibility, visual quality, licensing, accessibility and brand fit.

When people are tiny, distant, or unidentifiable in an infrastructure photograph, this rule does not reject the photograph. When people are the visual message, it does.

### B. How the requirement affected image research

- Queries were expanded to African/Nigerian electrician and technician documentary sources, Wiki Loves Africa Nigeria, and Commons solar-in-Nigeria files.  
- Zenith worker/hero and unverified Pexels panel electricians were rejected as people-focused images.  
- Nigerian rooftop installer photographs **passed representation** and **failed** PPE/safety and professionalism. They were not selected.  
- Unsplash+ and AI images that matched demographics on paper were rejected.  
- The production set therefore contains **no people-focused photograph**. IMAGE-001 is a city; people in it are incidental.

### C. People-focused candidates considered

| Candidate | Representation | Other gates | Result |
|-----------|----------------|-------------|--------|
| Zenith `hero-bg-2-min.jpg` / `worker-1.png` / person squares | Fail | Stock, solar, fake team | REJECT |
| Pexels 34054464 / 34054475 | Not established | Stock-pose risk | REJECT |
| Commons `Solar Pannel Installer.jpg` (ManLuk23, Nigeria, 2024) | Pass | Unsafe (slides, sitting, drinking); heavy grade; lime vest | REJECT |
| Commons `Solar panel installer.jpg` (Benjamin Blessing, Nigeria, 2024) | Pass | Unsafe (barefoot on panels); fashion cap | REJECT |
| Unsplash+ ARgRP3IE5NQ | Likely pass | Paid license; staged turbine-model cliché | DO NOT USE |
| AI “Black electrician / Schneider panel” | Fabricated | AI evidence | DO NOT USE |
| US Navy PD Tayo Gbadebo / related | Pass (Nigerian-born sailor) | Wrong world (warship) | REJECT |
| Real Takeshi crew photography | Expected pass if authentic | Not in repo | CONDITIONAL |

### D. Selected people imagery

**None.** The people role is IMAGE-002: CONDITIONAL / unfilled.

### E. Rejected people imagery and reasons

See table in C. The governing failures were: representation (Zenith/Pexels), safety (Nigerian Commons installers), licensing (Unsplash+), fabrication (AI), or context (Navy). Representation was never used as a reason to keep an unsafe or staged photograph.

### F. How the supplied Takeshi company-profile images informed visual evaluation

Ten attached brand/company-profile sheets were inspected as **REFERENCE MATERIAL FOR VISUAL DIRECTION**, not as production assets.

Observable personality: dark-field, type-led, geometric, restrained, technical rather than lifestyle, high contrast, spacious, formal but direct. Photography appears as a **contained record** (rooftop array in a labelled frame), not as wallpaper. Geometric marks (nested square / charge bars) carry identity more than photos.

That evaluation **supported** rejecting full-bleed posing installers and lime-vest rooftop snapshots, and **supported** a type-first dark hero with a controlled city photograph.

The rooftop frame labelled “PROJECT RECORD” was **not** accepted as verified Takeshi project evidence. Rights and provenance: **PROVENANCE REQUIRES HUMAN CONFIRMATION**.

Logo lockups on the sheets (charged cell: square in square; stacked wordmark; short-form disc) are the visual reference for a later logo phase. They were not inserted into the website.

### G. Font observations

The typography sheet **names** the families. This is not a letterform guess.

```text
IDENTIFIED — CONFIDENCE: HIGH
Display and text: Archivo (weights shown 400 / 500 / 700 / 900; headlines at 900, tight tracking; body at 400)
Technical labels: IBM Plex Mono (uppercase, 0.1em tracking)
```

Also visible on that sheet: H1 900 / −3.5% tracking; H2 700 / −2%; body 400 / 1.6 line-height; sample headline “Energy security, engineered” (Phase 3 copy remains the website authority). Numeric treatment is tabular and confident.

Zenith scaffold (Satoshi + Inter) is **not** the brand authority. Font implementation is **out of scope** for Phase 4.

If production files later differ from these sheets:

```text
APPROXIMATION — HUMAN CONFIRMATION REQUIRED
```

does not apply to the names printed on the supplied sheet.

Exact font files, licensing of Archivo/Plex, and variable-font vs static cuts: **NOT RELIABLY DETERMINABLE FROM PROVIDED REFERENCE.**

### H. Colour observations

The colour sheet confirms the Phase 1 palette:

| Sheet name | Hex on sheet | Phase 1 |
|------------|--------------|---------|
| Lemon Green — Primary | `#C6F000` (oklch printed on sheet) | `#C6F000` |
| Carbon Black — Secondary | `#0B0C0A` | `#0B0C0A` |
| Paper | `#F4F5EF` | `#F4F5EF` |
| Graphite — Support | `#3A3E36` | `#3A3E36` |

Approved pairings shown: **Black on green**, **Green on black**, **Black on paper**. Green is used at full strength on black **or as a full ground with black type** — never as pale tinted text.

Additional olive/chartreuse **charge bars** appear as graphic language, not as extra core brand colours. Do not promote them into the website palette.

**Contradiction for later review (do not rewrite Phase 1 now):** Phase 1 forbids lime as a page fill. The sheets use lime as a lockup/signage ground. Smallest resolution: full lime ground for marks and short signage; website page fields stay near-black and paper.

Exact printed oklch numbers vs CSS tokens: treat hex as the lock. Screen photography of the sheet is not a spectrophotometer.

### I. General branding observations

| Axis | Observed on sheets |
|------|-------------------|
| Restrained vs expressive | Restrained; lime used as a hard signal |
| Technical vs lifestyle | Technical, specification-led labels |
| Dark vs light | Dark-dominant; paper for documents |
| Photographic vs graphic | Graphic/type first; photography secondary and framed |
| Geometric vs organic | Geometric primitives (square, bars, disc) |
| Formal vs approachable | Formal, direct, not playful |
| Dense vs spacious | Spacious sections; tight tracking on display type |
| Corporate vs editorial | Editorial technical company, not lifestyle brand |

Selected photography must coexist with this: documentary, not glossy; no neon-tech; no generic solar advert. IMAGE-001 (city under dark type) and IMAGE-003 (contained cabinet) pass that test better than a posing installer.

Copy on the sheets that Phase 3 already excluded (e.g. “trusted African energy-services company” as a status claim; “Energy security, engineered” as H1) is **not** revived here.

### J. Uncertainties requiring human confirmation

| Item | Label |
|------|--------|
| Whether the brand-sheet rooftop photograph is a Takeshi project and may be used | PROVENANCE REQUIRES HUMAN CONFIRMATION / LICENSE UNCERTAIN |
| Vector logo files matching the sheets | Not in the website repo |
| Archivo / IBM Plex Mono license for web embedding | NOT RELIABLY DETERMINABLE FROM PROVIDED REFERENCE |
| Whether lime full-ground lockups should ever appear as large web panels | Human review vs Phase 1 lime constraint |
| A people photograph that passes every gate | CONDITIONAL — do not invent one |

---

## Y. Phase 5 readiness

### Final image-system tests

| Test | Result |
|------|--------|
| 1 Brand | Dark, type-capable, not a solar landing page; aligned with attached brand sheets |
| 2 Category | Place + electrical cabinet; solar is not the visual identity |
| 3 Technical | Cabinet is plausible; no unsafe people work shown |
| 4 Human | No deliberate people image until one passes all gates; city is the human context |
| 5 Purpose | Each of the two has a job |
| 6 Proof | Illustrative; brand-sheet rooftop not treated as evidence |
| 7 Licensing | Documented; Commons attributed; Unsplash+ excluded |
| 8 Mobile | Crops specified |
| 9 Accessibility | Alt intents specified |
| 10 Restraint | Filling the people slot with a weak photo would worsen the page |

### Website file integrity

Documentation only. No change to `index.html`, CSS, JavaScript, existing images, dependencies, or configuration.

### Next-phase gate

```text
PHASE 5 READINESS: READY
```

Phase 5 is **visual design documentation only** when separately authorized. It is not automatically started.

Do **not** download production files into `assets/images/` until an implementation phase is explicitly authorized.

---

## Appendix — research notes (non-authoritative)

- Unsplash license HTML could not be fetched (HTTP 401) in this environment; photo pages and Unsplash’s published license explanation were used.  
- Some Pexels photo URLs were Cloudflare-challenged; official `/license/` terms plus indexed photo pages were used.  
- Queries used included African/Nigerian electrician and technician documentary searches, Wiki Loves Africa Nigeria installer files, Lagos urban photography, electrical cabinet Commons files, and brand-sheet inspection — not “solar panel image” as the primary brief.
