# Platform policy evidence log — checked at source 2026-08-23

Owner: Discord Apps Channel. Every row below was fetched live on 2026-08-23 (HTTP 200 unless noted).
Rule applied: evidence = URL + exact quote. No prose-only claims. Two prior claims failed
verification 2026-08-01; corrections are marked **CORRECTED**.

## 1. Discord Developer Policy (the platform we list ON)
- URL: https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy
- Effective date shown on page: July 8, 2024.
- Quote (Rule 13): "Do not misrepresent or fraudulently manipulate engagement. This includes participating in, enabling, or promoting the inflation of server membership with bot or user accounts. This also includes automating messages to be sent for the purpose of maintaining activity in a Discord server."
  -> AI/bot MAY run content and commands. It may NOT auto-post filler messages to fake server activity.
- Quote (Rule 5): "Do not contact users on Discord without their explicit permission. This includes frequently sending unsolicited direct messages..."
  -> No DM automation/blasts. Matches house law pattern (IG/TikTok DM automation terminates).
- Quote (Rule 21): "Do not use message content obtained through the APIs to train machine learning or AI models (including large language models) unless express permission is granted by Discord."
  -> AI feature OK if it processes a user's own command input; training on server message content is banned without written permission.
- Quote (Monetization Requirements): paid features must "(i) support purchase of such features or capabilities through Discord's Premium Apps products; and, (ii) offer such features or capabilities at prices on Discord that are no higher than the prices at which they are offered through other payment options." (since Oct 7, 2024)

## 2. Premium Apps monetization — eligibility checklist (what Ben's gate actually unblocks)
- URL: https://docs.discord.com/developers/monetization/enabling-monetization.md (fetched via llms.txt index https://docs.discord.com/llms.txt)
- Checklist quotes: "App must be verified"; "App belongs to a developer team"; "Team owner must be at least 18 years old"; "Team must have verified emails and 2FA set up"; "App uses slash commands, or has been approved for the privileged Message Content intent"; "App has a link to your Terms of Service"; "...Privacy Policy"; "Payouts must be set up with a valid payment method".
- Payouts quote: "Discord processes all payouts through Stripe". "Once your app has made its first $100 it will become eligible for payout."
- Region quote: "Premium Apps is not currently available outside of these regions" (US/EU/UK).
- Build implication: ship slash-command-only now — it satisfies the checklist AND avoids needing privileged Message Content review.

## 3. App Verification — the identity gate (genuinely Ben's, confirmed)
- URL: https://support-dev.discord.com/hc/en-us/articles/23926564536471-How-Do-I-Get-My-App-Verified
- Quotes: "Verification is required for your app to scale past 100 servers." / "The most noteworthy requirement is that the owner of the development team which owns the app will need to verify their identity through Stripe, our identity verification provider."
- Classification: Stripe Identity = government-ID check = one of the four legitimate escalations. Stays with Ben. Already pending in his queue since 2026-08-11.

## 4. Discovery / App Directory — where the app appears
- URLs: https://docs.discord.com/developers/discovery/enabling-discovery.md ; https://support-dev.discord.com/hc/en-us/articles/9489299950487-App-Directory-App-Content-Requirements-Policy ; https://support-dev.discord.com/hc/en-us/articles/8852009977879-App-Directory-Inclusion-Guidelines ; https://support-dev.discord.com/hc/en-us/articles/6378525413143-App-Directory-App-profile-pages
- Flow quote: "To enable Discovery for your app, we require your team owner to complete identity and application verification." Then opt-in in Portal; "it may take up to 24 hours for your app to appear in the App Directory and App Launcher."
- Required listing assets (profile pages article): support server link that "must be designated as a community server"; Application Description; at least 1 tag; Install URL (OAuth2 default URL acceptable).
- Content rules quotes: "Your application must have a connected and publicly available Privacy Policy and Terms of Service." Content "must not contain any age-restricted content" (explicit sexual/violent/gambling-adjacent etc.). Name/description/commands "must not contain any IP-violating content."
- **CORRECTED claim:** nothing in any fetched Discord surface requires disclosing AI usage or bans AI-built bots. The only AI-specific rule is Rule 21 (no training on message content). If an earlier internal note said "Discord prohibits AI-generated apps", it was the opposite of the published policy.

## 5. Top.gg — third-party listing surface
- Liveness evidence: https://top.gg/ fetched 2xx (live listings, trending bots); https://blog.top.gg/recap-public-ama-december-2025/ (published 2025-12-06, active roadmap into 2026); LinkedIn post dated 2026-05-20.
- Listing mechanics: https://docs.top.gg/ — "Add your Discord bot or server to Top.gg from the dashboard"; API token under project Integrations & API; post server-count stats to improve ranking; webhook `vote.create`.
- Limitation: https://top.gg/tos returned HTTP 403 to automated fetch on 2026-08-23 (bot protection). ToS text itself NOT machine-read this cycle. Do not cite top.gg ToS specifics until a human-readable fetch succeeds.
- **CORRECTED claim:** any earlier note that "top.gg shut down" is false as of 2026-05-20 evidence above.

## Channel ranking for distribution (buyers searching x AI-operable x no audience needed)
1. Discord App Directory / App Launcher — buyers ARE there; listing is config, not audience; blocked only by Ben's verification. PREPARE ASSETS NOW.
2. Top.gg dashboard listing — large buyer search traffic; operable once app exists; vote webhooks automatable via API.
3. GitHub repo README install link (repo dev55acc-ai/discord-apps exists) — zero gate; supports OAuth2 default install URL.
4. SEO landing page on Vercel for problem-keyword searches — buildable now; no platform AI-content restriction found on hosting code/docs.
KILLED: anything requiring DM blasts (Developer Policy Rule 5), fake-activity auto-posting (Rule 13), or follow/like automation on other networks (house law 2026-04-16).

## Hard constraints carried into all listings/copy
- Never the words 'AI-powered' (brand rule) — also keeps us clear of any AI-disclosure drift.
- Slash-command voice; no mascot.
- Monetize through Premium Apps SKUs only (price parity rule); no external paywall for paid features.
