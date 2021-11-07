# Coffee APP API 
API to list coffee machines and coffee pods.

## Stack and Tools
Node.js, MongoDB, Express, Mongoose, Jest, Supertest

## Pre-requests
* [Node.js]
* [MongoDB] (Or you can use the below docker commands)

```shell
docker run -p 27017:27017 --name some-mongo -d mongo

```
## How to use it?
* Clone the git repo to your machine
* Switch to the repo folder
* Execute `npm install`
* To seed the database, execute `npm run seed-db`
* To test, execute `npm run test`
* To run the server, execute `npm run dev`

## Configurations:
The API default configurations can be found in the `.env` file,where you can update the following settings:

* Application Port
* Database Settings

## API Endpoints

### Coffee Machines: `GET /coffee/machines`
Use this endpoint to list all coffee machines, and can be used to filter based on the coffee machines attributes.

* **Query URL Example:** `http://localhost:3000/coffee/machines?product_type=COFFEE_MACHINE_SMALL&water_line_compatible=true`

### Coffee Machines: `GET /coffee/pods`
Use this endpoint to list all coffee pods, and can be used to filter based on the coffee pods attributes.

* **Query URL Example:** `http://localhost:3000/coffee/pods?product_type=COFFEE_POD_SMALL&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=3`
