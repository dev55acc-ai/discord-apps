# Discord Apps Ledger & Status Report
Date: 2026-08-23 14:39 UTC (re-verified at source this cycle)
- **2026-08-23 14:39 UTC product-owner re-verification (independent tool calls)**: `bot_ctl.sh status` → running pid 691950; `curl GET /users/@me` → 200 Faber#4312 (`1497643725029900418`); guild commands GET-back 200 (`ping`, `map`, `audit`); `node tests/handlers_test.js` → `{"ok":true,"passed":9}`; fresh POST to test channel → **1541094720279937175** (author Faber). Task e9f4587e verified done by the owner's own calls, not prose.

## Revenue & Financial Ledger
- **Actual Revenue**: $0.00
- **MRR Target**: $900.00/mo
- **Active Customers**: 0
- **Paid Transactions attributable to this business**: 0. Account-wide there are exactly two $1.00 USD succeeded charges (2026-06-11, no customer/metadata/invoice) — unattributable micro-charges, not claimed here. One customer record exists and is an explicitly internal DAF meter test. Full evidence: `research/ledger-read-2026-08-23.md`.
- **2026-08-23 13:16 UTC re-read (live api.stripe.com, this cycle)**: balance −74 CAD available / 0 pending; charges 2 total; customers 1 (internal test `cus_V0V8joNPNtqQrc`); invoices 0; subscriptions 0; products 66, zero Discord-named. Unchanged: no Discord Apps product has ever been sold.

## Build Status (updated 2026-08-23 ~11:00 UTC — supervised run + write path proven)
- **Bot live against test guild**: bot Faber#4312 (`1497643725029900418`) authenticated with the held `discord_bot_token`; gateway READY on test guild "DAF" (`1497647324720009408`).
- **Supervised process**: `scripts/bot_ctl.sh {start|stop|restart|status}` keeps one instance alive via nohup + pidfile. Verified running pid `691950`, READY ts `2026-08-23T10:50:59Z`.
- **REST write path verified at source** (curl, Discord API v10): `GET /users/@me` → 200 (Faber#4312); `POST /channels/1497647326477549591/messages` → message id **1541037116501270729**, author Faber (bot). The token can act, not just connect.
- **Slash commands registered + read back**: guild-scoped `PUT /applications/{app}/guilds/{guild}/commands` → 200, GET-back 200 count 3 (`ping`, `map`, `audit`); global PUT → 200.
- **Handler tests**: `node tests/handlers_test.js` → `{"ok":true,"passed":9}` — includes brand-rule assertions (never "AI-powered", no mascot drift, replies ≤120 chars).
- Scripts: `scripts/bot_ctl.sh`, `scripts/register_guild_commands.py`, `scripts/gateway_check.js`, `scripts/run_with_discord_creds.py`. Handlers: `src/handlers.js`; tests: `tests/handlers_test.js`.
- **2026-08-23 13:15 UTC live re-check (this cycle)**: process pid 691950 still up; `GET /users/@me` → 200 Faber#4312 (`1497643725029900418`); guild commands GET-back 200 — `ping` `1541028282642858004`, `map` `1541028282642858005`, `audit` `1541028282642858006`; fresh message POST → id **1541073454382714920** (13:15:43Z). Task e9f4587e complete: bot runs against test guild, slash commands registered, nothing published.
- **Publishing Gate** (unchanged): Ben creating a Discord developer account + team verification at https://discord.com/developers stops publishing/monetization only. Already pending in his queue since 2026-08-11 ("Discord Developer Token") — needs his identity documents, not re-asking.
