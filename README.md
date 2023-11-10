# Payment e-comm app
An e-commerce website with REST API

## Features ##
* Cart: Users are able to add products to their cart respecting the available stock limit (inventory)
* Checkout Page and payment procedure implemented with [Stripe](https://stripe.com/en-gb-fr): Once products are added to the cart users can navigate to a checkout page and place an order
* Orders: After placing an order the status of the order is updated in the database with the total price. Product stock is also updated. Users can browse their past orders in personal account
* User authentication: Users need to create an account to proceed to checkout page
* Products search implemented with full-text search based on names of the products
* Filter products according to price range in ascending or descending order

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

## Screenshots ##
<p align="center" width="100%">
<img width="541" alt="Screenshot 2023-11-09 225025" src="https://github.com/a-dylean/payment-app/assets/83976465/561c9537-4901-4317-8b6f-81e41d6b0178">
<img width="555" alt="Screenshot 2023-11-09 225208" src="https://github.com/a-dylean/payment-app/assets/83976465/ebbb36d4-cb9a-4416-8316-fa366da7419f">
<img width="551" alt="Screenshot 2023-11-09 224906" src="https://github.com/a-dylean/payment-app/assets/83976465/30319960-85f9-4d43-a66f-495d329dc2b3">
<img width="548" alt="Screenshot 2023-11-09 225541" src="https://github.com/a-dylean/payment-app/assets/83976465/e0646625-76d4-4942-a704-77e0a8aca39a">
</p>
