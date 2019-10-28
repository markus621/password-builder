.PHONY: install
install:
	@rm -rf ./node_modules
	@npm ci

.PHONY: start
start:
	@npm run start

.PHONY: build
build:
	@npm run build -- --prod

.PHONY: prod-run
prod-run: install build
	http-server -p 8080 -c-1 dist/password-builder
