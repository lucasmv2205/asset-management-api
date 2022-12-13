import express from "express";
import CompanyController from "../controllers/companiesController";

const router = express.Router()

router
  .get('/companies', CompanyController.listCompanies)
  .get('/companies/:id', CompanyController.getById)
  .delete('/companies/:id', CompanyController.deleteCompany)
  .put('/companies/:id', CompanyController.updateCompany)
  .post('/companies/', CompanyController.createCompany)

export default router