JS_DIR=ui/src/api

.PHONY: proto
proto: proto-go proto-js

.PHONY: proto-go
proto-go:
	protoc \
		--go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		api/app.proto

.PHONY: proto-js
proto-js:
	mkdir -p ${JS_DIR}
	#protoc-gen-grpc \
	#	--js_out=import_style=commonjs,binary:${JS_DIR} \
	#	--grpc_out=grpc_js:${JS_DIR} \
	#	--proto_path=api \
	#	api/app.proto
	protoc-gen-grpc-ts \
		--ts_out=grpc_js:${JS_DIR} \
		--proto_path=api \
		api/app.proto
