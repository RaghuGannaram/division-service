### setup docker container

```bash
docker network create calculation-microservices-network

docker image build --tag raghugannaram/division-service:1.0.0 ./

docker container run \
> --detach \
> --name division-service \
> --publish 9004:9004 \
> --network calculation-microservices-network \
> --env LOG_LEVEL=debug \
> --mount type=bind,source="$(pwd)/_docker/logs",target=/app/logs \
> raghugannaram/division-service:1.0.0

```

