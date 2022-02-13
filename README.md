
# Ecommerce API

Problem Statement :

Design an API for an ecommerce platform admin to manage product inventory

## Features Required


-> Models/Schemas: Products [fields: id, name, quantity]

-> API to add products to the database

   URL [POST] : /products/create

-> API to list products

URL [GET] : /products

-> API to delete products

URL [DELETE] : /products/:id

-> API to update quantity of a product (can be incremented or decremented)

URL [POST] : /products/:id/update_quantity/?number=10
## How to Install

-> Clone the project onto your local machine.

-> Run 'npm install' to install required dependencies.

-> Run 'npm start' to start the application.

-> Visit the application at http://localhost:8000.

-> Use Postman for making Requests.
## Demo

https://ecommerce-api-app-prod.herokuapp.com/