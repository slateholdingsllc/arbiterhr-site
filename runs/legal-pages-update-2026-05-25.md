# Legal pages + footer + marketing copy update — 2026-05-25 (executed 2026-05-27)

**Branch:** `legal/pages-and-footer-2026-05-25`
**Repo:** slateholdingsllc/arbiterhr-site
**Operator:** Slate Holdings LLC, Arbiter HR product
**Status:** Local commits complete on feature branch. Awaiting operator push + PR + merge.

---

## A. Pre-flight summary

**Inherited state from prior agents:**
- Branch `legal/pages-and-footer-2026-05-25` existed on remote with **one commit beyond `700a755`** (the brief stated zero commits — actual state was one):
  - `891b770` — *"chunk 1 (1/4): re-render terms.html from arbiter-terms.md"* (294-line full re-render, includes updated effective date 2026-05-27, Slate Holdings attribution, OG + JSON-LD schema, 5-link footer)
- terms.html therefore did not need re-rendering — verified inherited render matches arbiter-terms.md verbatim and contains all required SEO + footer scaffolding.

**Repo verified:**
- Remote `origin/main` had advanced 2 commits past `700a755` since the brief was written (`491ca76` portal-content-archive.md, `62f1a8b` upl-safe-harbor-analysis.md). These are root-level markdown docs, no conflict with site files. Branch was NOT rebased — operator handles merge sequencing at push time per instruction.

**Site stack confirmed:**
- Plain static HTML, no build tool
- Files served at clean paths via Vercel rewrites
- Theme: Navy `#1B2E4B`, amber `#F59E0B`, DM Serif Display + DM Sans
- Existing `terms.html` SHA on remote pre-Chunk-1: `5ba2e8c71c265cba6deb939a8a303ea9e1641460`

---

## B. Four legal pages

| Page | Route | Source | Render approach | Status |
|---|---|---|---|---|
| Terms of Service | `/terms` | arbiter-terms.md | Full re-render from markdown, terms.html template | Inherited at `891b770` |
| Privacy Policy | `/privacy` | arbiter-privacy.md | Overwrote pre-Slate-attribution version with fresh render | New at `1a96e92` |
| Refund Policy | `/refund-policy` | arbiter-refund-policy.md | New page | New at `1a96e92` |
| Content Disclaimer | `/disclaimer` | arbiter-content-disclaimer.md | New page | New at `1a96e92` |

**Per-page scaffolding (all four pages):**
- `<title>` format: `[Document Name] · Arbiter HR`
- Meta description: first sentence of document
- Canonical: `https://www.arbiterhr.com/{slug}`
- OG tags: og:title, og:description, og:url, og:type=article, og:image, og:site_name, og:locale
- Twitter card: summary_large_image, with title/description/image
- JSON-LD Article schema with datePublished/dateModified=2026-05-27, author=Slate Holdings LLC
- Anchor IDs on all `##` headings for deep-linking (e.g. `#informal-resolution-first`, `#california-residents`)
- Hero section displays effective date prominently
- 5-link footer: arbiterhr.com / Terms / Privacy / Refunds / Disclaimer
- Footer bottom-line: "© 2026 Slate Holdings LLC, operator of Arbiter HR · For informational purposes only — not legal advice. See our Content Disclaimer for full details."
- Mobile responsive (nav collapses, single-column hero/content at 900px breakpoint)
- 760px max-width prose column, 38px DM Serif Display h1, 22px h2, 15px body @ 1.75 line-height

**Content fidelity:** All four pages render markdown source verbatim. No content modifications.

---

## C. Footer restructure (homepage `index.html` only)

**Before — CSS grid 3-column with About+Contact stacked:**

```html
<div class="foot-grid">  <!-- grid-template-columns: 2fr 1fr 1.3fr -->
  <div class="foot-col">Compliance References (9 workbook links)</div>
  <div class="foot-col">
    About: Methodology (#about), Disclaimer (#faq)
    Contact: hello@arbiterhr.com  (stacked below About)
  </div>
  <div class="foot-col">Stay Updated (Kit form 9372890 email signup)</div>
</div>
<div class="foot-bottom">
  © 2026 Arbiter HR · arbiterhr.com
  For informational purposes only — not legal advice.
</div>
```

**After — CSS grid 5-column, Stay Updated preserved:**

```html
<div class="foot-grid">  <!-- grid-template-columns: 2fr 1fr 1fr 1fr 1.3fr -->
  <div class="foot-col">Compliance References (9 workbook links, unchanged)</div>
  <div class="foot-col">About: Methodology (#about), Disclaimer (/disclaimer)</div>
  <div class="foot-col">Legal: Terms (/terms), Privacy (/privacy), Refunds (/refund-policy)</div>
  <div class="foot-col">Contact: hello@arbiterhr.com</div>
  <div class="foot-col">Stay Updated (Kit form 9372890 — unchanged)</div>
</div>
<div class="foot-bottom">
  © 2026 Slate Holdings LLC, operator of Arbiter HR
  For informational purposes only — not legal advice. See our Content Disclaimer for full details.
</div>
```

