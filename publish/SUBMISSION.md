# Submission runbook — minutes, not days

Goal: after Ben's team verification clears, submit Faber to the App Directory
and enable monetization in one sitting. Everything below is ordered; steps
marked DONE are already verified — do not redo them.

Evidence base: `research/platform-policy-evidence-2026-08-23.md` (all sources
fetched live 2026-08-23). Portal: https://discord.com/developers/applications

## Already done (verified 2026-08-23)

| # | Requirement (source quote) | Status | Evidence |
|---|---|---|---|
| 1 | "App uses slash commands" (monetization checklist) | DONE | Global PUT /commands → 200: ping, map, audit |
| 2 | Public Privacy Policy + ToS ("must have a connected and publicly available Privacy Policy and Terms of Service") | DONE | https://faber-alpha.vercel.app/privacy and /terms → HTTP 200 |
| 3 | Application Description + ≥1 tag + Install URL assets ready | DONE (copy) | `publish/LISTING.md` |
| 4 | Bot runs against test guild | DONE | `scripts/bot_ctl.sh status` → running, guild DAF |
| 5 | Repo public with install instructions | DONE | https://github.com/dev55acc-ai/discord-apps |

## Blocked ONLY by team verification (Ben's queue since 2026-08-11)

Team verification = Stripe Identity = government-ID check. Legitimately Ben's.
Portal path: Applications → your team → Enable Verification.

## Then execute, in order (~15 min)

1. **Set app name to `Faber`, upload no avatar** (no-character-art rule).
   Portal → Application → General Information.
2. **Paste listing copy** from `publish/LISTING.md`: description, tags
   (`Utilities`, `Server Management`), install URL, legal URLs.
   Portal → App Directory / Discovery settings.
3. **Support server:** create or convert a Discord server to a Community
   server, set as support link in the same form. (Only asset needing a
   Discord-client login.)
4. **Enable Discovery** — portal toggle; allow up to 24h for directory appearance.
5. **Monetization:** enable Premium Apps on the app; connect payouts via
   Stripe when prompted (Ben's bank detail — hand him only that screen).
6. **Price SKUs inside Discord only** — price-parity rule: paid features must
   be sold through Premium Apps at prices no higher than any other channel.
7. Run `./scripts/brand_lint.sh` and `node --test tests/handlers_test.js`
   before finalizing — both must pass.

## Post-submit proof to log

- Directory profile URL answering 200.
- `bot_ctl.sh status` JSON showing running bot.
- Screenshot-free evidence rule: record URLs + API responses only.
