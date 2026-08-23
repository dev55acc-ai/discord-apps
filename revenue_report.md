# Revenue Report — Discord Apps
Date: 2026-08-23 16:11 UTC
Source: live Stripe API (GET /v1/charges, /v1/customers, /v1/subscriptions, /v1/products, /v1/prices, /v1/balance_transactions, /v1/payment_intents, /v1/invoices), key injected via with-creds.

## Discord Apps revenue this cycle: $0.00

What the real records contain:

- **Discord Apps products:** 0 (42 active products scanned; 0 match "discord")
- **Discord Apps prices:** 0 (41 prices scanned; 0 match "discord")
- **Discord Apps charges:** 0
- **Subscriptions (account-wide):** 0
- **Invoices (account-wide):** 0

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
