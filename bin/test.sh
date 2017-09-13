#!/bin/sh

set -e

./node_modules/.bin/mocha 2>&1 | tee TestOutputWithColors.txt

if grep 'Warning' TestOutputWithColors.txt
then
  LIGHTRED='\033[1;31m'
  NOCOLOR='\033[0m' # No Color
  echo "\n${LIGHTRED}** Please check the above warnings before committing. **${NOCOLOR}\n";
fi
