import units from "../entities/Unit";
import { Request, Response } from "express";

class UnitController{

  static listUnits = (req, res) => {
    units.find((err, units) => {
      res.status(200).json(units)
    })
  }

  static getById = (req, res) => {
    const { id } = req.params
    units.findById(id, (err, units) => {
      if(err){
        res.status(400).send({message: `${err.message} - error taking the unit`})
      }else{
        res.status(200).send(units)
      }
    })
  }
  
  static createUnit = (req, res) => {
    let unit = new units(req.body);

    unit.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - fail creating unit`})
      }else{
        res.status(201).send(unit.toJSON())
      }
    })
  }

}

export default UnitController