from node:16.13.2-alpine as builder

workdir /app

copy package-lock.json .
copy package.json .

run npm install --silent

copy . ./

run ["npm", "run", "build"]

from nginx:alpine

label maintainer="Efertone <efertone@pm.me>"

copy --from=builder /app/build /usr/share/nginx/html
