import express from "express";
import UnitController from "../controllers/unitsController";

const router = express.Router()

router
  .get('/units', UnitController.listUnits)
  .get('/units/:id', UnitController.getById)
  .post('/units', UnitController.createUnit)

export default router