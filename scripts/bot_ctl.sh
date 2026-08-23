#!/usr/bin/env bash
# bot_ctl — start/stop/restart/status for the Faber gateway process.
# Keeps one instance alive via nohup; status is machine-readable JSON.
set -euo pipefail
cd "$(dirname "$0")/.."

PIDFILE=.bot.pid
LOG=bot.log

is_running() {
  [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null
}

start() {
  if is_running; then
    echo "{\"step\":\"bot_ctl\",\"action\":\"start\",\"ok\":true,\"already_running\":true,\"pid\":$(cat "$PIDFILE")}"
    return
  fi
  nohup ./scripts/run_with_discord_creds.py node bot.js >>"$LOG" 2>&1 &
  echo $! >"$PIDFILE"
  sleep 3
  if is_running; then
    echo "{\"step\":\"bot_ctl\",\"action\":\"start\",\"ok\":true,\"pid\":$(cat "$PIDFILE"),\"ts\":\"$(date -u +%FT%TZ)\"}"
  else
    echo "{\"step\":\"bot_ctl\",\"action\":\"start\",\"ok\":false}" >&2
    exit 1
  fi
}

stop() {
  if is_running; then
    kill "$(cat "$PIDFILE")"
    rm -f "$PIDFILE"
    echo "{\"step\":\"bot_ctl\",\"action\":\"stop\",\"ok\":true}"
  else
    rm -f "$PIDFILE"
    echo '{"step":"bot_ctl","action":"stop","ok":true,"was_not_running":true}'
  fi
}

status() {
  if is_running; then
    pid=$(cat "$PIDFILE")
    last_ready=$(grep '"step":"bot_ready"' "$LOG" | tail -1 || true)
    echo "{\"step\":\"bot_ctl\",\"running\":true,\"pid\":$pid,\"last_ready\":${last_ready:-null}}"
  else
    echo '{"step":"bot_ctl","running":false}'
    exit 3
  fi
}

case "${1:-status}" in
  start) start ;;
  stop) stop ;;
  restart) stop || true; start ;;
  status) status ;;
  *) echo "usage: $0 {start|stop|restart|status}" >&2; exit 64 ;;
esac
