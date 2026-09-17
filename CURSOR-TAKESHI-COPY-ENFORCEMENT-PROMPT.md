# CURSOR — TAKESHI COPY ENFORCEMENT

Use this **before** any implementation that touches `takeshi_energy/index.html` or client-visible strings.

---

## 1. Read first

1. `TAKESHI-WEBSITE-COPY-BASELINE-v1.0.md`  
2. `TAKESHI-COPY-LOCK.md`  

If a later baseline version exists (`v1.1`, `v2.0`) and is marked LOCKED, use that version instead of v1.0.

---

## 2. Governing rule

```text
COPY IS NOT IMPLEMENTATION.
```

You may change layout, CSS, images, performance, and technical SEO.

You may **not** change approved copy because:

- a paragraph seems long  
- a heading seems generic  
- SEO “wants” more keywords  
- the design “needs shorter text”  
- you would phrase it more naturally  

---

## 3. Before editing HTML copy

Diff the proposed visible text against the locked baseline.

| Result | Action |
|--------|--------|
| Identical | Proceed |
| Whitespace / HTML structure only | Proceed |
| Wording change | **STOP.** Restore baseline. Report conflict. |
| New sentence | **STOP** unless the user authorized a numbered copy revision (v1.1 / v2.0) |

---

## 4. If the user asks to rewrite copy

Only proceed if they explicitly authorize a **copy revision** (new version number + reason).

Otherwise:

- keep v1.0 text  
- explain that messaging is locked  
- do not “meet them halfway” with a paraphrase  

---

## 5. Claims

Do not strengthen C-01–C-10 in the claim register. Do not add numbers, clients, or certifications. Do not invent contact details.

---

## 6. After implementation

Confirm `index.html` still matches the baseline for every locked heading, lede, service, audience line, CTA, and footer brand line.

If you cannot match because of a genuine technical constraint:

```text
COPY CONFLICT — APPROVED TEXT PRESERVED
```

State the constraint. Do not rewrite the copy to dodge it.
