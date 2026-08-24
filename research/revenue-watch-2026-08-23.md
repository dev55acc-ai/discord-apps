# Revenue Watch — Discord Apps — 2026-08-23

Source: LIVE Stripe account, read via `with-creds` + Stripe REST API (`/v1/products`, `/v1/prices`,
`/v1/customers`, `/v1/payment_intents`, `/v1/checkout/sessions` (all 256, paginated),
`/v1/invoices`, `/v1/subscriptions`, `/v1/balance_transactions`). Every row below is an API response field.

## Discord Apps revenue: $0.00

- **Products:** 66 on the account; **0** contain "discord" (all belong to DAF, Motion Menu,
  Plinth, Keel, Lifeware, Ghost Newsletter, Skyfire, Vet MCP).
- **Prices:** 41; **0** Discord.
- **Customers:** 1 total (`cus_V0V8joNPNtqQrc`) — "VET INTERNAL METER TEST — not a real customer",
  metadata `internal: 1`. Not a customer of this or any business.
- **Invoices:** 0. **Subscriptions:** 0.
- **Payment intents:** 2 ever (both 2026-06-11, $1.00 USD each). Both DAF internal rail tests
  (`DAF Deposit · Pilot suite refresh — bedroom` → benlafreniere6@gmail.com;
  `DAF Deposit · Catalog Order eb865883` → dev55acc@gmail.com); balance ledger shows both
  refunded in full (4 txns: +140/-140 CAD ×2). Net lifetime money moved on the whole account: $0.
- **Checkout sessions:** 256 scanned across all pages; **0** mention discord; 2 ever reached
  `paid` status — the two DAF tests above.

## Conclusion

Discord Apps has no product, no price, no checkout session, no customer, no charge.
MRR: $0 against a $900/mo target. Zero is the correct number for this business.
Nothing was invented here; every figure traces to a listed API call made 2026-08-23.
