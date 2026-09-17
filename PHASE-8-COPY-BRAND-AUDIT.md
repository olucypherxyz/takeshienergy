# PHASE 8 — COPY + BRAND VOICE AUDIT

**Project:** Takeshi Energy website  
**Scope:** Client-facing copy review and targeted corrections  
**Date:** 2026-09-16  
**Does not open:** Phases 0–5, 7, 8 locks  
**Commit / deploy:** Not performed  

---

## 1. Executive finding

Most of the page already sounds like an engineer talking to a smart customer. The remaining failures were **project notes on the public page**, not weak positioning.

Removed from the customer experience:

- audience disclaimer written for the content system
- “not published yet” contact-status copy
- process footnote that restated the five stages
- footer language that mixed brand, license, and evidence-management in one block

Hero, services, method, accountability, and CTAs were largely left alone.

---

## 2. Brand voice assessment

The locked promise, load-first idea, and accountability statement still carry the identity.

Voice after this pass: clear, calm, technical, human, direct. No solar-lifestyle slogans. No consultancy padding.

---

## 3. Client-facing language assessment

**Before:** a first-time visitor could still hear the project (“illustrative”, “not published yet”, “listing an environment”).  
**After:** the page speaks to the property and the work. Disclosures that a visitor *needs* (hero/cabinet are not Takeshi jobs) remain, in plainer words.

---

## 4. Internal/project-note findings

| Copy | Verdict |
|------|---------|
| Listing an environment… named completed project | Removed from page |
| Phone, WhatsApp, email and address are not published yet… | Removed from page |
| Where useful, assessment is followed by… | Removed (redundant) |
| You always know what happens next / public sequence | Already gone; remaining process lede rewritten |
| Illustrative photograph. Not a Takeshi project. | Kept as disclosure; wording softened |
| Cabinet “Illustrative.” as lead word | Attribution first; disclosure retained |
| HTML comment (Zenith / license URL) | Kept — not client-visible |
| FreeBootstrap visible credit | Retained — legally required on the free license |

Human-input gaps stay in this document, not on the brand surface.

---

## 5. Homeowner test

| Question | Result |
|----------|--------|
| What does Takeshi do? | Hero answers |
| Can they determine the system? | Assessment + “what has to stay on” |
| Beyond panels? | Inverter, battery, backup, electrical |
| Electrical side? | Service 04 |
| After-sales? | Service 07 + process Support |
| What to send? | Contact lede: property type, essential loads, backup duration |

---

## 6. Commercial test

Assessment, design, electrical integration, install, test/commission, support remain visible. Estates and facilities stay in the audience index without implying named jobs.

---

## 7. Technical credibility test

Service bodies and method steps unchanged in substance. “Load” is now glossed once in the hero. “Certified products” was dropped to avoid a dealer/installer implication; brand names remain as experience.

---

## 8. Generic/AI-copy test

No banned marketing adjectives found. Removed the most specification-like leftover sentences. Remaining copy is specific enough that a generic solar prompt would not produce it.

---

## 9. Claim-integrity review

No new numbers, clients, certifications, partnerships, or guarantees. Warranty language remains “as agreed” in Support. Equipment brands remain experience, not authority.

---

## 10. CTA review

Unchanged: **Discuss your energy needs** / **Explore our solutions** / **Tell us what the property needs to do.** Consultative, not quote-now.

---

## 11. Contact-copy review

Public copy now only explains *what to bring to the conversation*. No project-status sentence.

**Launch blocker (documentation only):** verified phone, WhatsApp, email, and domain are still missing. The CTA still points to `#contact`. There is still no send path.

---

## 12. Footer review

Structure now:

1. Takeshi mark + promise  
2. Navigation  
3. © 2026 Takeshi Energy  
4. Powered by 69resources.com  
5. Required FreeBootstrap/Zenith credit (smaller)  
6. Photo credits (smaller; no “illustrative” project language)

---

## 13. Template attribution/license finding

Fetched `https://freebootstrap.net/license` (2026-09-16):

> Free templates require attribution to FreeBootstrap.net. This means you must include a **visible link or credit** to our website on any site where you use the free template. Unless you buy the license.

**Decision: RETAINED.** Visible links to the Zenith template page and FreeBootstrap.net remain, visually subordinate to Takeshi.

No paid-license evidence exists in the project.

---

## 14. 69resources.com footer implementation

Exact customer-facing line: **Powered by 69resources.com**  
Linked to `https://69resources.com` because that domain was supplied in this authorization. Not treated as Takeshi identity.

---

## 15. Changes made

- Hero: gloss “load”; quieter photograph credit  
- Context: “continuity” → “stay running”  
- Products: grammar + “suitable products” instead of “certified products”  
- Mid-CTA heading: “If you already know what you need…”  
- Who we serve: removed internal disclaimer  
- Process lede: “If we work together, this is the path…”  
- Process footnote: removed  
- Cabinet caption: attribution first  
- Contact: removed unpublished-channel note  
- Footer: 69resources + quieter required credits  

---

## 16. Copy intentionally left unchanged

```text
PASS — NO CHANGE
```

- H1 / public promise  
- Nav labels and section order  
- Seven service names and bodies  
- Method heading and six steps  
- Accountability statement  
- Audience labels and one-line descriptions  
- Primary/secondary CTA labels  
- Contact heading and supporting paragraph (except removed pending note)  
- “A brand name is not a substitute for correct design.”  
- “We start with the load, not the equipment.”  
- Image assets and alt-text honesty (hero/cabinet still not described as Takeshi work)

---

## 17. Remaining human-input dependencies

- Verified phone, WhatsApp, email  
- Production domain  
- Official logo master  
- OG image  
- Project evidence / testimonials (optional, not invented)  
- Paid FreeBootstrap license *if* attribution is later to be removed  

---

## 18. Final QA

| Check | Result |
|-------|--------|
| Spelling / grammar | Pass |
| Tone | Client-facing; no project-status sentences on page |
| Headings / anchors | Unchanged structure |
| Metadata / JSON-LD | Unchanged |
| Image honesty | Hero + cabinet still not claimed as Takeshi work |
| Footer mobile | Stacked credits, smaller than brand block |
| License | Visible FreeBootstrap links retained |
| Accessibility | Disclosures remain in text; pending list removed from read order |
| Performance | Copy/CSS only |

---

## 19. Phase status

Targeted refinement under locked Phase 8. **No new phase opened.**

```text
COPY / BRAND REVIEW:
PASS

CLIENT-FACING LANGUAGE:
PASS

HOMEOWNER TEST:
PASS

COMMERCIAL TEST:
PASS

TECHNICAL CREDIBILITY:
PASS

CLAIM INTEGRITY:
PASS

FOOTER:
PASS

ZENITH ATTRIBUTION:
RETAINED — free-template license requires a visible FreeBootstrap credit unless a paid license is purchased

POWERED BY:
69resources.com — ADDED

INTERNAL NOTES EXPOSED TO CLIENT:
NONE

FILES CHANGED:
- takeshi_energy/index.html
- takeshi_energy/assets/css/takeshi.css
- PHASE-8-COPY-BRAND-AUDIT.md

COMMIT:
NOT AUTHORIZED / NOT PERFORMED

DEPLOYMENT:
NOT AUTHORIZED / NOT PERFORMED
```
