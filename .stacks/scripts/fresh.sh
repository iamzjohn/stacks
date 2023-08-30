#!/bin/sh

# delete ../../../bun.lockb
rm ../../bun.lock

# delete all node_modules and dist folders
rimraf ../../**/dist
rimraf ../../**/node_modules # ensure this runs last or else rimraf will delete itself

# install dependencies via Bun
bun install

# link all core packages
# ./link.sh
