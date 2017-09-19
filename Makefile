all:
NGINX_CONTAINER_NAME = local-gh-pages-harness
CONTAINER_NAME = local-ws-frontend-product
IMAGE_NAME = local-ws-frontend-product:latest
NGINX_IMAGE_NAME = local-gh-pages-harness:latest


build-clean:
	rm -rf node_modules
	rm -rf dist

clean: build-clean

build-dist:
	npm install
	gulp build.prod.aot

build-dev:
	docker build -t  local-ws-frontend-product -f Dockerfile.dev .

build-multi-dev:
	docker build -t  local-ws-frontend-product -f Dockerfile.dev .
	docker build -t  local-gh-pages-harness -f Dockerfile.nginx.dev .

run-container:
	docker run --name $(CONTAINER_NAME) -d -p 5555:5555  $(IMAGE_NAME)

run-multi-container:
	docker run --name $(CONTAINER_NAME) -d -p 5555:5555  $(IMAGE_NAME)
	docker run --name $(NGINX_CONTAINER_NAME) -d -p 80:80  $(NGINX_IMAGE_NAME)

start:
	docker start $(CONTAINER_NAME)


start-multi:
	docker start $(CONTAINER_NAME) & $(NGINX_CONTAINER_NAME)

stop:
	docker stop $(CONTAINER_NAME)


stop-multi:
	docker stop $(CONTAINER_NAME) & $(NGINX_CONTAINER_NAME)

rm:
	docker rm $(CONTAINER_NAME)

up:
	docker-compose up

down:
	docker-compose down

logs:
	docker logs -f  $(CONTAINER_NAME)

ssh-exec:
	docker exec -it $(CONTAINER_NAME) sh
