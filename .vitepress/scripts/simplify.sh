#!/bin/bash

rm -rf zh-Hans
mkdir zh-Hans
cp index.md zh-Hans
cp -a lookup zh-Hans
cp -a book zh-Hans
cp -a public zh-Hans
cp -a demo zh-Hans

find zh-Hans -name '*.md' -exec bash './.vitepress/scripts/simplify_in_place.sh' \{\} \;
