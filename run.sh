#!/bin/bash
echo "Configuring application.."
docker-compose build
echo "Done installing dependecies.."
echo "Running application.."
docker-compose up -d
echo "Confirm both containers are running by running 'docker ps' "
