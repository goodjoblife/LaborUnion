#!/bin/bash

set -x

git config --global user.email "findyourgoodjob@gmail.com"
git config --global user.name "goodjob team (via CI)"

# Prepare the workspace
rm -rf _public
git clone git@github.com:goodjoblife/LaborUnion.git _public -b gh-pages --depth 1

# Remove all the old build files
rm -rf _public/*
cp -r build/* _public

# Commit workspace and push to remote
cd _public
git add -A .
git commit -m "build page for ${CIRCLE_SHA1}"
git push origin gh-pages
