#!/bin/bash

# Github's zip files don't contain records for folders, and fcitx5-rime.js cannot handle such files.
# This script simply re-zips the file.

ZIP="$1"
DIR=/tmp/FIXZIP

rm -rf "$DIR"
mkdir -p "$DIR"

mv "$ZIP" $DIR/INPUT.zip
cd $DIR
unzip INPUT.zip
rm INPUT.zip
zip -r OUTPUT.zip *
cd -
mv "$DIR/OUTPUT.zip" "$ZIP"

rm -rf "$DIR"