**Specific changes:**
- `.foot-grid` `grid-template-columns` `2fr 1fr 1.3fr` → `2fr 1fr 1fr 1fr 1.3fr`; gap `64px` → `48px`
- About column: Methodology link `#about` (unchanged); Disclaimer link `#faq` → `/disclaimer`
- New Legal column inserted between About and Contact
- Contact split into own column (was stacked under About)
- Bottom-line attribution: copyright bold to "Slate Holdings LLC", with disclaimer line now linking to `/disclaimer`
- Mobile breakpoint (`@media(max-width:900px) .foot-grid{grid-template-columns:1fr}`) already collapses to single column — no change needed

**Brief deviation flagged:** Brief described current footer as 3 logical columns (References | About | Contact) and asked for 4-column restructure (+ Legal). Actual current footer has a 4th element — the Stay Updated Kit email signup form — that the brief did not mention. Form preserved (would be a content/functional removal otherwise). See Section F.

---

## D. Marketing copy revisions (homepage `index.html` only)

### Revision 1 — Authorship section (#about)

**Paragraph 1:**

- Before: *"Arbiter HR workbooks are built by a team that has spent decades inside HR and payroll departments — the kind of work where one missed final-pay deadline costs more than a salary, and where every state has its own opinion about everything."*
- After: *"Arbiter HR workbooks are built on more than 20 years of in-the-trenches HR and payroll experience — the kind of work where one missed final-pay deadline costs more than a salary, and where every state has its own opinion about everything."*

**Paragraph 2:**

- Before: *"Each cell is reviewed and cited. Each edition is refreshed monthly against the original source — DOL guidance, state labor departments, IRS publications. **No SaaS team. No legal disclaimers stretched into a feature. Just the answer, with a citation, in a spreadsheet you can open offline.**"*
- After: *"Each cell is reviewed and cited. Each edition is refreshed monthly against the original source — DOL guidance, state labor departments, IRS publications. Just the answer, with a citation, in a spreadsheet you can open offline."*
- Notes: removed *"No SaaS team. No legal disclaimers stretched into a feature."* sentence; removed `<b>` wrap around remaining sentence so it matches surrounding prose weight.

**Stats block:**

| Stat | Before | After |
|---|---|---|
| 20+ | YEARS COMBINED | YEARS EXPERIENCE |
| 50 | STATES, ALL OF THEM | STATES, ALL OF THEM (unchanged) |
| 12× | EDITIONS PER YEAR | EDITIONS PER YEAR (unchanged) |

### Revision 2 — FAQ "Is this legal advice?"

- Before: *"No. Arbiter HR products are reference materials — citations, summaries, and decision support for HR and payroll professionals. They're not a substitute for legal counsel on specific situations. Every workbook says this on tab 1."*
- After: *"No. Arbiter HR products are reference materials — citations, summaries, and decision support for HR and payroll professionals. They're not a substitute for legal counsel on specific situations. Every workbook says this on tab 1, and our full [Content Disclaimer](/disclaimer) is at arbiterhr.com/disclaimer."*

### Revision 3 — FAQ "What's the difference between the workbooks and the future portal?"

- Before: *"Workbooks are one-time purchases — they live in Excel and Google Sheets, work offline, and refresh monthly via email. A live portal is on the roadmap for later: daily-refreshed data scoped to your states and headcount, with a chatbot trained on the modules you own. The workbooks are the snapshot you can hold. The portal will be the live feed."*
- After: *"Workbooks are one-time purchases — they live in Excel and Google Sheets, work offline, and refresh monthly via email. A subscription portal is on the roadmap for later: dashboard access to compliance content scoped to your states, with interactive tools to help with research workflows. The workbooks are the snapshot you can hold. The portal will be the live working surface. Join our updates list below to hear when the portal opens."*
- Notes: closing sentence reworded from the original brief draft ("Join the waitlist below for portal updates") after operator review — see Section F. "Updates list" is generic and accurately matches the existing Compliance Calendar / monthly updates signup the footer routes to.

---

## E. SEO + accessibility pass

**Sitemap (`sitemap.xml`):**
- Added: `/refund-policy` (lastmod 2026-05-27, priority 0.3)
- Added: `/disclaimer` (lastmod 2026-05-27, priority 0.3)
- Updated: `/privacy` lastmod 2026-05-17 → 2026-05-27 (page was rewritten this chunk)
- Updated: `/terms` lastmod 2026-05-17 → 2026-05-27 (page was re-rendered in inherited commit `891b770`)
- Format matches existing pattern: single-line `<url><loc>...</loc><lastmod>...</lastmod><priority>0.3</priority></url>`
- All four legal pages now indexable

**Meta tags on new pages:**
- Canonical, OG, Twitter, JSON-LD Article schema all present on /terms, /privacy, /refund-policy, /disclaimer
- All pages declare `og:image` pointing at `/og-image.png`
- Each anchor heading carries a stable kebab-case ID for deep links from legal correspondence

