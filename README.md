
# Firearm REST API

The Firearms REST API service is a web-based application built using NodeJS, Mongodb and [AnmoJS](https://github.com/Anas-mo101/AnmoJS) for UI, designed to provide developers with an easy-to-use platform for accessing firearm-related data. This service allows users to retrieve information on firearms, including make, model, and specifications, etc.

### Views
- Landing/Front Page
- User Dashboard

### Features
- Login/Registeration
- Caped API call count per user per month (per day; not yet done)
- Generates a x-api-key for each user
- Dockerized 
- Available firearms data seeders

### How to run 
```
docker-compose build
docker-compose up
```
Server will be listen on localhost:3000