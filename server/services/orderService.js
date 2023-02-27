const createError = require('http-errors');
const OrderModel = require('../db/models/order');
const OrderModelInstance = new OrderModel;

module.exports = class OrderService {
    async get(data) {
        const { id } = data;
        try {
            const order = await OrderModelInstance.findOrderById(id);
            if (!order) {
                throw createError(404, 'Order not found!');
            }
            return order;
        } catch (err) {
            throw err;
        }
    }

    async register(data) {
        try {
            return await OrderModelInstance.create(data);
        } catch (err) {
            throw createError(500, err);
        }
    }
};