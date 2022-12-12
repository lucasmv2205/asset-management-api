import mongoose from 'mongoose'

const assetSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    model: {type: String, required: true},
    status: {type: String,enum: {
      values: ['Running', 'Alerting', 'Stopped'],
      message: '{VALUE} is not supported'
    }, required: true},
    healthLevel: {type: Number, required: true, min: 0, max:100},
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    companyId: {type: mongoose.Schema.Types.ObjectId, ref:'companies', required: true},
    unitId: {type: mongoose.Schema.Types.ObjectId, ref:'units', required: true},
  }
)

const users = mongoose.model('users', assetSchema)

export default users