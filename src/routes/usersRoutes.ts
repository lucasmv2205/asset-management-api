import express from "express";
import UsersController from "../controllers/usersController";

const router = express.Router()

router
  .get('/users', UsersController.listUsers)
  .get('/users/:id', UsersController.getById)
  .delete('/users/:id', UsersController.deleteUser)
  .put('/users/:id', UsersController.updateUser)
  .post('/users/', UsersController.createUser)

export default router