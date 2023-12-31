# Payment e-comm app
An e-commerce website with REST API

## Features ##
* Cart: Users are able to add products to their cart respecting the available stock limit (inventory). Quantity of a product can be changed in the cart.
* Checkout Page and payment procedure: Once products are added to the cart users can navigate to a checkout page and place an order. Payment is implemented with [Stripe](https://stripe.com/en-gb-fr). After successfull payment the inventory is updated. 
* Orders: After placing an order the status of the order is updated in the database with the total price. Product stock is also updated. Users can browse their past orders in personal account.
* User authentication: Users need to create an account to proceed to checkout page. Authentication is implemented with JWT.
* Products search implemented with full-text search based on names of the products.
* Filter products according to price range in ascending or descending order.

## Technologies ##
⚙️Backend:
* [Node.js](https://nodejs.org/en/docs)
* [Express.js](https://expressjs.com/)
* [Prisma](https://www.prisma.io/docs)
* [MySQL](https://www.mysql.com/)
* [Tsoa](https://tsoa-community.github.io/docs/)

🎨Frontend:
* [React](https://react.dev/)
* [TanStack Query](https://tanstack.com/query/latest/docs/react/overview)
* [Axios](https://axios-http.com/docs/intro)
* [Material UI](https://mui.com/material-ui/)

## How to run locally ##
1. Clone the repository.
```
git clone https://github.com/a-dylean/payment-app.git
```
2. To run backend navigate to `server` folder.
3. To set up Stripe webhook for checkout procedure you need to create a Stripe account and generate secret API key (documentation [here](https://stripe.com/docs/keys)). Add your secret key to .env and .docker-compose.env files.
4. Configure docker container to run the server and database.
```
docker-compose -f docker-compose.yml up --build
```
NB! You need to run this command twice: first to set up Stripe webhook listener and second to run the server with configured key.

5. Seed the database (I removed this command from script to prevent seeding the db each time the container is built).
```
npx prisma db seed
```
6. Navigate to `client` folder, install dependencies and run frontend on localhost:3000.
```
npm i && npm run start
```

## Screenshots ##
<p align="center" width="100%">
<img width="541" alt="Screenshot 2023-11-09 225025" src="https://github.com/a-dylean/payment-app/assets/83976465/83dccb85-0159-4d50-aa81-bbdb2b357c4b">
<img width="555" alt="Screenshot 2023-11-09 225208" src="https://github.com/a-dylean/payment-app/assets/83976465/a57fa0c5-d90e-450e-b792-4f5ff5cdaa72">
<img width="548" alt="Screenshot 2023-11-09 225541" src="https://github.com/a-dylean/payment-app/assets/83976465/92faa820-407a-4f82-9691-2df7b4ce87ab">
<img width="551" alt="Screenshot 2023-11-09 224906" src="https://github.com/a-dylean/payment-app/assets/83976465/8b9665ed-3875-44f6-bcef-b331df1f46a2">
</p>
