import express from "express";
import UsersController from "../controllers/usersController";

const router = express.Router()

router
  .get('/users', UsersController.listUsers)
  .get('/users/:id', UsersController.getById)
  .post('/users', UsersController.createUser)

export default router