# Flights and Services Platform

## Project Setup

- Clone the project on your local machine.
- Run the following command in the root directory:

```bash
npm install
```
- Create a .env file in the root directory and add:
```
PORT=3000
```
- Inside the src/config folder, create a file named config.json and add:

```bash
JSON

{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

```
 Once You've added your db config as listed above, go to the src folder from your terminal and execute `npx seuelize db:create`
and then execute

` npx sequelize db:migrate`
```

## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A Flight belongs to an airplane but one airplane can be used in multiple filghts.
  - A city has many airports but one airport belongs to a city.
  - One airport can have many flights, but a flight belongs to one airport.



