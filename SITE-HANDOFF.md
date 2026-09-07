# Bayou Fork Kitchen website handoff

## Live site

- **Netlify URL:** https://bayou-fork-kitchen.netlify.app
- **Netlify project:** https://app.netlify.com/projects/bayou-fork-kitchen
- Site ID: `8dd6d96a-148a-433c-846a-5df31080abf3`

## Netlify settings

- Publish directory: `site`
- Build command: leave blank
- Forms enabled: `quick-order` (homepage), `online-order` (Order Online page), `catering` (Catering page), `contact` (Contact page), `blog-comment` (blog article). All have honeypot spam protection.
- Add form submission email notifications in Netlify (Site settings → Forms → Form notifications) so someone actually sees new orders/inquiries.

The included `netlify.toml` already points Netlify to the `site` publish directory.

## Still needed from the owner before this is fully launch-ready

- **Phone number** and a separate **text-order number**, if they want one — currently shown as yellow "ADD PHONE NUMBER" placeholders on the top bar, footer, contact page, and order/catering forms.
- **Email address(es)** — same placeholder treatment, currently pointing at a non-existent `orders@bayouforkkitchen.com`.
- **Full menu with prices** — every price on the site currently shows "TBD." Menu structure, sides, and sauces are in from the owner's questionnaire; only prices are missing.
- **Real food photos and the owner's logo file.** The logo is in (`site/assets/images/logo/`, cropped from a phone screenshot with the background made transparent). Most menu photos are a mix of the owner's own real plated shots and free stock photos chosen to match each dish's description — swap any of these for real photos as they come in. See `assets/images/real/` (owner's own photos) vs `assets/images/stock/` (sourced stock, no attribution required) to tell them apart.
- **Catering package pricing / tray sizes** — the catering form collects event details but doesn't quote pricing yet.
- **Delivery specifics** — fee, radius, minimum order, and who's driving (the owner vs a delivery app) are not yet defined on the site.
- **Google Business Profile** — owner wasn't sure if one exists; worth claiming/verifying for local search, especially since the drive-thru is described as the main profit engine.

## Content sources used

- Owner-supplied business questionnaire (hours, service area, menu structure, ordering flow, catering, brand voice).
- Owner's own phone photos for the logo, several menu items, and the owner's portrait on the About page.
- Free stock photos (Pexels, no attribution required) for menu items without a real photo yet — chosen to match the actual dish description, not generic filler.
- The original Memphis restaurant's live website (mardigrasmemphis.com) confirmed as the real predecessor referenced in the "Our Story" section; linked from the About page.

## Known open items

- Two page sections still need better source photos when available:
  - The About page's "It started with a corner store in Memphis" banner is currently a moody stock food photo (a placeholder) — the owner has real exterior/interior photos of the actual Memphis location that should replace it once they come through cleanly (an upload glitch mid-session meant they couldn't be pulled in yet).
  - A handful of decorative blog thumbnails are still generic stock photography.
- Design theme is black-and-gold (site's `--secondary-color` CSS variable controls the accent color sitewide — currently `#f0a500`).
