all:

CONTAINER_NAME = weebly-garment-demo-container
IMAGE_NAME = local-weebly-garment-demo-dev


build-clean:
	rm -rf node_modules
	rm -rf dist

clean: build-clean

build-dist:
	npm install
	gulp build.prod.aot

#build:
	#docker build -t willstreeter/weebly-garment-demo .

build-dev:
	docker build -t local-weebly-garment-demo -f Dockerfile.dev .

#install:
	#gcloud docker --  push willstreeter/weebly-garment-demo

run-container:
	docker run --name $(CONTAINER_NAME) -d -p 5555:5555  $(IMAGE_NAME)

start:
	docker start $(CONTAINER_NAME)

stop:
	docker stop $(CONTAINER_NAME)

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
