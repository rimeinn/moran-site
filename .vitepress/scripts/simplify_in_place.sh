#!/bin/bash

INPUT="$1"
OUTPUT="$1.tmp"

echo Simplifying $INPUT
if [ ! -f $INPUT ]; then
    echo $INPUT does not exist!
    exit 1
fi

echo opencc -c t2s.json -i $INPUT -o $OUTPUT
opencc -c t2s.json -i $INPUT -o $OUTPUT
mv $OUTPUT $INPUT || exit 1
