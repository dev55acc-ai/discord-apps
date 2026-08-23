#!/usr/bin/env python3
"""Run a command with DISCORD_BOT_TOKEN / TEST_GUILD_ID in env.

Reads the values straight from the settings table and execs the child —
the token is never printed, logged, or echoed.
Usage: run_with_discord_creds.py <command> [args...]
"""
import os
import sys

sys.path.insert(0, "/home/dev55/nimos")
import db as DB  # noqa: E402


def main() -> None:
    if len(sys.argv) < 2:
        print("usage: run_with_discord_creds.py <command> [args...]", file=sys.stderr)
        sys.exit(64)

    token = (DB.get_setting("discord_bot_token") or "").strip()
    guild = (DB.get_setting("discord_guild_id") or "").strip()
    if not token:
        print("discord_bot_token missing from settings", file=sys.stderr)
        sys.exit(1)

    env = os.environ.copy()
    env["DISCORD_BOT_TOKEN"] = token
    if guild:
        env["TEST_GUILD_ID"] = guild
    os.execvpe(sys.argv[1], sys.argv[1:], env)


if __name__ == "__main__":
    main()