**Accessibility:**
- Mobile nav uses `aria-label="Menu"` on toggle button, ARIA-controlled (`#nav-links` toggle pattern)
- Hero uses semantic `<h1>` with effective-date `<p>` directly below
- Color contrast: navy `#1B2E4B` body text on white = WCAG AAA; navy heading on navy hero uses white = AAA
- All inline links underline-by-default in content sections

**robots.txt:**
- File present at repo root
- `User-agent: * / Allow: /` allows all
- Sitemap reference present: `Sitemap: https://www.arbiterhr.com/sitemap.xml`
- No disallow rules — new pages indexable without further change

---

## F. Open items for operator

1. **Stay Updated footer signup — wiring confirmed (FYI, no action required):**
   - Kit form ID `9372890`, action `https://app.kit.com/forms/9372890/subscriptions`
   - **Same form as the main #calendar Compliance Calendar capture** — footer is a duplicate funnel
   - Subscribers land in: 2026 Compliance Calendar → PDF delivery → 4 onboarding emails → monthly compliance updates
   - NOT portal-specific. NOT product-waitlist-specific.
   - A separate Kit form `9454093` drives the product waitlist via the `openWaitlist()` modal (banner, bundle CTAs, individual workbook CTAs) — also not portal-specific.

2. **No portal-specific waitlist exists anywhere on the site.** Revision 3's closing sentence was originally drafted as *"Join the waitlist below for portal updates."* — reworded by operator decision to *"Join our updates list below to hear when the portal opens."* to honestly describe what the existing footer signup actually does. If a dedicated portal waitlist is later wanted, add a new Kit form + footer or dedicated signup component; flag for that build is captured here for future scope.

3. **Drift from `origin/main` — branch is 2 commits behind:**
   - `491ca76` Create portal-content-archive.md
   - `62f1a8b` Create upl-safe-harbor-analysis.md
   - Both are root-level markdown docs, no overlap with site files modified in this branch
   - Branch was NOT rebased per your instruction — handle merge sequencing at push time (rebase OR merge from main into branch before PR, OR resolve at PR-merge step)

4. **Brief deviation: 4-column → 5-column footer.** Brief said current was 3-col (References | About | Contact) and asked for 4-col (+ Legal). Actual current was 3 CSS cols with About+Contact stacked and Stay Updated as 3rd. Final result is 5 CSS cols to preserve Stay Updated email signup form (would have been functional removal otherwise). Operator approved at Chunk 2 checkpoint. If Stay Updated should be relocated/removed in future, that's a separate task.

5. **Footer note on legal pages vs. homepage** — the four legal pages use the simpler navy strip footer (5 inline links + copyright/disclaimer line), while index.html uses the multi-column grid footer. Both footers carry the same Slate Holdings attribution and disclaimer language. Intentional: legal pages don't need link mass; homepage does.

---

## G. Commit hashes & push instructions

**Branch:** `legal/pages-and-footer-2026-05-25`

| # | SHA | Message | Files |
|---|---|---|---|
| 1 | `891b770` | chunk 1 (1/4): re-render terms.html from arbiter-terms.md | terms.html (inherited) |
| 2 | `1a96e92` | Add three legal pages: privacy, refund-policy, disclaimer | privacy.html, refund-policy.html, disclaimer.html |
| 3 | `82f3dc4` | Footer restructure: add Legal column, update attribution | index.html |
| 4 | `8021187` | Marketing copy revisions for legal alignment | index.html |
| 5 | _(this commit)_ | Add legal pages to sitemap + deliverable report | sitemap.xml, runs/legal-pages-update-2026-05-25.md |

**Push instructions (operator runs):**

```bash
cd "C:\Users\Brittany Lyons\OneDrive\Documents\GitHub\arbiterhr-site"

# 1. Verify branch is what you expect
git status
git log --oneline origin/main..HEAD   # should show all 5 commits

# 2. (Optional) rebase against origin/main to absorb the 2 doc commits
#    Skip if you'd rather resolve at PR-merge step
git fetch origin
git rebase origin/main
# (no conflicts expected — only doc files differ)

# 3. Push feature branch
git push -u origin legal/pages-and-footer-2026-05-25

# 4. Open PR
gh pr create \
  --base main \
  --head legal/pages-and-footer-2026-05-25 \
  --title "Legal pages + footer restructure + marketing copy alignment" \
  --body-file runs/legal-pages-update-2026-05-25.md

# 5. After CI passes and review approves, merge
gh pr merge --squash   # or --merge per repo convention
```

**Vercel preview:** new clean URLs to spot-check after deploy:
- https://www.arbiterhr.com/terms
- https://www.arbiterhr.com/privacy
- https://www.arbiterhr.com/refund-policy
- https://www.arbiterhr.com/disclaimer
- https://www.arbiterhr.com/sitemap.xml (verify 4 legal entries)
- https://www.arbiterhr.com/ (verify 5-col footer + 3 copy revisions)

**Rollback:** if anything misfires post-deploy, `git revert <sha>` per commit gives clean per-chunk rollback — each commit is self-contained.
