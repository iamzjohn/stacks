#!/bin/sh

REQUIRED_NODE_VERSION=$(cat ./.node-version)
REQUIRED_NODE_MAJOR=$(echo "$REQUIRED_NODE_VERSION" | cut -d. -f1)
REQUIRED_NODE_MINOR=$(echo "$REQUIRED_NODE_VERSION" | cut -d. -f2)
REQUIRED_NODE_PATCH=$(echo "$REQUIRED_NODE_VERSION" | cut -d. -f3)

INSTALLED_NODE_VERSION=$(node -v 2>/dev/null || echo "")
INSTALLED_NODE_VERSION=${INSTALLED_NODE_VERSION#v} # removes the 'v' prefix
INSTALLED_NODE_MAJOR=$(echo "$INSTALLED_NODE_VERSION" | cut -d. -f1)
INSTALLED_NODE_MINOR=$(echo "$INSTALLED_NODE_VERSION" | cut -d. -f2)
INSTALLED_NODE_PATCH=$(echo "$INSTALLED_NODE_VERSION" | cut -d. -f3)

if [[ "$INSTALLED_NODE_MAJOR" -lt "$REQUIRED_NODE_MAJOR" ||
  ("$INSTALLED_NODE_MAJOR" -eq "$REQUIRED_NODE_MAJOR" && "$INSTALLED_NODE_MINOR" -lt "$REQUIRED_NODE_MINOR") ||
  ("$INSTALLED_NODE_MAJOR" -eq "$REQUIRED_NODE_MAJOR" && "$INSTALLED_NODE_MINOR" -eq "$REQUIRED_NODE_MINOR" && "$INSTALLED_NODE_PATCH" -lt "$REQUIRED_NODE_PATCH") ]]; then
  exec $SHELL -c "sh ./setup.sh; source ~/.zshrc; tea +nodejs.org'=$REQUIRED_NODE_VERSION' >/dev/null 2>&1 ; echo Node.js installed:;tea +nodejs.org'=$REQUIRED_NODE_VERSION' node -v; echo pnpm installed:; pnpm -v;"
fi

echo "Node.js version $REQUIRED_NODE_VERSION or greater is installed!"
