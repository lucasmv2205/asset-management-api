import express from "express";
import CompanyController from "../controllers/companiesController";

const router = express.Router()

router
  .get('/companies', CompanyController.listCompanies)
  .get('/companies/:id', CompanyController.getById)
  .post('/companies', CompanyController.createCompany)

export default router