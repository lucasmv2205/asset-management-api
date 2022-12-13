// import autores from '../models/Autor.js'
import companies from "../entities/Company";

class CompanyController{

  static listCompanies = (req, res) => {
    companies.find((err, companies) => {
      res.status(200).json(companies)
    })
  }

  static getById = (req, res) => {
    const { id } = req.params
    companies.findById(id, (err, companies) => {
      if(err){
        res.status(400).send({message: `${err.message} - error taking the company`})
      }else{
        res.status(200).send(companies)
      }
    })
  }
  
  static createCompany = (req, res) => {
    let company = new companies(req.body);

    company.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - fail creating company`})
      }else{
        res.status(201).send(company.toJSON())
      }
    })
  }

  static deleteCompany = (req, res) => {
    const { id } = req.params
    companies.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'company deleted successfuly'})
      }else{
        res.status(500).send({message: `${err.message} - error deleting company`})
      }
    })
  }

  static updateCompany = (req, res) => {
    const { id } = req.params

    companies.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send({message: 'company updated successfuly'})
      }else{
        res.status(500).send({message: `${err.message} - error updating company`})
      }
    })
  }

}

export default CompanyController