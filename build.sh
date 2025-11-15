#!/bin/sh
# GitHub Actions workspace is already in the repo root
rm -rf ../output
mkdir -p ../output
cp -R ./* ../output/