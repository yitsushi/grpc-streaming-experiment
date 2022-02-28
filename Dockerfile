from golang:1.17.7-alpine3.15 as gobuild

copy . /code
workdir /code
run go build -o /server ./server

from alpine:3.15

label maintainer="Efertone <efertone@pm.me>"

copy --from=gobuild /server /server

cmd "/server"

