#!/bin/sh

npm config set cache /var/www/.npm-cache --global
cd /usr/src/app/api 
npm install 
npm run dev
tail -d /dev/null