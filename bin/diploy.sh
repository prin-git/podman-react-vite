#!/bin/bash
if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = "down" || $2 = "up" ]]; then
    cd ..
    fileEnv="podman-compose.${1}.yaml"
    downOrUp=$2
    echo "Running podman-compose -f $fileEnv $downOrUp"
    podman-compose -f $fileEnv $downOrUp
else
    echo 'Need to follow format ./deploy prod|dev down|up'
fi