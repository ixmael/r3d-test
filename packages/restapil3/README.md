# RestAPI (level3)
This implements the technical test's level 3. This is the RestAPI that store chains and provide the stats of the chains stored.

This use the MongoDB to store the chains.

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
REPOSITORY_URI=mongodb://user:passwor@127.0.0.1:27017/
REPOSITORY_DATABASE=mydatabase
RESTAPI_PORT=3000
```
with:
- the **REPOSITORY_URI** is the URI to connect to the MongoDB server
- **REPOSITORY_DATABASE** is the database in the MongoDB Server.
- **RESTAPI_PORT** is the port where the RestAPI receive the requests.

## Run in local
Execute this to run the RestAPI on the curren host:
```bash
yarn run server
```