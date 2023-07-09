# RestAPI (level2)
This implements the technical test's level 2. This is the RestAPI that responses if a chain has sequences or not.

## Setup
You have to install the dependencies with:
```bash
# npm
npm install

# yarn
yarn install
```

You have to create a *.env* file with the parameters for the RestAPI. This an example:
```txt
RESTAPI_PORT=3000
```
with:
- **RESTAPI_PORT** is the port where the RestAPI receive the requests.

## Run in local
Execute this to run the RestAPI on the curren host:
```bash
yarn run server
```