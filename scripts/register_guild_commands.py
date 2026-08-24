import sys, os, json, base64, urllib.request, urllib.error

sys.path.insert(0, "/home/dev55/nimos")
import db as DB

TOKEN = (DB.get_setting("discord_bot_token") or "").strip()
GUILD = (DB.get_setting("discord_guild_id") or "").strip()

def call(method, path, body=None):
    req = urllib.request.Request(
        "https://discord.com/api/v10" + path,
        data=json.dumps(body).encode() if body is not None else None,
        method=method,
        headers={
            "Authorization": f"Bot {TOKEN}",
            "Content-Type": "application/json",
            "User-Agent": "DiscordBot (https://discord.com/developers/applications, 1.0)",
            "Accept": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as r:
            return r.status, json.loads(r.read().decode() or "{}")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:500]

if not TOKEN or len(TOKEN) < 50:
    print(json.dumps({"step": "token_check", "ok": False, "reason": "discord_bot_token missing/short in settings"}))
    sys.exit(1)

# App id is the base64 first segment of the bot token
app_id = base64.b64decode(TOKEN.split(".")[0] + "==").decode("utf-8", "replace")

status, me = call("GET", "/users/@me")
me_obj = me if isinstance(me, dict) else {}
print(json.dumps({"step": "auth", "status": status, "bot_username": me_obj.get("username"), "bot_id": me_obj.get("id"), "body": me if status != 200 else None}))

if status != 200:
    sys.exit(1)

commands = [
    {"name": "ping", "description": "Check the bot is alive.", "type": 1},
    {"name": "map", "description": "Resource shortcuts for this server.", "type": 1},
    {"name": "audit", "description": "Quick server health check.", "type": 1},
]

if GUILD:
    s1, r1 = call("PUT", f"/applications/{app_id}/guilds/{GUILD}/commands", commands)
    print(json.dumps({"step": "guild_register", "guild_id": GUILD, "status": s1, "registered": [c.get("name") for c in r1] if isinstance(r1, list) else str(r1)[:300]}))
    s2, r2 = call("GET", f"/applications/{app_id}/guilds/{GUILD}/commands")
    print(json.dumps({"step": "guild_verify", "status": s2, "count": len(r2) if isinstance(r2, list) else None, "names": [c.get("name") for c in r2] if isinstance(r2, list) else str(r2)[:300]}))

s3, r3 = call("PUT", f"/applications/{app_id}/commands", commands)
print(json.dumps({"step": "global_register", "status": s3, "registered": [c.get("name") for c in r3] if isinstance(r3, list) else str(r3)[:300]}))
