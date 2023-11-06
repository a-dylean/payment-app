# Payment e-comm app
An ecommerce website with standard functionality using backend REST API

[Deployed version](https://plantie.atonkopiy.com/)
(Note that loading might be slow due to free plan on Render hosting platform)

## Features ##
* Cart: Users are able to add products to their cart, respecting the available stock limit
* Checkout Page: Once products are added, users are be able to navigate to a checkout page and place an order
* Orders: After placing an order, an entry is created in the database with the total price and each item in the order. Product stock is also updated.

## Technologies ##
⚙️Backend:
* [Node.js](https://nodejs.org/en/docs)
* [Express.js](https://expressjs.com/)
* [Prisma](https://www.prisma.io/docs)
* [PostgreSQL](https://www.postgresql.org/)
* [Tsoa](https://tsoa-community.github.io/docs/)

🎨Frontend:
* [React](https://react.dev/)
* [TanStack Query](https://tanstack.com/query/latest/docs/react/overview)
* [Axios](https://axios-http.com/docs/intro)
* [Material UI](https://mui.com/material-ui/)
