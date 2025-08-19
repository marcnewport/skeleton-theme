# 🛠 Pull Request Template (Shopify Theme Devs)

## 📌 Task / Context

- **Task Link**: [ClickUp / Jira / Marker.io link here]
- **Time Tracking Reference**: [if applicable]

## 🌐 Preview / Testing

- **Theme Preview Link**: [theme link]
- **Page / URL where changes are visible**: [specific page link]
- **Relevant Data Structures**:
  - Metafields / Metaobjects: [list IDs, namespaces, keys, etc.]
  - JSON templates / Sections involved: [list here]

## 🚀 Deploy / Setup Steps (if required)

_(Add instructions needed to test this PR on the review or live store)_
Examples:

- [ ] Add metafields / metaobjects: `namespace.key`
- [ ] Add data to section/block via **customizer** (e.g., enable new block on `product.json`)
- [ ] Assign templates to products/collections/pages
- [ ] Create or link required settings in `settings_schema.json`
- [ ] Run any scripts for data setup (if applicable)

## 📸 Screenshots / Videos

_(Add before/after screenshots, Loom videos, or recordings if applicable)_

## 🔍 What Needs Reviewing

- [ ] Code correctness
- [ ] Browser testing (desktop / mobile)
- [ ] Liquid logic / data bindings
- [ ] Styling (CSS/SCSS consistency, no regressions)
- [ ] JavaScript functionality
- [ ] Accessibility (where applicable)
- [ ] Performance (avoid unnecessary loops / render-blocking scripts)

➡️ **Focus areas**:
_If you only want review on specific parts, highlight here (e.g., “only review Liquid changes in `sections/product.liquid`”)._

## 📂 Commit Hygiene

- [ ] Format / Prettier-only commits separated
- [ ] Functional commits clearly described
- [ ] Highlight which commits need closer review

## 🏷 Labels

_Select one:_

- `Review` – Feature is with client for review
- `Ready` – Feature approved by client
- `Not ready` – Blocked / WIP

## ⚠️ Checklist Before Requesting Review

- [ ] Code follows Shopify 2.0 best practices (no hardcoded schema changes, proper `settings_schema.json`, etc.)
- [ ] Liquid, JS, CSS lint checks pass
- [ ] No console errors
- [ ] Tested on multiple breakpoints (mobile, tablet, desktop)
- [ ] Checked against base theme (no regressions introduced)
- [ ] Added comments for complex Liquid logic
- [ ] Translations / localization checked if strings were added
- [ ] No sensitive info hardcoded (keys, API tokens)

---

### 📝 Notes

_(Add any additional info for the reviewer here)_
