const express = require("express");
ordersRouter = express.Router();
const OrderService = require('../../services/orderService');
const OrderServiceInstance = new OrderService();

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Autogenerated id of the order
 *         user_id:
 *           type: integer
 *           description: Id of the user who placed the order
 *         created_at:
 *           type: string
 *           description: Date of the order creation
 *         amount:
 *           type: integer
 *           description: Total amount of order
 *       example:
 *         id: 1
 *         user_id: 5
 *         created_at: 2023-02-23T14:38:34.104Z
 *         amount: 175  
 */


 /**
  * @swagger
  * tags:
  *   name: Orders
  *   description: Orders operations
  */

  /**
 * @swagger
 * /orders:
 *   get:
 *     summary: Returns the list of all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *         500:
 *           description: Internal server error
 */

ordersRouter.get('/', async (req, res, next) => {
    try {
        const allProducts = await OrderServiceInstance.getAll();
        res.status(200).send(allProducts)
    } catch (err) {
        next(err);
    }
});

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Gets the order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order id
 *     responses:
 *       200:
 *         description: Full information about the particular order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: The order was not found
 */

ordersRouter.get('/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;
        const selectedOrder = await OrderServiceInstance.get({ id: orderId});
        res.status(200).send(selectedOrder);
    } catch (err) {
        next(err);
    }
});

module.exports = ordersRouter;