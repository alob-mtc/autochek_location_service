![logo](https://media.autochek.africa/file/publicAssets/full-color-logo-new.png)

## AutoChek Location Service

## Table of Contents

-  [Technologies](#technologies)
-  [Features](#features)
-  [Installation](#installation)
-  [Test](#test)
-  [Service-Description](#service-description)

## Technologies

-  [ES6](http://es6-features.org/) - ECMAScript version six
-  [Typescript](https://www.typescriptlang.org/) - Typed superset of JavaScript Progamming Language
-  [Node](https://nodejs.org/) - Runtime Environment
-  [Nest](https://nestjs.com/) - NodeJs Framework influenced by Angular
-  [PostgreSQL](https://www.postgresql.org/) - Database Management Tool
-  [TypeORM](https://typeorm.io) - ORM that can run in NodeJS, Browser, Cordova, React Native, NativeScript,...and JavaScript (ES5, ES6, ES7, ES8).

## Features

-  Get Started

### Getting Started

### Installation

###### Dependency

-  docker (optional) => to run the postgres DB (we can pull the postgres db image and run it in a container)
-  nodejs
-  postgres database (optional if you have docker installed, we can pull the postgres db image and run it in a container)

-  make sure postgress is runing on port 5432 with user_name: "postgres" and password: "postgres"
-  create a databse with name "autochek"

```bash
$ git clone https://github.com/alob-mtc/autochek_location_service.git

$ Run `yarn install` or `npm install` to install packages

$ Create `.env` file. Use the `xample.env` file as a model for your .env file
-------------------------------------------
SERVICE_NAME="Autochek Location Serivice"
PORT=8082
MODE=DEV
HOST=localhost

TYPEORM_DATABASE_SYNC=false

URL=http://localhost:8082/api/v1/


# database keys
DB_PORT=5432
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=autochek
-------------------------------------------

# $ Run `yarn run:script_dev` to create an ormconfig.yaml file

$ Run `yarn build` to build the code to Js

$ Run `yarn typeorm:migration:run` to run all the Database migrations

$ Run `yarn start:prod` to start the development server

$ Navigate to http://localhost:8082/api-docs in your browser to test APIs endpoint from swagger.
```

## Service-Description

##### Dir structure

Some Major Dirs:

-  Project source code can be found in src folder
-  Controller: Contains https router Implementation that handles request and response
-  service: Contains Service business logic
-  Models: Contains Service Entity which is this case is Location
-  DTO: Containes the Data transfer object transformer methods
-  Repository: contains the service contracts and interfact
-  Repository/contract: contains a base Response interface that help mantian unifrom return/response type accross service methods
-  Migration: Contains Database migration rules for the service

Design Pattern and Reason:

-  Clean Architecture: By default nextjs make use of this Pattern
   Reason: It help you write mentainable and Readable code
