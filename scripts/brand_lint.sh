#!/usr/bin/env bash
# brand_lint — enforces the binding art-direction rule on every public surface.
#   Rule 1: never the words 'AI-powered' (or any AI-marketing variant).
#   Rule 2: no mascot.
#   Rule 3: copy describes only what ships. Retired/unshipped names must not linger.
# Exit 1 on any hit. Run before any deploy or listing submission.
set -euo pipefail
cd "$(dirname "$0")/.."

DIRS=(site publish docs README.md)
PATTERNS=(
  "ai-powered"
  "artificial intelligence"
  "machine learning"
  "intelligent"
  "smart"
  "mascot"
  "ServerPulse"
)

fails=0
for pat in "${PATTERNS[@]}"; do
  while IFS=: read -r file line text; do
    [ -z "$file" ] && continue
    echo "FAIL [$pat] $file:$line: $(echo "$text" | sed 's/^[[:space:]]*//' | cut -c1-100)"
    fails=$((fails+1))
  done < <(grep -Rni --include='*.md' --include='*.html' -- "$pat" "${DIRS[@]}" 2>/dev/null || true)
done

if [ "$fails" -gt 0 ]; then
  echo "{\"step\":\"brand_lint\",\"ok\":false,\"violations\":$fails}"
  exit 1
fi
echo "{\"step\":\"brand_lint\",\"ok\":true,\"violations\":0,\"dirs\":\"${DIRS[*]}\"}"
