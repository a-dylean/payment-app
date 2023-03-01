const express = require("express");
const pool = require("../../db/database");
usersRouter = express.Router();
const UserService = require("../../services/userService");
const UserServiceInstance = new UserService();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: Autogenerated id of the user
 *         name:
 *           type: string
 *           description: Name of the user
 *         surname:
 *           type: string
 *           description: Surname of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         phone:
 *           type: string
 *           description: Phone number of the user
 *         address:
 *           type: string
 *           description: Address of the user
 *         admin:
 *           type: boolean
 *           description: Permissions of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         created_at:
 *           type: string
 *           description: Date of the user account creation
 *       example:
 *         id: 1
 *         name: Bob
 *         surname: Jackson
 *         email: test@test.com
 *         phone: +33 00 00 0000
 *         address: test 
 *         admin: false
 *         password: securepassword
 *         created_at: 2023-02-23T14:38:34.104Z
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: Users operations
  */

 /**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *         500:
 *           description: Internal server error
 */

usersRouter.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query(`SELECT * FROM users`);
    res.json(allUsers.rows);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Gets the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User id
 *     responses:
 *       200:
 *         description: Full information about the particular user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User was not found
 */

usersRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await UserServiceInstance.get({ id: userId });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).json({ message: "User was not found" });
  }
});

/**
 * @swagger
 * /users/{userId}:
 *  put:
 *    summary: Updates the user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User was not found
 *      500:
 *        description: Internal server error
 */

usersRouter.put("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = req.body;
    const response = await UserServiceInstance.update({ id: userId, ...data });
    res.status(200).send(response);
  } catch (err) {
    res.status(404).json({ message: "User was not found" });
  }
});

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     summary: Removes selected user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User id
 * 
 *     responses:
 *       200:
 *         description: User was deleted
 *       404:
 *         description: User was not found
 */

usersRouter.delete('/:userId', async (req, res, next) => {
  try {
      const { userId } = req.params;
      const deleteUser = await UserServiceInstance.delete({ id: userId });
      res.status(204).send(deleteUser);
  } catch (err) {
      next(err);
  }
});

module.exports = usersRouter;
