FROM mongo:latest

MAINTAINER Frank Akogun


ENV PORT=27017

# Define mountable directories.
VOLUME ["/data/db"]

# Define working directory.
WORKDIR /data

EXPOSE $PORT

CMD ["mongod", "--bind_ip_all"]


