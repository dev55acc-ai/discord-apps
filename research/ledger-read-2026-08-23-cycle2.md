# Ledger read — Discord Apps — cycle of 2026-08-23 ~13:11 UTC

Method: live Stripe API (`with-creds stripe`, key never printed) + live Discord REST v10.
Every number below is copied from tool output this cycle. No projections.

## Payment records (Stripe, livemode)

- **Balance**: available −74 CAD (card −74), pending 0 CAD.
- **Charges**: exactly 2 total (`has_more: false`):
  - `py_3ThIV3DlkKqVdZXJ0ha1hOHv` — $1.00 USD, created ts 1781222347, billing Ben Lafreniere <benlafreniere6@gmail.com> (CA), `refunded: true`, amount_refunded 100, customer null, metadata {}.
  - `py_3ThG88DlkKqVdZXJ4O8whRT6` — $1.00 USD, created ts 1781213239, billing Ben Lafreniere <dev55acc@gmail.com> (CA), `refunded: true`, amount_refunded 100, customer null, metadata {}.
  - Both are internal self-charges, fully refunded. Neither is revenue and neither is attributable to Discord Apps.
- **Customers**: exactly 1 — `cus_V0V8joNPNtqQrc`, name "VET INTERNAL METER TEST — not a real customer", email vet-meter-test@davidandrewfurniture.com, metadata `{internal: "1"}`. Not a real customer.
- **Invoices**: 0. **Subscriptions**: 0.
- **Products containing "discord"**: 0. **Payment links**: 26 total, 0 containing "discord".

## Revenue attributable to Discord Apps

**$0.00. Zero customers. Zero transactions.** Target remains $900/mo; gap $900.

## Bot vs test guild (task e9f4587e re-verified same cycle)

- `scripts/bot_ctl.sh status` → `{"running":true,"pid":691950,"last_ready":{...tag":"Faber#4312","id":"1497643725029900418","guilds":[{"id":"1497647324720009408","name":"DAF"}],"ts":"2026-08-23T10:50:59.620Z"}}`
- `GET /users/@me` → 200, bot Faber#4312 (`1497643725029900418`).
- `GET /applications/1497643725029900418/guilds/1497647324720009408/commands` → 200, 3 guild-scoped slash commands:
  - `ping` id `1541028282642858004`
  - `map` id `1541028282642858005`
  - `audit` id `1541028282642858006`
- Nothing published; publishing still gated only by Ben's developer account + team verification (pending since 2026-08-11, needs his identity documents).
