# faber

Three commands. Zero noise.

```
/ping   Check the bot is alive. Returns gateway latency.
/map    Resource shortcuts for this server.
/audit  Quick server health check. Channels and member count.
```

## Install

Slash commands only. No message-content access.

**Add to server:** https://discord.com/oauth2/authorize?client_id=1497643725029900418&scope=bot+applications.commands&permissions=0

Links: [Privacy policy](https://faber-alpha.vercel.app/privacy) · [Terms](https://faber-alpha.vercel.app/terms)

## Self-hosting

```bash
npm install
DISCORD_BOT_TOKEN=... node bot.js
```

Commands register globally on first run of `scripts/register_guild_commands.py`.

## Status

- Bot runs against a test guild (`scripts/bot_ctl.sh status`).
- Tests: `node --test tests/handlers_test.js`.
- Brand rules enforced by `./scripts/brand_lint.sh` — terse voice, plain-type
  logo only, banned-marketing-vocabulary check.
