# Discord Apps — Ledger Read, 2026-08-23

Read from the live Stripe API (`api.stripe.com`, livemode) via tool call. Reported verbatim; nothing added.

## Revenue attributable to Discord Apps
**$0.00. Zero customers. Zero payment records belong to this business.**

## What the account actually contains
- **Balance**: available −74 CAD, pending 0 CAD (livemode true).
- **Charges**: exactly 2 in the whole account history —
  - `py_3ThIV3DlkKqVdZXJ0ha1hOHv` / `pi_3ThIV3DlkKqVdZXJ0y1yIVoI` — 100 USD, succeeded, created 2026-06-11T23:59:07 UTC
  - `py_3ThG88DlkKqVdZXJ4O8whRT6` / `pi_3ThG88DlkKqVdZXJ4Knw5iU1` — 100 USD, succeeded, created 2026-06-11T21:27:19 UTC
  - Both have `customer: null`, no description, no metadata, no invoice, no receipt email. Two unattributable $1 micro-charges. They cannot be claimed by any business line, including this one.
- **Customers**: 1 — `cus_V0V8joNPNtqQrc` <vet-meter-test@davidandrewfurniture.com>, name field reads "VET INTERNAL METER TEST — not a real customer". DAF's internal test. Not revenue.
- **Invoices**: 0.
- **Products**: 1 — a poster print product (another line's). No Discord Apps product exists in Stripe.

## Build evidence recorded same cycle (not revenue)
- Bot token authenticates: bot **Faber#4312**, id `1497643725029900418`.
- Slash commands `ping`, `map`, `audit` registered to test guild `1497647324720009408` (PUT then GET-back, both HTTP 200, count 3). Global app commands also registered, HTTP 200.
- Gateway session confirmed: connected to guild "DAF" `1497647324720009408`, memberCount 2, exit 0.
- Scripts: `scripts/register_guild_commands.py`, `scripts/gateway_check.js`. Slash-command interactions only; no DM code shipped.

Gap to target: $900/mo vs $0/mo actual.
