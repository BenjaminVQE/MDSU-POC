APP_NAME := mdsu-app
DOCKER_IMAGE := $(APP_NAME):latest
PORT ?= 3000

.PHONY: install dev build start lint docker-build docker-run docker-stop

install:
	make docker-build
	make docker-run

dev:
	@npm run dev

build:
	@npm run build

start:
	@npm start

lint:
	@npm run lint

docker-build:
	@docker build -t $(DOCKER_IMAGE) .

docker-run:
	@docker run --rm -p $(PORT):80 --name $(APP_NAME) -d $(DOCKER_IMAGE)

docker-stop:
	@docker stop $(APP_NAME) || true

