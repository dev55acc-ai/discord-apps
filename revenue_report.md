# Revenue Report — Discord Apps
Date: 2026-08-23 22:27 UTC (fresh API read this cycle)
Source: live Stripe API (GET /v1/balance_transactions, /v1/payment_intents, /v1/customers, /v1/products), key injected via with-creds. Stripe CLI absent; curl used.

## Discord Apps revenue this cycle: $0.00

What the real records contain (read 2026-08-23 22:24 UTC):

- **Discord Apps products:** 0 (50 products scanned; 0 match "discord")
- **Balance transactions account-wide:** 4 total — two +140 payments, two −140 refunds; net $0.00
- **Payment intents account-wide:** 2 succeeded, both amount 100 ($1.00), ids pi_3ThG88… and pi_3ThIV3… — both refunded per balance rows above
- **Customers account-wide:** 1 — cus_V0V8joNPNtqQrc, name "VET INTERNAL METER TEST — not a real customer", email vet-meter-test@davidandrewfurniture.com. Not a Discord Apps customer.
- **Subscriptions / invoices:** 0 (unchanged from prior reads)

Account-wide context, for completeness:

- Exactly 2 charges have ever succeeded on the account, both $1.00 USD,
  both from `cus_V0V8joNPNtqQrc` (`vet-meter-test@davidandrewfurniture.com`,
  name: "VET INTERNAL METER TEST — not a real customer", metadata `internal: 1`),
  both refunded (balance txns txn_3ThG88… +140 / txn_1ThGgF… −140 and
  txn_3ThIV3… +140 / txn_1ThIWr… −140). Neither is attached to a Discord Apps
  product. Neither is revenue.
- Checkout sessions exist but are all `open`/`expired` — no completed sessions.

Conclusion: Discord Apps has earned zero dollars from anyone, ever. No customers,
no payments, no subscriptions. Target remains $900/mo; gap is the full $900.
