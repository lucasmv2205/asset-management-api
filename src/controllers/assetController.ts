import assets from "../entities/Asset";
import { Request, Response } from "express";

class AssetController{

  static listAssets = (req, res) => {
    assets.find((err, assets) => {
      res.status(200).json(assets)
    })
  }

  static getById = (req, res) => {
    const { id } = req.params
    assets.findById(id, (err, assets) => {
      if(err){
        res.status(400).send({message: `${err.message} - error taking the asset`})
      }else{
        res.status(200).send(assets)
      }
    })
  }
  
  static createAsset = (req, res) => {
    let asset = new assets(req.body);

    asset.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - fail creating asset`})
      }else{
        res.status(201).send(asset.toJSON())
      }
    })
  }

  static deleteAsset = (req, res) => {
    const { id } = req.params
    assets.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'asset deleted successfuly'})
      }else{
        res.status(500).send({message: `${err.message} - error deleting asset`})
      }
    })
  }

  static updateAsset = (req, res) => {
    const { id } = req.params

    assets.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send({message: 'asset updated successfuly'})
      }else{
        res.status(500).send({message: `${err.message} - error updating asset`})
      }
    })
  }

}

export default AssetController