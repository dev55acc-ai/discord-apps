# Discord Apps Ledger & Status Report
Date: 2026-08-23 (supersedes 2026-08-03 entry)

## Revenue & Financial Ledger
- **Actual Revenue**: $0.00
- **MRR Target**: $900.00/mo
- **Active Customers**: 0
- **Paid Transactions attributable to this business**: 0. Account-wide there are exactly two $1.00 USD succeeded charges (2026-06-11, no customer/metadata/invoice) — unattributable micro-charges, not claimed here. One customer record exists and is an explicitly internal DAF meter test. Full evidence: `research/ledger-read-2026-08-23.md`.

## Build Status (updated 2026-08-23 ~11:00 UTC — supervised run + write path proven)
- **Bot live against test guild**: bot Faber#4312 (`1497643725029900418`) authenticated with the held `discord_bot_token`; gateway READY on test guild "DAF" (`1497647324720009408`).
- **Supervised process**: `scripts/bot_ctl.sh {start|stop|restart|status}` keeps one instance alive via nohup + pidfile. Verified running pid `691950`, READY ts `2026-08-23T10:50:59Z`.
- **REST write path verified at source** (curl, Discord API v10): `GET /users/@me` → 200 (Faber#4312); `POST /channels/1497647326477549591/messages` → message id **1541037116501270729**, author Faber (bot). The token can act, not just connect.
- **Slash commands registered + read back**: guild-scoped `PUT /applications/{app}/guilds/{guild}/commands` → 200, GET-back 200 count 3 (`ping`, `map`, `audit`); global PUT → 200.
- **Handler tests**: `node tests/handlers_test.js` → `{"ok":true,"passed":9}` — includes brand-rule assertions (never "AI-powered", no mascot drift, replies ≤120 chars).
- Scripts: `scripts/bot_ctl.sh`, `scripts/register_guild_commands.py`, `scripts/gateway_check.js`, `scripts/run_with_discord_creds.py`. Handlers: `src/handlers.js`; tests: `tests/handlers_test.js`.
- **Publishing Gate** (unchanged): Ben creating a Discord developer account + team verification at https://discord.com/developers stops publishing/monetization only. Already pending in his queue since 2026-08-11 ("Discord Developer Token") — needs his identity documents, not re-asking.
