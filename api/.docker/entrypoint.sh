#!/bin/sh

npm config set cache api/.npm-cache --global
cd /usr/src/app/api 
npm install 
npm run dev