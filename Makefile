JS_DIR=ui/src

.PHONY: proto
proto: proto-go proto-js

.PHONY: proto-go
proto-go:
	protoc \
		--go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		./api/application/v1/app.proto

.PHONY: proto-js
proto-js:
	@protoc \
		--js_out=import_style=commonjs,binary:${JS_DIR} \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:${JS_DIR} \
		./api/application/v1/app.proto

.PHONY: docker-ui
docker-ui:
	@cd ui && docker build -t yitsushi/grpc-experiment-ui .

.PHONY: docker-envoy
docker-envoy:
	@cd envoy && docker build -t yitsushi/grpc-experiment-envoy .

.PHONY: docker-backend
docker-backend:
	@docker build -t yitsushi/grpc-experiment-backend .

.PHONY: docker
docker: docker-ui docker-envoy docker-backend

.PHONY: docker-publish
docker-publish:
	docker push yitsushi/grpc-experiment-ui
	docker push yitsushi/grpc-experiment-envoy
	docker push yitsushi/grpc-experiment-backend

.PHONY: proxy-backend
proxy-backend:
	kubectl port-forward -n dummy $(shell kubectl get pods -n dummy | grep -o "backend-envoy-[^ ]*") 7070:8080

.PHONY: proxy-ui
proxy-ui:
	kubectl port-forward -n dummy $(shell kubectl get pods -n dummy | grep -o "ui-[^ ]*") 8080:80
