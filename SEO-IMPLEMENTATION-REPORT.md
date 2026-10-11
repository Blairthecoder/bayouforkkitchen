# Bayou Fork Kitchen: SEO implementation notes (branch `claude/bayou-fork-kitchen-seo-ujt0o5`)

Not published (lives outside `site/`). Delete or move once reviewed.

## Baseline (verified in repo, before changes)
| Finding | Impact |
|---|---|
| Hours were "every day 8:00am-9:40pm" in the footer of all pages, plus contact, order-online, 3 blog posts, and Restaurant JSON-LD. `contact.html` meta description said "6am-4pm and 5pm-10pm". Order-online listed breakfast/lunch/dinner time windows | Critical (NAP/hours conflict with GBP) |
| Homepage JSON-LD missing `postalCode`; no Sunday closure | High |
| No FAQ / direct-answer content on homepage | Medium (AEO) |
| No dedicated pages for Mardi Gras Pasta or Catfish Étouffée (both on order-online at $16, not linked from menu) | High (pasta/étouffée intent) |
| GA4 (G-ZTBV7WQ9MW) present; only `doordash_click` tracked | Medium |
| `magnific-popup` CSS/JS referenced on 8 pages but files missing from `site/assets/vendor/` (2 failed requests per page). **Not fixed** (shared-asset change, needs approval) | Low-Med (perf) |
| menu.html shows "See DoorDash" for many items; order-online has verified prices for ~20 items | Medium |
| `SITE-HANDOFF.md` is stale (says phone/prices missing; site already has phone, email, DoorDash, prices) | Info |

## Completed
- **Hours** set to Mon-Sat 6:30am-6:30pm, Sunday closed: footer widget (all pages), contact (meta, H2, card), order-online (intro, hours card; removed breakfast/lunch/dinner time windows, kept menu categories), 3 blog posts (body + FAQ schema), about, homepage JSON-LD. Footer blurb no longer says "evening favorites".
- **Homepage**: new title/description, hero copy, directions/call/catering link row + hours line, signature-dish internal links, 7-question FAQ with FAQPage JSON-LD, `postalCode` 77096, `@id`, TikTok in `sameAs`.
- **New pages** (cloned from existing dish template; only facts already on the site): `/menu/mardi-gras-pasta` (Cajun pasta Houston) and `/menu/catfish-etouffee`; MenuItem+Offer and BreadcrumbList JSON-LD; in sitemap; linked from homepage and menu.
- **Menu page**: Mardi Gras Pasta linked; Catfish Étouffée card ($16) added; title/description updated.
- **Catering**: title and description rewritten. Form, Netlify handling and FAQ untouched.
- **Analytics** (`assets/js/theme.js`): `order_click`, `delivery_platform_click`, `call_click`, `directions_click`, `menu_view`, `catering_submit` (fires on thank-you page after a catering submit; no PII). Existing `doordash_click` kept, so one DoorDash click sends 3 events; use `order_click` for reporting and don't mark all three as key events.
- Cannibalization: `/cajun-food-southwest-houston` skipped (blog `best-cajun-food-southwest-houston` covers it); shrimp & grits already has `/menu/shrimp-and-grits`.

## Validation actually run
- All JSON-LD blocks parse. Not run through Google Rich Results Test (no outbound access); run on the deploy preview.
- Internal link/asset check: no new broken links; only the pre-existing magnific-popup references fail.
- Chromium at 390px: home, both new pages and menu load, no horizontal overflow, no page errors. Events verified in `dataLayer` for call, pickup, directions, menu_view.
- No build/lint/test tooling exists (static site). No Lighthouse run; no scores claimed.

## Needs owner/approval (not done)
1. Confirm the photo on the Catfish Étouffée page (`blackened-fish-etouffee.webp`) is the catfish étouffée; swap if not.
2. **Update external listings to Mon-Sat 6:30-6:30, Sun closed**: Google Business Profile, DoorDash store hours, Facebook, Apple Business Connect, Bing Places, Yelp, TikTok bio, BrightLocal citations.
3. Catering lead times beyond "one day's notice for larger orders", minimums, tray sizes and starting prices are unconfirmed; none added. "Church events" not added (unverified).
4. GA4: mark `order_click`, `call_click`, `directions_click`, `catering_submit` as key events; confirm Search Console verification (no GSC tag in code; may be DNS).
5. Live competitor/SERP research was **not performed** (no search-data tooling used). No metrics invented.
6. Remove or restore the missing magnific-popup references.
7. Reconcile "See DoorDash" vs. prices on menu.html with the owner.

## Keyword-to-page map (from site content; no volume data)
| Target | Intent | URL | Status | Conversion |
|---|---|---|---|---|
| Cajun restaurant Southwest Houston | Local | `/` | Optimized | Order, directions |
| Cajun pasta Houston / Mardi Gras Pasta | Dish | `/menu/mardi-gras-pasta` | New | DoorDash order |
| Crawfish fettuccine Houston | Dish | `/menu/crawfish-fettuccine` | Existing | Order |
| Shrimp and grits Houston | Dish | `/menu/shrimp-and-grits` | Existing | Order |
| Catfish étouffée Houston | Dish | `/menu/catfish-etouffee` | New | Order |
| Gumbo / crawfish étouffée Houston | Dish | `/menu/gumbo`, `/menu/crawfish-etouffee` | Existing | Order |
| Best Cajun food Southwest Houston | Informational | `/blog/best-cajun-food-southwest-houston` | Existing | Menu |
| Cajun catering Houston | Commercial | `/catering` | Retitled | Quote form |

## Ethical review workflow (staff)
1. After pickup/drive-thru, give every customer a card or QR with the Google review link (https://g.page/r/CYI7mIZsOraLECE/review); don't screen who gets asked.
2. No discounts or freebies for reviews; never ask for a specific star rating.
3. Reply to every review within 2 business days; thank, name a dish, never argue.
4. Get written/DM permission before using a customer photo.

## Off-site plan (nothing below has been done or contacted)
- P1: claim/verify GBP (categories, photos, menu link); consistent NAP on Apple, Bing, Yelp, Facebook.
- P2 editorial pitches: Houston Food Finder, Houstonia, CultureMap Houston, Eater Houston, Houston Press. Angles: Memphis-to-Houston owner story (About page), Mardi Gras Pasta, Catfish Bienville, Cajun vs. Creole vs. Viet-Cajun explainer.
- P3: Houston food creators (tasting invite), Southwest Houston neighborhood groups, nearby offices/churches/schools for catering referrals.
- No paid links, no review swaps.

## Next 30 days
1. Week 1: review preview, merge on approval; fix external-listing hours; mark GA4 key events; verify GSC, submit sitemap.
2. Week 2: live SERP/competitor pass for the 10 target queries; add prices to menu.html.
3. Week 3: real photos for the new dish pages; confirm catering lead times/pricing and add them.
4. Week 4: 5 editorial/creator pitches; start review-card workflow; use GSC queries to decide on any further pages.
