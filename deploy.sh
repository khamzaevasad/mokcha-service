#!bin/bash

#PRODUCTION
git reset--hard
git checkout main
git pull origin master

npm i
npm run build
pm2 start process.config.js --env production
