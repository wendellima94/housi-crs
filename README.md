## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

Execute Postman/Insomnia 
routes

method @POST
http://localhost:3000/room-reserve/
Example : sent from the body
{
    "_id": "6281a2da28b8950eec5ca966",
    "apartmentName": "quarto 42",
    "checkIn": "2024-03-30T03:00:00.000Z",
    "checkOut": "2023-11-10T03:00:00.000Z",
    "quantityGuests": 1,
    "nameGuests": [
        "jhon",
        "lary",
        "anisia"
    ],
    "emailGuests": [
        "jhon@a.com",
        "lary@a.com",
        "anisia@a.com"
    ],
}

method @GET
http://localhost:3000/room-reserve/

method @GET with param _ID MongoDb
http://localhost:3000/room-reserve/:id

method @PATCH for edit with _ID MongoDb
http://localhost:3000//room-reserve/:id
Example : sent from the body
{
    "_id": "6281a2da28b8950eec5ca966",
    "apartmentName": "quarto 42",
    "checkIn": "2024-03-30T03:00:00.000Z",
    "checkOut": "2023-11-10T03:00:00.000Z",
    "quantityGuests": 1,
    "nameGuests": [
        "jhon",
        "lary",
        "anisia"
    ],
    "emailGuests": [
        "jhon@a.com",
        "lary@a.com",
        "anisia@a.com"
    ],
}


method @DELETE with param _ID MongoDb
http://localhost:3000/room-reserve/:id
