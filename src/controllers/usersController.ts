import users from "../entities/User";
import { Request, Response } from "express";

class UnitController{

  static listUsers = (req, res) => {
    users.find((err, units) => {
      res.status(200).json(units)
    })
  }

  static getById = (req, res) => {
    const { id } = req.params
    users.findById(id, (err, users) => {
      if(err){
        res.status(400).send({message: `${err.message} - error taking the user`})
      }else{
        res.status(200).send(users)
      }
    })
  }
  
  static createUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - fail creating user`})
      }else{
        res.status(201).send(user.toJSON())
      }
    })
  }

}

export default UnitController