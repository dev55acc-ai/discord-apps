# Faber — App Directory listing copy (canonical)

Final copy for every listing field. Paste as-is. Nothing here claims more than
`src/handlers.js` ships. Brand rules applied: terse slash-command voice, no
character art, AI-marketing vocabulary banned — enforced mechanically by
`scripts/brand_lint.sh`.

Last verified against live surfaces: 2026-08-23.

## Fields

**Name:** `Faber`

**Tagline:** `Three commands. Zero noise.`

**Description:**

```
Faber gives busy servers three quiet commands.

/ping   Check the bot is alive. Returns gateway latency.
/map    Resource shortcuts for this server.
/audit  Quick server health check. Channels and member count.

Slash commands only — no message-content access, nothing reads chat.
Replies are ephemeral: channels stay clean.
```

**Tags (pick ≥1 in the portal dropdown):** `Utilities`, `Server Management`
— exact selectable tags come from the portal picker at submit time; these are
the intended picks, not a verified enumeration.

**Install URL (OAuth2 default):**

```
https://discord.com/oauth2/authorize?client_id=1497643725029900418&scope=bot+applications.commands&permissions=0
```

client_id 1497643725029900418 confirmed by Discord API auth response
(`bot_id`) 2026-08-23. Scope requests `applications.commands`; permissions 0.

**Privacy Policy URL:** `https://faber-alpha.vercel.app/privacy` — HTTP 200 verified 2026-08-23

**Terms of Service URL:** `https://faber-alpha.vercel.app/terms` — HTTP 200 verified 2026-08-23

**Support server URL:** PENDING — must be a Discord server designated as a
community server (App Directory requirement). Create or convert before submit;
owner: whoever holds the Discord client login after team verification clears.
This is the only listing asset not yet shippable from here.

## Commands registered (global, API-verified 2026-08-23)

PUT /applications/1497643725029900418/commands → 200: `ping`, `map`, `audit`.
Descriptions in the registration script (`scripts/register_guild_commands.py`)
match the listing table above. If commands change in code, update BOTH files
and re-run the register script before submitting.

## Copy discipline

- Claims limited to shipped behavior. No performance numbers (none measured).
- No character art, no brand imagery, no logo beyond plain type.
- Banned AI-marketing vocabulary never appears (lint-enforced).
