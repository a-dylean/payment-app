const express = require("express");
productsRouter = express.Router();
const ProductService = require("../../services/productService");
const ProductServiceInstance = new ProductService();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Autogenerated id of the product
 *         name:
 *           type: string
 *           description: Name of the product
 *         description:
 *           type: string
 *           description: Description of the product
 *         price:
 *           type: integer
 *           description: Price of the product
 *         available:
 *           type: boolean
 *           description: Availability of the product
 *         category_id:
 *           type: integer
 *           description: Id of the category the product belongs to
 *       example:
 *         name: Calathea Theo
 *         description: This is a plant with extraordinary patterns that all green addicts would like to have!
 *         price: 75
 *         available: true
 *         categoryId: 1
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products operations
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all products
 *     description: Returns all products from the system
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: All products are successfully fetched. The response will contain the array of objects.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 * 
 * /products?category={categoryId}:
 *   get:
 *     summary: Returns the list of products filtered by category
 *     description: Returns products from the system matching the selected category id.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: All products are successfully fetched. The response will contain the array of objects.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */

//retrieve products by category
productsRouter.get("/", async (req, res, next) => {
  try {
    const category = req.query.category;
    if (category) {
      const selectedProducts = await ProductServiceInstance.filter({
        category: category,
      });
      res.status(200).send(selectedProducts);
    } else {
      const allProducts = await ProductServiceInstance.getAll();
      res.status(200).send(allProducts);
    }
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Find products by ID
 *     description: Returns selected by id product from the system.
 *     tags: [Products]
 *     responses:
 *       '200':
 *          description: Full information about the selected product.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 *       '404':
 *          description: Product was not found
 *     parameters:
 *     - name: productId
 *       in: path
 *       description: ID of product to use
 *       required: true
 */

productsRouter.get("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const selectedProduct = await ProductServiceInstance.get({ id: productId });
    res.status(200).send(selectedProduct);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /products/{productId}:
 *  put:
 *    summary: Updates the product by id
 *    description: Updates selected product in the system.
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: productId
 *        required: true
 *        description: ID of product to use
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: Product was updated.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: User was not found.
 *      500:
 *        description: Internal server error.
 */
productsRouter.put("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const response = await ProductServiceInstance.update({
      id: productId,
      ...data,
    });
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Creates a new product
 *     description: Creates a new product in the system.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: integer
 *               available:
 *                 type: boolean
 *               category_id:
 *                 type: integer
 *     responses:
 *       '200':
 *          description: New product was added to the system. The response will contain the Product object that was created.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Internal server error.
 *
 */

productsRouter.post("/", async (req, res, next) => {
  const { name, description, price, available, categoryId } = req.body;
  try {
    const newProduct = await ProductServiceInstance.register({
      name,
      description,
      price,
      available,
      categoryId,
    });
    res.status(200).send(newProduct);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /products/{productId}:
 *   delete:
 *     summary: Removes selected product by id
 *     description: Deletes selected product in the system.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: Product id
 *     responses:
 *       204:
 *         description: Product was deleted
 *       404:
 *         description: Product was not found
 */

productsRouter.delete("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const deleteProduct = await ProductServiceInstance.delete({
      id: productId,
    });
    res.status(204).send(deleteProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = productsRouter;
