import express from "express";
import AssetController from "../controllers/assetController";

const router = express.Router()

router
  .get('/assets', AssetController.listAssets)
  .get('/assets/:id', AssetController.getById)
  .delete('/assets/:id', AssetController.deleteAsset)
  .put('/assets/:id', AssetController.updateAsset)
  .post('/assets/', AssetController.createAsset)

export default router