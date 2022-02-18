JS_DIR=public/src

.PHONY: proto
proto: proto-go proto-web

.PHONY: proto-go
proto-go:
	protoc \
		--go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		api/app.proto

.PHONY: proto-web
proto-web:
	mkdir -p ${JS_DIR}
	protoc \
		--js_out=import_style=commonjs:${JS_DIR} \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:${JS_DIR} \
		api/app.proto
